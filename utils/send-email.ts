import { type ContactFormData } from "@/app/contact/contact-form";

export default async function sendEmail(data: ContactFormData) {
    console.log(data);
}