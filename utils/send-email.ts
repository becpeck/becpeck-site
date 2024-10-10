"use server";

import { type ContactFormData } from "@/app/contact/contact-form";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export default async function sendEmail(data: ContactFormData) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDING_EMAIL,
      pass: process.env.SENDING_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.SENDING_EMAIL,
    to: process.env.RECEIVING_EMAIL || process.env.SENDING_EMAIL,
    cc: data.email,
    subject: `Contact form submission by ${data.name}`,
    text: data.message,
    ...(data.fileBase64
      ? {
          attachments: [
            {
              path: data.fileBase64,
              filename: data.fileName,
            },
          ],
        }
      : {}),
  };

  try {
    await transport.sendMail(mailOptions);
    return { error: false, message: "Email sent" };
  } catch (err) {
    return {
      error: true,
      message: err instanceof Error ? err.message : JSON.stringify(err),
    };
  }
}
