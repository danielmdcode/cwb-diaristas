import { getAll, ServicesZone } from "@/services/zonesService"; // Ajuste o caminho conforme necessário
import SearchBarForm from "./SearchBarForm";

export default async function SearchBarWrapper() {
  const zonesData = await getAll();

  const zones: ServicesZone[] = zonesData.map((zone) => ({
    id: zone._id.toString(),
    neighborhood: zone.neighborhood,
    city: zone.city,
    state: zone.state,
  }));

  return <SearchBarForm initialZones={zones} />;
}
