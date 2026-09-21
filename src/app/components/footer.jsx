import Image from "next/image";
import rixxer from "../../../public/rixxer.webp";
import logo from "../../../public/logo-principal.webp";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <Image src={logo} alt="Lavanderia Mundial" />
          <div className="footer-links">
            <a href="/#servicos">Serviços</a>
            <a href="/#depoimentos">Depoimentos</a>
            <a href="/#blog">Blog</a>
            <a href="/#contato">Contato</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            {ano} Lavanderia Mundial — CNPJ: 35.483.069/0001-06 — Todos os
            direitos reservados
          </p>
          <a
            className="dev-credit"
            href="https://rixxer.com.br"
            target="_blank"
            rel="noopener"
          >
            Developed by <Image src={rixxer} alt="Rixxer" />
          </a>
        </div>
      </div>
    </footer>
  );
}
