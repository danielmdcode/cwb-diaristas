import { getAll, ServicesZone } from "@/services/zonesService"; // Ajuste o caminho conforme necessário
import ProfessionalSignupForm from "./ProfessionalSignupForm";

export default async function ProfessionalSignupFormWrapper() {
  const zonesData = await getAll();

  const zones: ServicesZone[] = zonesData.map((zone) => ({
    id: zone._id.toString(),
    neighborhood: zone.neighborhood,
    city: zone.city,
    state: zone.state,
  }));

  return <ProfessionalSignupForm initialZones={zones} />;
}
