import React from "react";
import { useForm } from "@statickit/react";

import Button from "../Button/Button";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return (
      <div className={styles.thanks}>
        <h1>
          <span>Hvala</span> što ste nas kontaktirali.
        </h1>
        <p>Vaš email je uspešno poslat i mi ćemo vam odgovoriti uskoro.</p>
        <Button blue growShadow href="/" center>
          Nazad na početnu
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.heading}>
        Vaši <span>podaci</span>
      </h3>
      <div className={styles.group}>
        <input
          required
          type="text"
          name="name"
          id="name"
          className={styles.input}
          placeholder="Ime i prezime"
        />
        <label htmlFor="name" className={styles.label}>
          Ime i prezime
        </label>
      </div>
      <div className={styles.group}>
        <input
          required
          type="email"
          name="email"
          id="email"
          className={styles.input}
          placeholder="Email"
        />
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
      </div>
      <div className={styles.group}>
        <input
          required
          type="text"
          name="phone"
          id="phone"
          className={styles.input}
          placeholder="Telefon"
        />
        <label htmlFor="phone" className={styles.label}>
          Telefon
        </label>
      </div>
      <div className={styles.submit}>
        <button
          type="submit"
          disabled={state.submitting}
          className={styles.button}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
