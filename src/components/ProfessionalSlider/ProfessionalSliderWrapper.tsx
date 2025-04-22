// Ajuste o caminho conforme necessário
import { ProfessionalSlider } from "./ProfessionalSlider";
import { getLastProfessionals, UserProfessional } from "@/services/professionalService";

export default async function ProfessionalSliderWrapper() {
  const latestProfessionals = await getLastProfessionals();

  const professionals: UserProfessional[] = latestProfessionals.map((professional) => ({
    _id: professional._id?.toString(),
    nome: professional.nome,
    telefone: professional.telefone,
    email: professional.email,
    cidade: professional.cidade,
    experiencia: professional.experiencia,
    createdAt: professional.createdAt,
    userInfo: {
      _id: professional.userInfo._id?.toString(),
      userId: professional.userInfo.userId.toString(),
      availabilitySchedule: professional.userInfo.availabilitySchedule.map(schedule => ({
        ...schedule,
        userInfoId: schedule.userInfoId.toString(),
        id: schedule.id.toString()
      })),
      avatar: professional.userInfo.avatar,
      languages: professional.userInfo.languages,
      skills: professional.userInfo.skills,
      price: professional.userInfo.price,
      bio: professional.userInfo.bio,
      rating: professional.userInfo.rating,
      serviceZones: professional.userInfo.serviceZones.map(zone => ({
        ...zone,
        id: zone.id.toString()
      }))
    }
  }));

  return <ProfessionalSlider professionals={professionals} />;
}
