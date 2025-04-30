import { notFound } from "next/navigation";

import { User } from "@/app/types";
import { httpGet } from "@/lib/axios";
import { ENDPOINTS } from "@/config/routes";
import ProfilePage from "./Profile.ui";

type IProfessionalDetailPage = {
  params: { id: string };
};

export default async function ProfessionalDetailPage({ params }: IProfessionalDetailPage) {
  const { id } = params;
  const professionalDetail = await httpGet<User>(`${ENDPOINTS.PROFESSIONALS.ID}/${id}`)
  if (!professionalDetail) return notFound();

  return <ProfilePage professionalDetail={professionalDetail} />
} 