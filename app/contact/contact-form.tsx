"use client";

import { FormEvent, useState, type CSSProperties } from "react";
import fonts from "@/styles/fonts";
import sendEmail from "@/utils/send-email";

const styleForm: CSSProperties = {
  width: "100%",
  maxWidth: "500px",
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
};
const styleLabel: CSSProperties = {
  ...fonts.optimaNova.style,
  fontSize: "20px",
  display: "block",
  marginBottom: "4px",
  width: "100%",
};
const styleInput: CSSProperties = {
  ...fonts.optimaNova.style,
  fontSize: "20px",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid black",
  width: "100%",
};
const styleButton: CSSProperties = {
  ...fonts.optimaNova.style,
  fontSize: "24px",
  backgroundColor: "black",
  color: "white",
  width: "100px",
  alignSelf: "center",
  border: "1px solid black",
  borderRadius: "4px",
  padding: "8px",
};

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    sendEmail({ name, email, message })
  }

  return (
    <form style={styleForm} onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" style={styleLabel}>
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          style={styleInput}
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" style={styleLabel}>
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          style={styleInput}
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message" style={styleLabel}>
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          style={styleInput}
          value={message}
          onChange={(evt) => setMessage(evt.target.value)}
        />
      </div>
      <button type="submit" style={styleButton}>
        Submit
      </button>
    </form>
  );
}
