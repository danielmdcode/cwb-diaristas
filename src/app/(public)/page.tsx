import SearchBarWrapper from "@/components/search-bar/SearchBarWrapper";
import ProfessionalSliderWrapper from "@/components/ProfessionalSlider/ProfessionalSliderWrapper";

export const metadata = {
  openGraph: {
    title: 'CWB Diaristas',
    description: 'Comece a ganhar mais fazendo o que você já faz de melhor. Conectamos profissionais de limpeza a clientes em Curitiba.',
    images: [
      {
        url: '/background.png',
        width: 1200,
        height: 630,
        alt: 'CWB Diaristas',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className="bg-primary py-20">
        <div className="container mx-auto flex flex-col justify-start items-start text-white gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Agende agora!</h2>
            <h3 className="text-2xl font-bold">Mais de 500 mil especialistas de saúde estão prontos para te ajudar</h3>
          </div>
          <SearchBarWrapper />
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Perfis em destaque no CWB Diaristas</h2>
          <ProfessionalSliderWrapper />
        </div>
      </section>
    </>
  );
}
