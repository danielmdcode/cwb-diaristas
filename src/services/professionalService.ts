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
  createdAt: Date;
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
