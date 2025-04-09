// services/professionalService.ts
import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

const DB_NAME = "cwbdiaristas";

export type ServicesZone = {
  _id?: ObjectId;
  neighborhood: string;
  city: string;
  state: string;
};

export async function getAll() {
  const client = await clientPromise;
  const db = client.db(DB_NAME);

  return db.collection("serviceZones").find({}).toArray();
}
