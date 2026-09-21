export default function Contato() {
  return (
    <section className="section" id="contato">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 36 }}>
          <span className="eyebrow">Fale com a gente</span>
          <h2 className="h2 center">Onde Estamos</h2>
        </div>

        <div className="contact-grid" id="contato-form">
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.793896370712!2d-49.220685!3d-16.687194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef12a8266be0f%3A0x8e32126a4523c014!2sLavanderia%20Mundial!5e0!3m2!1spt-BR!2sbr!4v1692900600663!5m2!1spt-BR!2sbr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Lavanderia Mundial"
            />
          </div>

          <div className="contact-card">
            <div className="contact-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7-6.4-7-11a7 7 0 0 1 14 0c0 4.6-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <div>
                <h4>Endereço</h4>
                <p>Rua 18, Quadra 51, Lote 18 — Jardim Santo Antônio, Goiânia - GO, 74853-310</p>
              </div>
            </div>
            <div className="contact-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <div>
                <h4>E-mail</h4>
                <a href="mailto:lavanderiamundial.mkt@gmail.com">lavanderiamundial.mkt@gmail.com</a>
              </div>
            </div>
            <div className="contact-row">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z" />
              </svg>
              <div>
                <h4>Telefone / WhatsApp</h4>
                <a href="tel:+5562982008777">(62) 98200-8777</a>
              </div>
            </div>
            <div className="social-row">
              <a
                className="social-btn"
                href="https://instagram.com/lavanderia_mundial"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" />
                </svg>
              </a>
              <a
                className="social-btn"
                href="https://facebook.com/mundial.lavanderia"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-7.5H16l.5-3h-3V8.4c0-.9.2-1.5 1.5-1.5H16.5V4.2C16.2 4.1 15.2 4 14 4c-2.4 0-4 1.5-4 4.1V10.5H7.5v3H10V21h3.5z" />
                </svg>
              </a>
              <a
                className="social-btn"
                href="https://wa.me/5562982008777?text=Visitei%20seu%20site%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.4 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5.1-1.3C8.6 21.5 10.3 22 12 22c5.5 0 10-4.4 10-10S17.5 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
