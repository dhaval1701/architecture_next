"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { MoveRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import ButtonV1 from "./ButtonV1";

// Types (unchanged)
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

type LayoutType = "form-image" | "form-map" | "image-form" | "map-form";
type SubmitStatus = "success" | "error" | null;

interface ContactFormProps {
  layout?: LayoutType;
}

const ContactFormOverlay: React.FC<ContactFieldsProps> = ({
  formData,
  errors,
  handleChange,
  isSubmitting,
  onSubmit,
}) => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/logos/logo_background.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(1)",
        }}
      ></div>
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 3xl:p-16 4xl:p-20">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl">
          {/* Title */}
          <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-light mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 3xl:mb-20 4xl:mb-24 text-start">
            Get in Touch
          </h2>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-7 3xl:space-y-8 4xl:space-y-10"
          >
            {/* Name Field */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`bg-white border border-gray-200 w-full h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 3xl:h-16 4xl:h-20 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7 3xl:px-8 4xl:px-10 text-gray-800 placeholder-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl focus:outline-none focus:border-gray-400 transition-all ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mt-1 pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6 2xl:pl-7 3xl:pl-8 4xl:pl-10">
                  {errors.name}
                </div>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                className={`bg-white border border-gray-200 w-full h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 3xl:h-16 4xl:h-20 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7 3xl:px-8 4xl:px-10 text-gray-800 placeholder-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl focus:outline-none focus:border-gray-400 transition-all ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mt-1 pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6 2xl:pl-7 3xl:pl-8 4xl:pl-10">
                  {errors.phone}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                className={`bg-white border border-gray-200 w-full h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 3xl:h-16 4xl:h-20 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7 3xl:px-8 4xl:px-10 text-gray-800 placeholder-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl focus:outline-none focus:border-gray-400 transition-all ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mt-1 pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6 2xl:pl-7 3xl:pl-8 4xl:pl-10">
                  {errors.email}
                </div>
              )}
            </div>

            {/* Interest Field */}
            <div>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="bg-white border border-gray-200 w-full h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 3xl:h-16 4xl:h-20 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7 3xl:px-8 4xl:px-10 text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl focus:outline-none focus:border-gray-400 transition-all"
              >
                <option value="" className="text-gray-500">
                  Interested In
                </option>
                <option value="residential">Residential Design</option>
                <option value="commercial">Commercial Design</option>
                <option value="renovation">Renovation</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`bg-white border border-gray-200 w-full p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7 3xl:p-8 4xl:p-10 text-gray-800 placeholder-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl focus:outline-none focus:border-gray-400 transition-all resize-none ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mt-1 pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6 2xl:pl-7 3xl:pl-8 4xl:pl-10">
                  {errors.message}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6 2xl:pt-7 3xl:pt-8 4xl:pt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-800 hover:bg-gray-700 w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/3 2xl:w-1/3 3xl:w-1/3 4xl:w-1/3 h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 3xl:h-16 4xl:h-20 text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-medium tracking-wider uppercase transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Contact Us"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactFields: React.FC<ContactFieldsProps> = ({
  formData,
  errors,
  handleChange,
  isSubmitting,
  onSubmit,
}) => {
  return (
    <div className="h-full flex flex-col">
      <form
        onSubmit={onSubmit}
        className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 2xl:space-y-10 3xl:space-y-12 4xl:space-y-16 flex-1 flex flex-col"
      >
        {/* Name Field */}
        <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`bg-gray-100 w-full h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 3xl:h-16 4xl:h-20 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7 3xl:px-8 4xl:px-10 text-gray-800 placeholder-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all ${
              errors.name ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.name && (
            <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mt-1 pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6">
              {errors.name}
            </div>
          )}
        </div>

        {/* Phone Field */}
        <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            className={`bg-gray-100 w-full h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 3xl:h-16 4xl:h-20 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7 3xl:px-8 4xl:px-10 text-gray-800 placeholder-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all ${
              errors.phone ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.phone && (
            <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mt-1 pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6">
              {errors.phone}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail *"
            value={formData.email}
            onChange={handleChange}
            className={`bg-gray-100 w-full h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 3xl:h-16 4xl:h-20 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7 3xl:px-8 4xl:px-10 text-gray-800 placeholder-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all ${
              errors.email ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.email && (
            <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mt-1 pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6">
              {errors.email}
            </div>
          )}
        </div>

        {/* Interest Field */}
        <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="bg-gray-100 w-full h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 3xl:h-16 4xl:h-20 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7 3xl:px-8 4xl:px-10 text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
          >
            <option value="" className="text-gray-500">
              Interested In
            </option>
            <option value="residential">Residential Design</option>
            <option value="commercial">Commercial Design</option>
            <option value="renovation">Renovation</option>
            <option value="consultation">Consultation</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16 flex-1">
          <textarea
            id="message"
            name="message"
            placeholder="Message *"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`bg-gray-100 w-full h-full min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] xl:min-h-[160px] 2xl:min-h-[200px] 3xl:min-h-[240px] 4xl:min-h-[300px] p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7 3xl:p-8 4xl:p-10 text-gray-800 placeholder-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all resize-none ${
              errors.message ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.message && (
            <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mt-1 pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6">
              {errors.message}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-auto">
          {/* <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary-bg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 3xl:w-1/4 4xl:w-1/5 h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 3xl:h-16 4xl:h-20 relative cursor-pointer group flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 3xl:px-10 4xl:px-12 text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Send Email</span>
                <MoveRight
                  strokeWidth={0.85}
                  className="pl-1 sm:pl-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12"
                />
              </>
            )}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </button> */}
          <ButtonV1
            // disabled={isSubmitting}
            text={isSubmitting ? "Sending..." : "Send Email"}
            variant="dark"
          />
        </div>
      </form>
    </div>
  );
};

const ContactImage: React.FC = () => {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/assets/contact_us_3.svg"
        alt="Contact us"
        fill
        className="object-cover"
        style={{ filter: "grayscale(1)" }}
      />
    </div>
  );
};

export const ContactMap: React.FC = () => {
  return (
    <div
      className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px] 4xl:h-[1000px] w-full overflow-hidden"
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

const ContactForm: React.FC<ContactFormProps> = ({ layout = "form-image" }) => {
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

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

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

  // Render the appropriate right side component
  const renderRightSide = () => {
    switch (layout) {
      case "form-map":
        return <ContactMap />;
      case "image-form":
        return (
          <ContactFormOverlay
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
          />
        );
      case "map-form":
        return (
          <ContactFields
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
          />
        );
      default: // "form-image"
        return <ContactImage />;
    }
  };

  // Render the appropriate left side component
  const renderLeftSide = () => {
    switch (layout) {
      case "form-map":
      case "form-image":
        return (
          <ContactFields
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
          />
        );
      case "image-form":
        return <ContactImage />;
      case "map-form":
        return <ContactMap />;
      default:
        return (
          <ContactFields
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
          />
        );
    }
  };

  const getLayoutClasses = () => {
    switch (layout) {
      case "form-map":
        return {
          container: "flex-col lg:flex-row",
          leftWidth: "w-full lg:w-1/3",
          rightWidth: "w-full lg:w-2/3",
        };
      case "image-form":
        return {
          container: "flex-col lg:flex-row",
          leftWidth: "w-full lg:w-2/4",
          rightWidth: "w-full lg:w-2/4",
        };
      case "map-form":
        return {
          container: "flex-col lg:flex-row",
          leftWidth: "w-full lg:w-2/3",
          rightWidth: "w-full lg:w-1/3",
        };
      default: // "form-image"
        return {
          container: "flex-col lg:flex-row",
          leftWidth: "w-full lg:w-1/3",
          rightWidth: "w-full lg:w-2/3",
        };
    }
  };

  const layoutClasses = getLayoutClasses();

  return (
    <div
      className={`flex ${layoutClasses.container} gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24 h-full`}
    >
      {/* Left Side */}
      <div className={`${layoutClasses.leftWidth} h-full flex flex-col`}>
        <div className="flex-1 h-full">{renderLeftSide()}</div>

        {/* Status Message for form layouts */}
        {(layout === "form-image" || layout === "form-map") && (
          <>
            {submitStatus === "success" && (
              <div className="text-green-600 mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6 2xl:mt-8 3xl:mt-10 4xl:mt-12 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-600 mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6 2xl:mt-8 3xl:mt-10 4xl:mt-12 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
                Sorry, there was an error sending your message. Please try
                again.
              </div>
            )}
          </>
        )}
      </div>

      {/* Right Side */}
      <div
        className={`${layoutClasses.rightWidth} mt-6 sm:mt-8 lg:mt-0 h-full flex flex-col`}
      >
        <div className="flex-1 h-full">{renderRightSide()}</div>

        {/* Status Message for reversed layouts */}
        {(layout === "image-form" || layout === "map-form") && (
          <>
            {submitStatus === "success" && (
              <div className="text-green-600 mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6 2xl:mt-8 3xl:mt-10 4xl:mt-12 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-600 mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6 2xl:mt-8 3xl:mt-10 4xl:mt-12 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
                Sorry, there was an error sending your message. Please try
                again.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
