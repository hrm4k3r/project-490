import Image from "next/image";
import residencial1 from "../../../public/residencial1.jpg";
import residencial2 from "../../../public/residencial2.jpg";
import residencial5 from "../../../public/residencial5.jpg";

export default function Residential() {
  return (
    <section className="section" id="residencial" style={{ background: "var(--paper-alt)" }}>
      <div className="container split">
        <div className="split-copy">
          <span className="eyebrow">Para sua casa</span>
          <h2 className="h2">Limpeza Residencial</h2>
          <p className="lead">
            Sofás, poltronas e cadeiras são indispensáveis em qualquer lar —
            além do conforto, deixam os ambientes mais elegantes. Para cumprir
            bem essa função, a limpeza precisa ser feita regularmente.
          </p>
          <a className="btn btn-primary" href="#contato-form">
            Solicite seu orçamento
          </a>
        </div>
        <div className="photo-cluster">
          <a href="#contato-form">
            <Image src={residencial1} alt="Serviço residencial Lavanderia Mundial" />
          </a>
          <a href="#contato-form">
            <Image src={residencial2} alt="Estofado residencial higienizado" />
          </a>
          <a href="#contato-form">
            <Image src={residencial5} alt="Sofá residencial limpo" />
          </a>
        </div>
      </div>
    </section>
  );
}
