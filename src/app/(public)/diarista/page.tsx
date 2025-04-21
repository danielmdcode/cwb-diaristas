import Image from "next/image";
import ProfessionalSignupFormWrapper from "./components/ProfessionalSignupFormWrapper";

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

export default function Diarista() {
  return (
    <>
      <section
        className="bg-white py-16 px-6 text-center relative"
        style={{
          backgroundImage: `url("/background.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white opacity-40 absolute top-0 left-0 w-full h-full z-0"></div>
        <div className="z-10 flex flex-col items-center justify-center relative">
          <Image
            src={"/cwb_diaristas_logo.svg"}
            alt="CWB Diaristas"
            width={200}
            height={242}
          />
          <h1 className="text-4xl font-bold py-8">
            Comece a ganhar mais fazendo o que você já faz de melhor
          </h1>
          <p className="text-xl max-w-xl mx-auto mb-8">
            Estamos lançando uma nova plataforma em Curitiba para conectar
            profissionais de limpeza a clientes de forma rápida, segura e sem
            complicação. Cadastre-se para ser uma das primeiras a testar e
            conquistar novos clientes.
          </p>
          <a
            href="#cadastro"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg"
          >
            Quero ser uma das primeiras
          </a>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#ADDFDF] text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Você cuida das casas. A gente cuida para trazer os clientes até você.
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          Já imaginou receber pedidos de limpeza direto no seu celular, com
          horário marcado e pagamento garantido?
          <br />
          <br />
          Nossa plataforma conecta você a pessoas reais, que precisam de limpeza
          e valorizam um trabalho bem feito. Sem enrolação, sem depender de
          indicação.
        </p>
      </section>

      <section className="py-32 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          Trabalhar com a gente é simples
        </h2>
        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">1. Crie seu perfil</h3>
            <p>Conte um pouco sobre você e seu trabalho.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">2. Receba pedidos</h3>
            <p>Aceite os serviços que quiser, quando quiser.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">3. Faça a limpeza</h3>
            <p>E receba rápido, direto na sua conta.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          Por que vale a pena ser uma das primeiras profissionais da nossa
          plataforma?
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-left items-center">
          <div>
            <p className="mb-4">
              💰 <strong>Pagamento em até 2 dias</strong> após a confirmação do
              serviço
            </p>
            <p className="mb-4">
              🧾 <strong>Você escolhe os dias e horários</strong> que quer
              trabalhar
            </p>
            <p className="mb-4">
              🌟 <strong>Seu perfil com avaliações</strong> e destaque para quem
              faz um bom trabalho
            </p>
            <p className="mb-4">
              📲 <strong>Receba novos clientes</strong> sem sair de casa
            </p>
            <p>
              🎁 <strong>Benefícios exclusivos</strong> para quem começar com a
              gente
            </p>
          </div>
          <div>
            <Image
              src={"/cwb_diaristas_1.png"}
              alt="Diaristas"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Estamos começando por Curitiba — e queremos crescer com você
        </h2>
        <p className="max-w-xl mx-auto text-lg mb-6">
          Se você trabalha com limpeza, é organizada, responsável e quer ter
          mais liberdade para escolher seus horários, essa oportunidade é pra
          você. Vamos te dar suporte, visibilidade e garantir que seu trabalho
          seja valorizado.
        </p>
      </section>

      <section className="bg-[#ADDFDF] py-20 px-6 md:px-12" id="cadastro">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            As 100 primeiras profissionais terão destaque especial
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Estamos selecionando agora mesmo as primeiras parceiras da plataforma.<br/>
            Entre para a lista de interessadas e garanta:
          </p>
          <ul className="text-left max-w-md mx-auto text-gray-700 mb-6 list-disc list-inside">
            <li><strong>6 meses sem taxas</strong></li>
            <li><strong>Destaque nos resultados de busca</strong></li>
            <li><strong>Total apoio da nossa equipe</strong></li>
          </ul>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Uma chance única de conquistar clientes fixos e fazer parte de algo grande desde o início. <br />
            <strong className="text-red-500">Vagas limitadas: faltam 98 profissionais!</strong>
          </p>
          <ProfessionalSignupFormWrapper />
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 CWB Diaristas. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
