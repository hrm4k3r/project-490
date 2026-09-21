"use client";
import { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const response = await fetch("/api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const { success, error } = await response.json();

    if (success) {
      alert("Sua mensagem foi enviada com sucesso!");
    } else if (error) {
      console.error(error);
      alert("Houve um erro no envio de sua mensagem: " + error);
    }

    setSubmitting(false);
  };

  return (
    <main>
      <div className="page-hero container">
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Sem compromisso
        </span>
        <h1 className="h2" style={{ marginTop: 12 }}>
          Solicite seu orçamento
        </h1>
        <p className="lead center" style={{ marginTop: 12 }}>
          Preencha seus dados e nossa equipe entra em contato para combinar o
          melhor horário para o seu atendimento.
        </p>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit} className="form-card">
          <div className="field-grid">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Nome*"
              className="field"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Sobrenome*"
              className="field"
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail*"
              className="field"
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              inputMode="numeric"
              placeholder="WhatsApp (apenas números)*"
              className="field"
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: 24, width: "100%" }} disabled={submitting}>
            {submitting ? "Enviando..." : "Solicitar orçamento"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Formulario;
