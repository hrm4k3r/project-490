import Image from "next/image";
import Link from "next/link";
import blog1 from "../../../public/blog1.webp";
import blog2 from "../../../public/blog2.webp";
import blog3 from "../../../public/blog3.webp";
import blog4 from "../../../public/blog4.jpg";

export const ArtigosdoBlog = [
  {
    id: 4,
    image: blog4,
    title: "O poder dos sofás coloridos na decoração das salas",
    texto: "Como transformar o ambiente com personalidade e estilo.",
    href: "/Blog/Artigo4",
  },
  {
    id: 3,
    image: blog3,
    title: "Eliminação de ácaros em estofados",
    texto:
      "A higienização ajuda na eliminação de ácaros e outros micro-organismos como fungos e bactérias.",
    href: "/Blog/Artigo3",
  },
  {
    id: 2,
    image: blog2,
    title: "Vantagens da Impermeabilização de Estofados",
    texto: "Confira nesse texto as vantagens de impermeabilizar seu estofado.",
    href: "/Blog/Artigo2",
  },
  {
    id: 1,
    image: blog1,
    title: "A importância de cuidar dos estofados",
    texto:
      "Saiba por que é tão importante realizar uma higienização dos estofados com frequência.",
    href: "/Blog/Artigo1",
  },
];

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Aprenda mais</span>
          <h2 className="h2 center">Blog</h2>
          <p className="lead center">Confira as dicas da Lavanderia Mundial.</p>
        </div>

        <div className="blog-grid">
          {ArtigosdoBlog.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-thumb">
                <Image src={post.image} alt={post.title} />
              </div>
              <div className="blog-body">
                <h3>{post.title}</h3>
                <p>{post.texto}</p>
                <Link className="blog-link" href={post.href}>
                  Ver mais
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
