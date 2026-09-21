import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header";
import Footer from "./components/footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import WhatsApp from "./components/WhatsApp";

export const metadata = {
  title: "Lavanderia Mundial | Limpeza de Estofados e Tapetes em Goiânia",
  description:
    "Higienização profissional de estofados, tapetes, carpetes e colchões em Goiânia. Produto biodegradável aprovado pela ANVISA. Orçamento sem compromisso.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Manrope:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
        precedence="default"
      />
      <meta name="p:domain_verify" content="2c0d52876cc1ebd6ac09b2b35053d4ba" />
      <meta
        name="google-site-verification"
        content="V3D1sMO1XM7vQMh1gI8dkZRCW11kRMNy1DhAJ7Be_hc"
      />
      <body>
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
        <WhatsApp />
        <BackToTop />
        <Footer />
        <GoogleTagManager gtmId="GTM-P7JLH4K8" />
      </body>
    </html>
  );
}
