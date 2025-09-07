"use client";
import ButtonV1 from "@/components/ButtonV1";
import ContactForm, {
  ContactFields,
  ContactMap,
} from "@/components/ContactForm";
import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";

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

const ContactUs = () => {
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

  return (
    <div className="space-y-12">
      <div className="mt-2 md:mt-0 mb-4 md:mb-6 xl:mb-10 3xl:mb-16 4xl:mb-24">
        <p className="text-[#BDBDBD] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-light mb-1 sm:mb-2 lg:mb-3 xl:mb-4 3xl:mb-6 4xl:mb-8 leading-[16px]">
          Contact
        </p>
        <p className="text-[#333333] text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-bold leading-tight">
          Us
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
        {/* Left Side - Image with Gradient Blur */}
        <div className="relative overflow-hidden min-h-96 lg:min-h-[450px] xl:min-h-[580px] 2xl:min-h-[640px]">
          {/* Background Image with Grayscale */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
            style={{
              backgroundImage: `url('/contact_us/hero_1.webp')`,
            }}
          ></div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full p-5 lg:p-6 xl:p-12 flex items-start">
            <div className="space-y-5 lg:space-y-5 xl:space-y-6 3xl:space-y-8 text-white max-w-xs sm:max-w-sm lg:max-w-md">
              {/* Studio Title */}
              <div>
                <a
                  href="https://www.google.com/maps/dir//Shilp+Arcade+Bilasia+on+Sardar+Patel+Ring+Rd,+Hanspura+Ahmedabad,+Gujarat+382330/@23.0821154,72.6878764,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e81343b78736b:0xbd35689132a08eb4!2m2!1d72.6878764!2d23.0821154?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-base lg:text-lg xl:text-2xl font-medium mb-0 md:mb-2">
                    417, The 23<sup className="text-xs lg:text-sm">rd</sup>{" "}
                    Studio
                  </h2>
                  <p className="text-xs lg:text-sm xl:text-base leading-relaxed opacity-90">
                    Shilp Arcad , nr. Hanspura circle road , S.p Ring Road,
                    <br />
                    Ahmedabad , 382330
                  </p>
                </a>
              </div>

              {/* Contact Numbers */}
              <div className="space-y-2 md:space-x-3">
                <a
                  href="tel:+917203892651"
                  className="block text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl  3xl:text-3xl 4xl:text-4xl xl:text-xl font-medium hover:text-blue-200 transition-colors"
                >
                  +91 720 389 2651
                </a>
                <a
                  href="tel:+919054542360"
                  className="block text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl  3xl:text-3xl 4xl:text-4xl xl:text-xl font-medium hover:text-blue-200 transition-colors"
                >
                  +91 905 454 2360
                </a>
              </div>

              {/* Email */}
              <div>
                <a
                  href="mailto:info.23rdstudio@gmail.com"
                  className="text-sm lg:text-sm xl:text-base hover:text-blue-200 transition-colors"
                >
                  info.23rdstudio@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="relative min-h-96 lg:min-h-[450px] xl:min-h-[580px] 2xl:min-h-[640px] 3xl:min-h-[700px] 4xl:min-h-[800px] 5xl:min-h-[1200px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/contact_us/hero_2.webp')`,
            }}
          ></div>

          {/* Form Content */}
          <div className="relative z-10 h-full flex flex-col justify-center p-5 lg:p-6 xl:p-12">
            <div className="max-w-sm sm:max-w-md xl:max-w-lg  2xl:max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl 5xl:max-w-7xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-[86px] 4xl:text-[118px] 5xl:text-[144px] font-light text-[#BDBDBD] mb-4 sm:mb-6 md:mb-8 lg:mb-5 2xl:mb-[30px] 3xl:mb-10 4xl:mb-11 5xl:mb-13 leading-tight">
                Get in Touch
              </h1>

              <ContactFields
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                isSubmitting={isSubmitting}
                onSubmit={handleSubmit}
                backgroundColor="white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="">
        <ContactMap />
      </div>
    </div>
  );
};

export default ContactUs;
