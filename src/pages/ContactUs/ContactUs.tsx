import React, { useState } from "react";
import "./ContactUs.scss";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact Us Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nComments: ${comments}`
    );
    const mailtoLink = `mailto:sai@comini.in?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="form_container">
      <form
        className="form_container__form"
        encType="text/plain"
        onSubmit={handleSubmit}
      >
        <div className="form_container__form__group">
          <label htmlFor="name" className="form_container__form__label">
            Name*:
          </label>
          <input
            type="text"
            id="name"
            className="form_container__form__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form_container__form__group">
          <label htmlFor="email" className="form_container__form__label">
            Email*:
          </label>
          <input
            type="email"
            id="email"
            className="form_container__form__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form_container__form__group">
          <label htmlFor="comments" className="form_container__form__label">
            Comments*:
          </label>
          <textarea
            id="comments"
            className="form_container__form__textarea"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
          />
        </div>

        <input
          type="submit"
          className="form_container__form__submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default ContactUs;
