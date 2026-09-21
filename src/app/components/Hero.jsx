import Image from "next/image";
import fotoSofaTopo from "../../../public/sofa.webp";

const TRUST_ITEMS = [
  "Produto biodegradável, aprovado pela ANVISA",
  "Atendimento residencial e comercial",
  "Orçamento sem compromisso",
  "Atendemos Goiânia e região",
];

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Goiânia · Residencial &amp; Comercial</span>
          <h1>Limpeza profissional de estofados, tapetes e carpetes em Goiânia</h1>
          <p className="lead">
            Higienização que remove ácaros, manchas e odores com produto
            biodegradável, aprovado pela ANVISA. Atendemos residências e
            empresas, sem sair de casa.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contato-form">
              Solicitar orçamento
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              className="btn btn-outline"
              href="https://wa.me/5562982008777?text=Visitei%20seu%20site%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              target="_blank"
              rel="noopener"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.1 9 9.6 7.8 9.4 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" />
                <path d="M12 2C6.5 2 2 6.4 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5.1-1.3C8.6 21.5 10.3 22 12 22c5.5 0 10-4.4 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 14.9 3.6 13.5 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.2-8.4 8.2z" />
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div className="blob" aria-hidden="true"></div>
          <div className="bubble" style={{ width: 34, top: "6%", left: "8%", animationDelay: ".2s" }}></div>
          <div className="bubble" style={{ width: 20, top: "78%", left: "4%", animationDelay: "1.4s" }}></div>
          <div className="bubble" style={{ width: 26, top: "14%", right: "4%", animationDelay: ".8s" }}></div>
          <Image
            src={fotoSofaTopo}
            alt="Família em sofá limpo e higienizado pela Lavanderia Mundial"
            priority
          />
        </div>
      </div>

      <div className="container trust-strip">
        <div className="trust-list">
          {TRUST_ITEMS.map((item) => (
            <div className="trust-chip" key={item}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                <path d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
