import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message envoyé:\n\nÀ: support@cafe40.ca\nEmail: ${formData.email}\nSujet: ${formData.subject}\nDescription: ${formData.description}`);
    setFormData({ email: '', subject: '', description: '' });
  };

  return (
    <div className="contact-page">
      {/* banner */}
      <div className="contact-banner">
        <h1 className="banner-title">FAQ Centre d'aide</h1>
        <p className="banner-subtitle">
          Consultez notre vaste base de connaissances ou utilisez notre widget d'aide pour trouver des réponses à vos questions.
        </p>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2 className="form-heading">Envoyez-nous un e-mail</h2>
        <p className="form-subheading">
          Remplissez notre formulaire de demande et notre équipe d'assistance répondra rapidement à votre demande le jour même !
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* to: */}
          <input
            type="text"
            value="À: support@cafe40.ca"
            readOnly
            className="read-only-input"
          />

          {/* email */}
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* subject*/}
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          {/* desc */}
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          {/* submit */}
          <button type="submit" className="submit-button">Envoyer</button>
        </form>
      </div>

      {/* call agent */}
      <div className="call-agent-section">
        <h3>Appelez un agent</h3>
        <p>Appelez-nous au (XXX) XXX-XXXX du lundi au vendredi, de 8h à 16h (ET).</p>
      </div>
    </div>
  );
}

export default Contact;
