"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import ButtonV1 from "./ButtonV1";

// Types
interface FormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  interest?: string;
}

interface ContactFieldsProps {
  formData: FormData;
  errors: FormErrors;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  isSubmitting: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

interface EmailJSConfig {
  SERVICE_ID: string;
  TEMPLATE_ID: string;
  PUBLIC_KEY: string;
}

type SubmitStatus = "success" | "error" | null;

interface ContactFieldsProps {
  formData: {
    name: string;
    phone: string;
    email: string;
    interest: string;
    message: string;
  };
  errors: {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
    interest?: string;
  };
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  isSubmitting: boolean;
  // onSubmit: (e:FormEvent<HTMLFormElement>) => void;
  backgroundColor?: "light" | "white" | "custom";
  customBackgroundColor?: string;
}

export const ContactFields: React.FC<ContactFieldsProps> = ({
  formData,
  errors,
  handleChange,
  isSubmitting,
  onSubmit,
  backgroundColor = "light",
  customBackgroundColor,
}) => {
  // Function to get background color based on prop
  const getBackgroundColor = () => {
    switch (backgroundColor) {
      case "white":
        return "#FFFFFF";
      case "custom":
        return customBackgroundColor || "#F3F3F3";
      case "light":
      default:
        return "#F3F3F3";
    }
  };

  const bgColor = getBackgroundColor();

  return (
    <div className="h-full flex flex-col">
      <form
        onSubmit={onSubmit}
        className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-9 xl:space-y-10 2xl:space-y-8 3xl:space-y-14 4xl:space-y-18 flex-1 flex flex-col"
      >
        {/* Name Field */}
        <div className="mb-2 lg:mb-3 3xl:mb-6 4xl:mb-8">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full h-11 sm:h-11 md:h-12 lg:h-13 xl:h-14 2xl:h-12 3xl:h-18 4xl:h-22 
              px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-4 3xl:px-8 4xl:px-10 
              text-gray-800 placeholder-gray-400 
              text-[14px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-lg 3xl:text-3xl 4xl:text-4xl 
              focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all
              ${errors.name ? "ring-2 ring-red-500" : ""}`}
            style={{ backgroundColor: bgColor }}
          />
          {errors.name && (
            <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-lg 3xl:text-3xl 4xl:text-4xl mt-2 pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6 2xl:pl-4">
              {errors.name}
            </div>
          )}
        </div>

        {/* Phone Field */}
        <div className="mb-2 lg:mb-3 3xl:mb-6 4xl:mb-8">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => {
              // Allow only digits and limit to 10 characters
              const value = e.target.value.replace(/\D/g, "").slice(0, 10);
              handleChange({
                target: { name: "phone", value },
              } as React.ChangeEvent<HTMLInputElement>);
            }}
            className={`w-full h-11 sm:h-11 md:h-12 lg:h-13 xl:h-14 2xl:h-12 3xl:h-18 4xl:h-22 
              px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-4 3xl:px-8 4xl:px-10 
              text-gray-800 placeholder-gray-400 
              text-[14px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-lg 3xl:text-3xl 4xl:text-4xl 
              focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all
              ${errors.phone ? "ring-2 ring-red-500" : ""}`}
            style={{ backgroundColor: bgColor }}
          />
          {errors.phone && (
            <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-lg 3xl:text-3xl 4xl:text-4xl mt-2 pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6 2xl:pl-4">
              {errors.phone}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-2 lg:mb-3 3xl:mb-6 4xl:mb-8">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className={`w-full h-11 sm:h-11 md:h-12 lg:h-13 xl:h-14 2xl:h-12 3xl:h-18 4xl:h-22 
              px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-4 3xl:px-8 4xl:px-10 
              text-gray-800 placeholder-gray-400 
              text-[14px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-lg 3xl:text-3xl 4xl:text-4xl 
              focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all
              ${errors.email ? "ring-2 ring-red-500" : ""}`}
            style={{ backgroundColor: bgColor }}
          />
          {errors.email && (
            <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-lg 3xl:text-3xl 4xl:text-4xl mt-2 pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6 2xl:pl-4">
              {errors.email}
            </div>
          )}
        </div>

        {/* Interest Field */}
        <div className="mb-2 lg:mb-3 3xl:mb-6 4xl:mb-8">
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className={`w-full h-11 sm:h-11 md:h-12 lg:h-13 xl:h-14 2xl:h-12 3xl:h-18 4xl:h-22 
    px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-4 3xl:px-8 4xl:px-10
    focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all appearance-none
    ${
      formData.interest === ""
        ? "text-gray-400 tracking-wider"
        : "text-gray-800"
    } text-[14px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-lg 3xl:text-3xl 4xl:text-4xl `}
            style={{ backgroundColor: bgColor }}
          >
            <option value="" disabled hidden>
              Interested In
            </option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="renovation">Renovation</option>
            <option value="consultation">Consultation</option>
            <option value="other">Other</option>
          </select>

          {errors.interest && (
            <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-lg 3xl:text-3xl 4xl:text-4xl mt-2 pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6 2xl:pl-4">
              {errors.interest}
            </div>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-2 lg:mb-3 3xl:mb-6 4xl:mb-8">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full min-h-[80px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px] xl:min-h-[180px] 2xl:min-h-[160px] 3xl:min-h-[260px] 4xl:min-h-[320px] 
              p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-5 3xl:p-9 4xl:p-11 
              text-gray-800 placeholder-gray-400
              text-[14px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-lg 3xl:text-3xl 4xl:text-4xl 
              focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all resize-none
              ${errors.message ? "ring-2 ring-red-500" : ""}`}
            style={{ backgroundColor: bgColor }}
          />
          {errors.message && (
            <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-lg 3xl:text-3xl 4xl:text-4xl mt-0 pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6 2xl:pl-4">
              {errors.message}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-[12px] mb-4 md:my-0 md:mb-0 lg:mt-10">
          <ButtonV1
            type="submit"
            theme="dark"
            text="Submit"
            disabled={isSubmitting}
            // className="bg-gray-800 hover:bg-gray-700 px-6 py-3 text-white font-medium tracking-wider uppercase transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </ButtonV1>
        </div>
      </form>
    </div>
  );
};

export const ContactMap: React.FC = () => {
  return (
    <div
      className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[450px] xl:h-[472px] 2xl:h-[430px] 3xl:h-[650px] 4xl:h-[800px] w-full overflow-hidden"
      style={{ filter: "grayscale(1)" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117538.11571188767!2d72.56001363950232!3d22.984596111599508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81343b78736b%3A0xbd35689132a08eb4!2sShilp%20Arcade!5e0!3m2!1sen!2sin!4v1756050653517!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Contact Location Map"
      ></iframe>
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  // EmailJS configuration
  const EMAILJS_CONFIG: EmailJSConfig = {
    SERVICE_ID: "YOUR_SERVICE_ID",
    TEMPLATE_ID: "YOUR_TEMPLATE_ID",
    PUBLIC_KEY: "YOUR_PUBLIC_KEY",
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.interest.trim()) {
      newErrors.interest = "Interest is required";
    }

    // if (!formData.message.trim()) {
    //   newErrors.message = "Message is required";
    // } else if (formData.message.trim().length < 10) {
    //   newErrors.message = "Message must be at least 10 characters long";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          interest: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-stretch flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24 h-full">
      {/* Form Side */}
      <div className="w-full lg:w-1/3 flex flex-col">
        <div className="flex-1">
          <ContactFields
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
          />
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="text-green-600 mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6 2xl:mt-8 3xl:mt-10 4xl:mt-12 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="text-red-600 mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6 2xl:mt-8 3xl:mt-10 4xl:mt-12 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}
      </div>

      {/* Map Side */}
      <div className="w-full lg:w-2/3 flex flex-col">
        <div className="flex-1">
          <ContactMap />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
