"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { MoveRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

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

const ContactFields: React.FC<ContactFieldsProps> = ({
  formData,
  errors,
  handleChange,
  isSubmitting,
  onSubmit,
}) => {
  return (
    <div className="h-full flex flex-col">
      <form onSubmit={onSubmit} className="space-y-6 flex-1 flex flex-col">
        {/* Name Field */}
        <div className="mb-6">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`bg-gray-100 w-full h-12 px-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all ${
              errors.name ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.name && (
            <div className="text-red-500 text-xs mt-1 pl-4">{errors.name}</div>
          )}
        </div>

        {/* Phone Field */}
        <div className="mb-6">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            className={`bg-gray-100 w-full h-12 px-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all ${
              errors.phone ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.phone && (
            <div className="text-red-500 text-xs mt-1 pl-4">{errors.phone}</div>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail *"
            value={formData.email}
            onChange={handleChange}
            className={`bg-gray-100 w-full h-12 px-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all ${
              errors.email ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.email && (
            <div className="text-red-500 text-xs mt-1 pl-4">{errors.email}</div>
          )}
        </div>

        {/* Interest Field */}
        <div className="mb-6">
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="bg-gray-100 w-full h-12 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
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
        <div className="mb-6 flex-1">
          <textarea
            id="message"
            name="message"
            placeholder="Message *"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`bg-gray-100 w-full h-full min-h-[120px] p-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all resize-none ${
              errors.message ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.message && (
            <div className="text-red-500 text-xs mt-1 pl-4">
              {errors.message}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-auto">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary-bg w-full lg:w-56 lg:h-12 relative cursor-pointer group flex items-center justify-between px-6 text-white text-xs uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Send Email</span>
                <MoveRight strokeWidth={0.85} className="pl-2" />
              </>
            )}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </button>
        </div>
      </form>
    </div>
  );
};

const ContactImage: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src="/image-140.png"
        alt="Contact us"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute right-1/4 top-1/3">
        <div className="relative">
          <div className="w-12 h-14 bg-gray-300 bg-opacity-50 rounded-full absolute -left-3 -bottom-3"></div>
          <Image
            src="/vuesax-linear-drop0.svg"
            alt="Water drop"
            width={50}
            height={56}
          />
        </div>
      </div>
    </div>
  );
};

const ContactMap: React.FC = () => {
  return (
    <div
      className="relative h-110 w-full overflow-hidden"
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

  // Determine layout based on prop
  const getLayoutClass = (): string => {
    switch (layout) {
      case "form-map":
        return "flex-col lg:flex-row";
      case "image-form":
        return "flex-col lg:flex-row-reverse";
      case "map-form":
        return "flex-col lg:flex-row-reverse";
      default: // "form-image"
        return "flex-col lg:flex-row";
    }
  };

  // Render the appropriate right side component
  const renderRightSide = () => {
    switch (layout) {
      case "form-map":
        return <ContactMap />;
      case "image-form":
        return (
          <ContactFields
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

  return (
    <div className={`flex ${getLayoutClass()} gap-8 h-full`}>
      {/* Left Side */}
      <div className="w-full lg:w-1/2 h-full flex flex-col">
        <div className="flex-1 h-full">{renderLeftSide()}</div>

        {/* Status Message */}
        {(layout === "form-image" || layout === "form-map") && (
          <>
            {submitStatus === "success" && (
              <div className="text-green-600 mt-4 px-4">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-600 mt-4 px-4">
                Sorry, there was an error sending your message. Please try
                again.
              </div>
            )}
          </>
        )}
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 h-full flex flex-col">
        <div className="flex-1 h-full">{renderRightSide()}</div>

        {/* Status Message for reversed layouts */}
        {(layout === "image-form" || layout === "map-form") && (
          <>
            {submitStatus === "success" && (
              <div className="text-green-600 mt-4 px-4">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-600 mt-4 px-4">
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
