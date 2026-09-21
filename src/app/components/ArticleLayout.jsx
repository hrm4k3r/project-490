import Image from "next/image";
import Link from "next/link";

export default function ArticleLayout({ image, title, subtitle, sections, closing }) {
  return (
    <main className="article">
      <div className="container article-head">
        <Link className="back-link" href="/#blog">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          Voltar para o blog
        </Link>
        <span className="eyebrow">Blog</span>
        <h1 className="h2" style={{ marginTop: 12 }}>
          {title}
        </h1>
        {subtitle && (
          <p className="lead" style={{ marginTop: 12 }}>
            {subtitle}
          </p>
        )}
        <p className="article-author" style={{ marginTop: 12 }}>
          Da Redação
        </p>
      </div>

      <div className="container">
        <div className="article-media">
          <Image src={image} alt={title} />
        </div>

        <div className="article-body">
          {sections.map((section, i) => (
            <div key={i}>
              {section.heading && <h2>{section.heading}</h2>}
              <p>{section.body}</p>
            </div>
          ))}
          {closing && <p>{closing}</p>}

          <div className="article-cta">
            <a
              className="btn btn-primary"
              href="https://wa.me/5562982008777?text=Visitei%20seu%20site%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              target="_blank"
              rel="noopener"
            >
              Solicite seu orçamento
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
