const PERGUNTAS = [
  {
    pergunta: "Quanto tempo leva para realizar o serviço?",
    resposta: "Depende do tamanho do sofá mas, em média, 2 horas.",
  },
  {
    pergunta: "Quanto tempo leva para secar?",
    resposta: "Em média, de 2 a 5 horas. O tempo exato depende do clima no dia.",
  },
  {
    pergunta: "O produto tem cheiro forte e precisa sair durante a higienização?",
    resposta:
      "O produto não tem cheiro, é totalmente indolor, não precisa sair do local durante a higienização, é biodegradável e autorizado pela ANVISA.",
  },
  {
    pergunta: "Como funciona o processo?",
    resposta:
      "Aplicamos o produto no seu móvel, realizamos a esfregação, extração da sujeira e finalizamos com um neutralizador de odores.",
  },
];

export default function Perguntas() {
  return (
    <section className="section" id="perguntas" style={{ background: "var(--paper-alt)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Tire suas dúvidas</span>
          <h2 className="h2 center">Perguntas frequentes</h2>
        </div>
        <div className="faq-list">
          {PERGUNTAS.map((item) => (
            <details className="faq-item" key={item.pergunta}>
              <summary>
                {item.pergunta}
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <div className="faq-answer">{item.resposta}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
