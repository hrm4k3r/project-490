import Image from "next/image";
import comercial from "../../../public/comercial.jpg";
import comercial1 from "../../../public/comercial1.jpg";

const STEPS = [
  { num: 1, title: "Aspiração", text: "Etapa inicial: remove a sujeira superficial, como pó e cabelos." },
  { num: 2, title: "Higienização", text: "A etapa mais importante: remove a sujeira profunda, como ácaros e bactérias." },
  { num: 3, title: "Secagem", text: "Etapa final: remove a umidade do tecido, deixando pronto para uso." },
];

export default function Commercial() {
  return (
    <section id="comercial">
      <div className="wave wave-top" aria-hidden="true">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,32 C200,60 400,0 600,20 C800,40 1000,4 1200,28 L1200,60 L0,60 Z" fill="var(--band-from)" />
        </svg>
      </div>

      <div className="band section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow on-brand">Para sua empresa</span>
            <h2 className="h2 center">Limpeza Comercial</h2>
            <p className="lead center">
              Cuidamos dos estofados, tapetes e carpetes da sua empresa.
              Sujeira, poeira, ácaros e bactérias acumulados prejudicam a
              saúde de funcionários e clientes — a limpeza profissional
              remove esses agentes e mantém o ambiente saudável.
            </p>
          </div>

          <div className="process">
            {STEPS.map((step) => (
              <div className="process-step" key={step.num}>
                <div className="process-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <div className="split reverse" style={{ alignItems: "stretch" }}>
            <div className="comm-gallery">
              <Image src={comercial} alt="Limpeza comercial de estofados" />
              <Image src={comercial1} alt="Limpeza comercial de carpetes" />
            </div>
            <div>
              <div className="benefit-row" style={{ flexDirection: "column" }}>
                <div className="benefit-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s-7-4.5-9.5-9C.8 8.4 2.6 5 6 5c2 0 3.4 1.1 4 2.2C10.6 6.1 12 5 14 5c3.4 0 5.2 3.4 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
                  </svg>
                  <div>
                    <h4>Melhora a saúde</h4>
                    <p>Remove agentes que podem causar asma, rinite e sinusite.</p>
                  </div>
                </div>
                <div className="benefit-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3 7h7l-5.6 4.3 2.1 7.2L12 16.5 5.5 20.5l2.1-7.2L2 9h7z" />
                  </svg>
                  <div>
                    <h4>Aumenta a durabilidade</h4>
                    <p>Mantém estofados e carpetes com aspecto de novo por mais tempo.</p>
                  </div>
                </div>
                <div className="benefit-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8.5 12.5l2.5 2.5 4.5-5" />
                  </svg>
                  <div>
                    <h4>Melhora a aparência</h4>
                    <p>Ambientes mais bonitos e agradáveis para clientes e equipe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 12 }}>
            <a className="btn btn-onbrand" href="#contato-form">
              Solicite seu orçamento
            </a>
          </div>
        </div>
      </div>

      <div className="wave wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,32 C200,60 400,0 600,20 C800,40 1000,4 1200,28 L1200,60 L0,60 Z" fill="var(--band-to)" />
        </svg>
      </div>
    </section>
  );
}
