import ContactForm, { ContactMap } from "@/components/ContactForm";
import React from "react";

const ContactUs = () => {
  return (
    <div className="space-y-12">
      <ContactForm layout="image-form" />

      <ContactMap />
    </div>
  );
};

export default ContactUs;
