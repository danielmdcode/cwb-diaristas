import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CWB Diaristas | Cadastro de Diaristas e Profissionais de Limpeza em Curitiba",
  description: "Cadastre-se como diarista ou profissional de limpeza em Curitiba. Encontre novos clientes, tenha liberdade de horários e receba pagamentos em até 2 dias. Plataforma exclusiva para Curitiba e região.",
  keywords: "diarista, profissional de limpeza, faxineira, emprego diarista, trabalho de limpeza, Curitiba, cadastro diarista, serviço de limpeza",
  openGraph: {
    title: "CWB Diaristas | Cadastro de Diaristas em Curitiba",
    description: "Seja uma das primeiras diaristas na nossa plataforma em Curitiba. Ganhe mais, escolha seus horários e receba pagamentos rápidos.",
    type: "website",
    locale: "pt_BR",
    siteName: "CWB Diaristas",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://cwbdiaristas.com.br"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CWB Diaristas - Profissionais de Limpeza em Curitiba</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" /> 
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8HX4HRGYXF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8HX4HRGYXF');
          `}
        </Script>
        <Script
          type="application/ld+json"
          id="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CWB Diaristas",
              "description": "Plataforma de conexão entre diaristas e clientes em Curitiba",
              "url": "https://cwbdiaristas.com.br",
              "areaServed": {
                "@type": "City",
                "name": "Curitiba",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Paraná"
                }
              },
              "serviceType": ["Serviços de Limpeza Residencial", "Diarista"],
              "potentialAction": {
                "@type": "JoinAction",
                "target": "https://cwbdiaristas.com.br#cadastro",
                "actionStatus": "PotentialActionStatus",
                "description": "Cadastre-se como diarista"
              }
            })
          }}
        />
      </head>
      <body
        className={`${openSans.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
