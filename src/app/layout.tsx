import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Curitiba" />
        <meta name="author" content="CWB Diaristas" />
        <meta name="theme-color" content="#ADDFDF" />
        <title>CWB Diaristas - Profissionais de Limpeza em Curitiba</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <Script
          type="application/ld+json"
          id="organization-structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CWB Diaristas",
              "description": "Plataforma de conexão entre diaristas e clientes em Curitiba",
              "url": "https://cwbdiaristas.com.br",
              "logo": "https://cwbdiaristas.com.br/cwb_diaristas_logo.svg",
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
        <Script
          type="application/ld+json"
          id="local-business-structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "CWB Diaristas",
              "image": "https://cwbdiaristas.com.br/cwb_diaristas_logo.svg",
              "description": "Plataforma que conecta profissionais de limpeza a clientes em Curitiba",
              "@id": "https://cwbdiaristas.com.br",
              "url": "https://cwbdiaristas.com.br",
              "telephone": "",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Curitiba",
                "addressRegion": "PR",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -25.4284,
                "longitude": -49.2733
              },
              "areaServed": {
                "@type": "City",
                "name": "Curitiba"
              }
            })
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
              send_page_view: true,
              site_speed_sample_rate: 100
            });

            // Monitor Core Web Vitals
            window.addEventListener('load', function() {
              if ('performance' in window) {
                const observer = new PerformanceObserver((list) => {
                  list.getEntries().forEach((entry) => {
                    const metric = entry.name;
                    const value = entry.value;
                    
                    gtag('event', 'web_vitals', {
                      event_category: 'Web Vitals',
                      event_label: metric,
                      value: Math.round(value),
                      non_interaction: true,
                    });
                  });
                });

                observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input-delay', 'cumulative-layout-shift'] });
              }
            });

            // Monitor 404 errors
            if (document.title.includes('404')) {
              gtag('event', '404_error', {
                event_category: 'Error',
                event_label: window.location.pathname + window.location.search,
                non_interaction: true
              });
            }

            // Monitor user engagement
            document.addEventListener('DOMContentLoaded', function() {
              const scrollDepthMarkers = [25, 50, 75, 90];
              let markers = new Set(scrollDepthMarkers);
              
              window.addEventListener('scroll', function() {
                const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
                
                markers.forEach(marker => {
                  if (scrollPercent >= marker) {
                    gtag('event', 'scroll_depth', {
                      event_category: 'Engagement',
                      event_label: marker + '%',
                      non_interaction: false
                    });
                    markers.delete(marker);
                  }
                });
              });
            });
          `}
        </Script>
      </head>
      <body
        className={`${openSans.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
