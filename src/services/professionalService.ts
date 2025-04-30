// services/professionalService.ts
import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

const DB_NAME = "cwbdiaristas";

export type Professional = {
  _id?: ObjectId;
  nome: string;
  telefone: string;
  email: string;
  cidade: string;
  experiencia: string;
  disponibilidade: string[];
  serviceZones: string[];
  createdAt: Date;
};

export type UserInfo = {
  _id?: string;
  userId: string;
  availabilitySchedule: {
    userInfoId: string;
    dayOfWeek: string;
    id: string;
    startTime: string;
    endTime: string;
  }[];
  avatar: string;
  languages: string[];
  skills: string[];
  price: number;
  bio: string;
  experience?: string;
  rating: number;
  serviceZones: {
    id: string;
    name: string;
    neighborhood: string;
  }[];
};

export type UserProfessional = {
  _id?: string;
  nome: string;
  telefone: string;
  email: string;
  cidade: string;
  experience: string;
  createdAt: Date;
  userInfo: UserInfo;
};

export async function createProfessional(
  professionalData: Omit<Professional, "_id" | "createdAt">
) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);

  const result = await db.collection("professionals").insertOne({
    ...professionalData,
    createdAt: new Date(),
  });

  return result;
}

export async function getProfessionalByEmail(email: string) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);

  return db.collection("professionals").findOne({ email });
}

export async function getAllProfessionals() {
  const client = await clientPromise;
  const db = client.db(DB_NAME);

  return db.collection("professionals").find({}).toArray();
}

export async function searchProfessionals(neighborhood: string, days: string[]) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);

  // First find service zones that match the neighborhood
  const serviceZones = await db.collection("serviceZones").find({
    neighborhood: { $regex: new RegExp(neighborhood, 'i') }
  }).toArray();

  const serviceZoneIds = serviceZones.map(zone => zone._id);

  // Then find user service zones that match
  const userServiceZones = await db.collection("userServiceZones").find({
    serviceZoneId: { $in: serviceZoneIds }
  }).toArray();

  const userInfoIds = userServiceZones.map(usz => usz.userInfoId);

  // Find schedules that match the requested days
  const schedules = await db.collection("schedules").find({
    userInfoId: { $in: userInfoIds },
    dayOfWeek: { $in: days }
  }).toArray();

  const matchingUserInfoIds = [...new Set(schedules.map(s => s.userInfoId))];

  // Get the user info for matching professionals
  const userInfos = await db.collection("userInfo").find({
    _id: { $in: matchingUserInfoIds },
    verificationStatus: "VERIFIED"
  }).toArray();

  const userIds = userInfos.map(ui => ui.userId);

  // Finally get the users
  return db.collection("users").find({
    _id: { $in: userIds },
    role: "PROFESSIONAL",
    status: "ACTIVE"
  }).toArray();
}

export async function getLastProfessionals(limit: number = 6): Promise<UserProfessional[]> {
  const client = await clientPromise;
  const db = client.db(DB_NAME);

  const professionals = await db.collection("User")
    .find({
      role: "PROFESSIONAL",
      status: "ACTIVE"
    })
    .sort({ createdAt: -1 })
    .limit(limit)
    .toArray();

  const usersIds = professionals.map(prof => prof._id);

  const userInfos = await db.collection("UserInfo")
    .find({ userId: { $in: usersIds } })
    .toArray();

  const userInfoIds = userInfos.map(usr => usr._id);

  const schedules = await db.collection("Schedule")
    .find({ userInfoId: { $in: userInfoIds } })
    .toArray();

  const userServiceZones = await db.collection("UserServiceZones")
    .find({ userInfoId: { $in: userInfoIds } })
    .toArray();

  const serviceZoneIds = userServiceZones.map(usz => usz.serviceZoneId);
  const serviceZones = await db.collection("ServiceZones")
    .find({ _id: { $in: serviceZoneIds } })
    .toArray();

  return professionals.map(professional => {
    const userInfo = userInfos.find(ui => ui.userId.toString() === professional._id?.toString());
    const userSchedules = schedules.filter(s => s.userInfoId.toString() === userInfo?._id?.toString());

    const userServiceZoneIds = userServiceZones
      .filter(usz => usz.userInfoId.toString() === userInfo?._id?.toString())
      .map(usz => usz.serviceZoneId.toString().trim());

    const userZones = serviceZones.filter((sz) => {
      const serviceZoneId = sz._id.toString().trim();
      const isIncluded = userServiceZoneIds.some(id => id.trim() === serviceZoneId);
      return isIncluded;
    });

    return {
      _id: professional._id?.toString(),
      nome: professional.nome,
      telefone: professional.telefone,
      email: professional.email,
      cidade: professional.cidade,
      experience: professional.experience,
      createdAt: professional.createdAt,
      userInfo: {
        _id: userInfo?._id?.toString(),
        userId: userInfo?.userId.toString() || '',
        availabilitySchedule: userSchedules.map(s => ({
          userInfoId: s.userInfoId.toString(),
          dayOfWeek: s.dayOfWeek,
          id: s._id.toString(),
          startTime: s.startTime,
          endTime: s.endTime
        })),
        avatar: userInfo?.avatar || '',
        languages: userInfo?.languages || [],
        skills: userInfo?.skills || [],
        price: userInfo?.price || 0,
        bio: userInfo?.bio || '',
        experience: userInfo?.experience || '',
        rating: userInfo?.rating || 0,
        serviceZones: userZones.map(z => ({
          id: z._id.toString(),
          name: z.name,
          neighborhood: z.neighborhood
        }))
      }
    };
  });
}
