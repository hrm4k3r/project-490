import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound container">
      <span className="eyebrow">Erro 404</span>
      <h1 className="h2">Página não encontrada</h1>
      <p className="lead center">
        A página que você tentou acessar não existe ou foi movida. Verifique o
        endereço ou volte para a página inicial.
      </p>
      <Link className="btn btn-primary" href="/">
        Voltar para o início
      </Link>
    </main>
  );
}
