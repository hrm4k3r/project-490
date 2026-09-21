"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo-principal.webp";

const NAV_ITEMS = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#residencial", label: "Residencial" },
  { href: "/#comercial", label: "Comercial" },
  { href: "/#perguntas", label: "Perguntas frequentes" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contato", label: "Contato" },
];

export default function Header() {
  const checkRef = useRef(null);
  const closeMenu = () => {
    if (checkRef.current) checkRef.current.checked = false;
  };

  return (
    <header>
      <div className="container headerbar">
        <Link href="/" className="brand" onClick={closeMenu}>
          <Image src={logo} alt="Lavanderia Mundial" priority />
        </Link>

        <input type="checkbox" id="nav-check" ref={checkRef} />
        <label htmlFor="nav-check" className="nav-scrim" onClick={closeMenu} aria-hidden="true"></label>

        <nav className="primary-nav">
          <label htmlFor="nav-check" className="menu-close" onClick={closeMenu} aria-label="Fechar menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </label>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} className="navlink" href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="phonepill" href="tel:+5562982008777">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z" />
            </svg>
            <span>(62) 98200-8777</span>
          </a>
          <a className="btn btn-primary" href="/#contato-form" onClick={closeMenu}>
            Solicitar orçamento
          </a>
          <label htmlFor="nav-check" className="menu-toggle" aria-label="Abrir menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
}
