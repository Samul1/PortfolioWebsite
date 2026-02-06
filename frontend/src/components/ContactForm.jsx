import React, { useState } from "react";
import { api } from "../services/api";

// ============================================================
// ===== CONTACT FORM =====
// - Nyt: yrittää POST /api/contact
// - Jos backend ei vielä toteuta -> näyttää järkevän virheen
// ============================================================

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorText, setErrorText] = useState("");

  const canSend = name.trim() && email.trim() && message.trim();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canSend || status === "sending") return;

    setStatus("sending");
    setErrorText("");

    try {
      // ===== TRY BACKEND =====
      await api.post("/contact", {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setStatus("idle"), 1500);
    } catch (err) {
      // ===== FRIENDLY ERROR =====
      // Esim: jos endpointia ei ole, tulee 404
      const code = err?.response?.status;
      if (code === 404) {
        setErrorText("Backend endpoint /api/contact puuttuu vielä. Tehdään se myöhemmin.");
      } else {
        setErrorText("Virhe lähetyksessä. Tarkista että backend on käynnissä.");
      }

      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="field">
        <span className="field__label">Name</span>
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          autoComplete="name"
        />
      </label>

      <label className="field">
        <span className="field__label">Email</span>
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </label>

      <label className="field">
        <span className="field__label">Message</span>
        <textarea
          className="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What do you want to build?"
          rows={5}
        />
      </label>

      <div className="form__row">
        <button className="btn btn--primary" type="submit" disabled={!canSend || status === "sending"}>
          {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send"}
        </button>

        {status === "sent" ? <span className="muted">Thanks! I’ll get back to you.</span> : null}
        {status === "error" ? <span className="muted">{errorText || "Error. Try again."}</span> : null}
      </div>
    </form>
  );
}
