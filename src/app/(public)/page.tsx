import SearchBarWrapper from "@/components/search-bar/SearchBarWrapper";
import Image from "next/image";
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
      <header className="bg-white">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <Image src="/assets/imgs/cwb_diaristas_logo_inline.svg" alt="CWB Diaristas" width={200} height={100} />
            <div className="menu flex justify-end items-center gap-10">
              <ul className="nav-bar flex items-center justify-start gap-10 font-bold">
                <li className="cursor-pointer transition relative py-6 group">
                  Home
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary opacity-100 transition-all duration-300"></div>
                </li>
                <li className="cursor-pointer transition relative py-6 group">
                  Sobre
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </li>
                <li className="cursor-pointer transition relative py-6 group">
                  Contato
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </li>
                <li className="cursor-pointer transition relative py-6 group">
                  Login
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </li>
                <li className="cursor-pointer transition relative py-6 group">
                  Cadastro
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </li>
              </ul>
              <button className="bg-secondary text-white font-bold px-4 py-3 rounded-md hover:bg-white hover:text-primary transition cursor-pointer">
                ENTRAR
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
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

      </main>

      <footer className="bg-gray-800 text-white text-center py-10 mt-12 bg-[url(/assets/imgs/footer_bg.jpg)] bg-cover bg-center">
        &copy; 2025 CWB Diaristas - Todos os direitos reservados
      </footer>
    </>
  );
}
