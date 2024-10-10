"use client";

import { useState, type CSSProperties } from "react";
import fonts from "@/styles/fonts";

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
const styleFile: CSSProperties = {
  ...fonts.optimaNova.style,
  fontSize: "20px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};
const styleFileInput: CSSProperties = {
  display: "none",
};
const styleFileButton: CSSProperties = {
  ...fonts.optimaNova.style,
  fontSize: "20px",
  backgroundColor: "black",
  color: "white",
  border: "1px solid black",
  borderRadius: "4px",
  padding: "6px",
  cursor: "pointer",
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

export default function ContactForm({
  sendEmail,
}: {
  sendEmail: (data: ContactFormData) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  return (
    <form style={styleForm} action={() => sendEmail({ name, email, message })}>
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
      <div>
        <label htmlFor="file" style={styleLabel}>
          File
        </label>
        <input
          id="file"
          type="file"
          style={styleFileInput}
          onChange={handleFileChange}
        />
        <label htmlFor="file" style={styleFile}>
          <div style={styleFileButton}>Choose File</div>
          <span>{fileName || "No file chosen"}</span>
        </label>
      </div>
      <button type="submit" style={styleButton}>
        Submit
      </button>
    </form>
  );
}
