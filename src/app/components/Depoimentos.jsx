import Image from "next/image";
import Depoimentos1 from "../../../public/Depoimentos1.png";
import Depoimentos2 from "../../../public/Depoimentos2.png";
import Depoimentos3 from "../../../public/Depoimentos3.png";
import Depoimentos4 from "../../../public/Depoimentos4.png";
import Depoimentos5 from "../../../public/Depoimentos5.png";
import Depoimentos6 from "../../../public/Depoimentos6.png";

const DEPOIMENTOS = [
  Depoimentos1,
  Depoimentos2,
  Depoimentos3,
  Depoimentos4,
  Depoimentos5,
  Depoimentos6,
];

export default function Depoimentos() {
  return (
    <section id="depoimentos">
      <div className="wave wave-top" aria-hidden="true">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,28 C300,4 500,56 800,24 C1000,2 1100,40 1200,20 L1200,60 L0,60 Z" fill="var(--band-from)" />
        </svg>
      </div>

      <div className="band section" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow on-brand">Prova social</span>
            <h2 className="h2 center">Depoimentos</h2>
            <p className="lead center">Relatos reais de quem já utilizou nossos serviços.</p>
          </div>

          <div className="testi-scroller">
            {DEPOIMENTOS.map((src, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-tag">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.4 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5.1-1.3C8.6 21.5 10.3 22 12 22c5.5 0 10-4.4 10-10S17.5 2 12 2z" />
                  </svg>
                  Depoimento verificado
                </div>
                <Image src={src} alt="Depoimento de cliente" />
              </div>
            ))}
          </div>
          <div className="scroll-hint">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l-6-6 6-6M21 12H4" />
            </svg>
            Arraste para os lados para ver todos os depoimentos
          </div>
        </div>
      </div>

      <div className="wave wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,28 C300,4 500,56 800,24 C1000,2 1100,40 1200,20 L1200,60 L0,60 Z" fill="var(--band-to)" />
        </svg>
      </div>
    </section>
  );
}
