import Image from "next/image";
import lavagemTapete from "../../../public/lavagemTapete.jpg";
import lavagemEstofado from "../../../public/lavagemEstofado.webp";
import lavagemCouro from "../../../public/lavagemCouro.webp";
import impermeabilizacaoEstofado from "../../../public/impermeabilizacaoEstofado.webp";
import lavagemColchoes from "../../../public/limpezaColchao.jpg";
import lavagemCarpete from "../../../public/lavagemCarpete.webp";

const SERVICES = [
  {
    title: "Lavagem de Tapetes",
    text: "Remoção profunda de impurezas que a lavagem caseira não alcança, devolvendo cor e textura ao tapete.",
    image: lavagemTapete,
    alt: "Lavagem de tapete",
  },
  {
    title: "Higienização de Estofados",
    text: "Elimina fungos, bactérias e ácaros acumulados em sofás e almofadas, reduzindo o risco de alergias respiratórias.",
    image: lavagemEstofado,
    alt: "Higienização de estofado",
  },
  {
    title: "Limpeza e Hidratação em Couro",
    text: "Produtos específicos que limpam e hidratam o couro sem ressecar, mantendo o acabamento original.",
    image: lavagemCouro,
    alt: "Limpeza e hidratação em couro",
  },
  {
    title: "Impermeabilização de Estofados",
    text: "Cria uma camada protetora nas fibras do tecido, mantendo líquidos na superfície e evitando manchas.",
    image: impermeabilizacaoEstofado,
    alt: "Impermeabilização de estofado",
  },
  {
    title: "Higienização de Colchões",
    text: "Tratamento especial que remove sujeiras profundas — recomendado a cada 6 meses para a saúde do sono.",
    image: lavagemColchoes,
    alt: "Higienização de colchão",
  },
  {
    title: "Higienização de Carpetes",
    text: "Remove ácaros e bactérias que afetam a qualidade do ar, prolongando a vida útil do carpete.",
    image: lavagemCarpete,
    alt: "Higienização de carpete",
  },
];

export default function Services() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">O que fazemos</span>
          <h2 className="h2 center">Serviços</h2>
          <p className="lead center">
            Confira abaixo os serviços que executamos — todos com equipamento e
            produto próprios para limpeza profunda.
          </p>
        </div>

        <div className="service-grid">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-thumb">
                <Image src={service.image} alt={service.alt} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" />
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a
                  className="service-link"
                  href={`https://wa.me/5562982008777?text=${encodeURIComponent(
                    `Olá! Quero um orçamento de ${service.title}`
                  )}`}
                  target="_blank"
                  rel="noopener"
                >
                  Pedir orçamento
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
