import type { CSSProperties } from "react";
import fonts from '@/styles/fonts';
import ContactForm from "@/app/contact/contact-form";
import sendEmail from "@/utils/send-email";

export default function Contact() {
    const styleH1: CSSProperties = {
        ...fonts.zapfCalligraphic.style,
        fontSize: '72px',
    }

    return (
        <>
            <h1 style={styleH1}>Contact</h1>
            <ContactForm sendEmail={sendEmail} />
        </>
    )
}