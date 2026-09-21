import Hero from "./components/Hero";
import Services from "./components/Services";
import Residential from "./components/Residential";
import Commercial from "./components/Commercial";
import Perguntas from "./components/faq";
import Depoimentos from "./components/Depoimentos";
import Blog from "./components/Blog";
import Contato from "./components/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Residential />
      <Commercial />
      <Perguntas />
      <Depoimentos />
      <Blog />
      <Contato />
    </>
  );
}
