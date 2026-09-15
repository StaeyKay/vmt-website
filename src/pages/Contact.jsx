import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocationMap from "../components/Map";

const contactDetails = [
  {
    label: "Headquarters",
    value: "Accra, Ghana",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: (
      <>
        <a
          href="tel:+233267536782"
          className="transition-colors hover:text-[#1AE0F0]"
        >
          +233 26 753 6782
        </a>
        <span className="text-gray-400"> | </span>
        <span>UK: </span>
        <a
          href="tel:+447570783065"
          className="transition-colors hover:text-[#1AE0F0]"
        >
          +44 7570783065
        </a>
      </>
    ),
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.25 1.01l-2.22 2.1z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: (
      <a
        href="mailto:amdevelopmentprojectsltd@gmail.com"
        className="break-all transition-colors hover:text-[#1AE0F0]"
      >
        amdevelopmentprojectsltd@gmail.com
      </a>
    ),
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: (
      <a
        href="https://wa.me/233267536782"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-medium text-[#1AE0F0] transition-colors hover:text-[#0e7490]"
      >
        Chat on WhatsApp
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H7M17 7V17"
          />
        </svg>
      </a>
    ),
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. Smaller initiatives may take 3–6 months, while large-scale infrastructure projects typically span 12–36 months. We provide a detailed timeline during the initial consultation and keep you updated at every milestone.",
  },
  {
    question: "Do you work with government entities?",
    answer:
      "Yes. We partner with government agencies, public institutions, and international development organizations across healthcare, education, housing, and renewable energy sectors. Our team is experienced in navigating regulatory requirements and public procurement processes.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through the contact form, email, or WhatsApp. Our team will schedule an introductory call to understand your project goals, assess feasibility, and outline the next steps — from initial scoping to proposal development.",
  },
];

function ChevronIcon({ open }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-gray-50 px-4 pb-12 pt-28 text-center sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-[#1A33E8] sm:text-4xl md:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:mt-5 sm:text-base">
            We are ready to partner with you on funding and managing impactful
            projects in healthcare, education, housing, and renewable energy.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Contact Information */}
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-[#1A33E8] sm:text-2xl">
              Contact Information
            </h2>
            <ul className="mt-8 space-y-6">
              {contactDetails.map(({ label, value, icon }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1AE0F0]/10 text-[#1AE0F0]">
                    {icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#1A33E8] sm:text-base">
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-[#1A33E8] sm:text-2xl">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill out the form below and our team will get back to you
              promptly.
            </p>

            <p className="mt-4 inline-flex items-center gap-2 text-xs text-gray-500">
              <svg
                className="h-4 w-4 text-[#1AE0F0]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" d="M12 6v6l4 2" />
              </svg>
              We typically respond within 24 hours.
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-lg bg-[#1AE0F0]/10 px-4 py-3 text-sm text-[#1A33E8]">
              <svg
                className="h-4 w-4 shrink-0 text-[#1AE0F0]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              Join 200+ institutions who trust AM DevPro
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-[#1A33E8]"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border-0 bg-gray-100 px-4 py-3 text-sm text-[#1A33E8] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1AE0F0]/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-[#1A33E8]"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border-0 bg-gray-100 px-4 py-3 text-sm text-[#1A33E8] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1AE0F0]/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-[#1A33E8]"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-lg border-0 bg-gray-100 px-4 py-3 text-sm text-[#1A33E8] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1AE0F0]/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-sm font-medium text-[#1A33E8]"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Organization Name"
                    className="w-full rounded-lg border-0 bg-gray-100 px-4 py-3 text-sm text-[#1A33E8] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1AE0F0]/40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-[#1A33E8]"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-lg border-0 bg-gray-100 px-4 py-3 text-sm text-[#1A33E8] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1AE0F0]/40"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1A33E8] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0F2942]"
              >
                Send Message
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#1A33E8] sm:text-3xl lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm text-gray-600 sm:text-base">
              Quick answers to common questions about working with AM DevPro
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map(({ question, answer }, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={question}
                  className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white ${
                        isOpen ? "bg-[#1A33E8]" : "bg-[#1AE0F0]/80"
                      }`}
                    >
                      Q
                    </span>
                    <span className="flex-1 text-sm font-semibold text-[#1A33E8] sm:text-base">
                      {question}
                    </span>
                    <span
                      className={isOpen ? "text-[#1A33E8]" : "text-[#1AE0F0]"}
                    >
                      <ChevronIcon open={isOpen} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="flex gap-4 px-5 pb-5 sm:px-6 sm:pb-6">
                      <div className="ml-13 border-l-2 border-[#1AE0F0] pl-4">
                        <p className="text-sm leading-relaxed text-gray-600">
                          {answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map / Location */}
      {/* <section className="relative overflow-hidden bg-[#1A33E8] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 40%)`,
          }}
        />

        <div className="relative mx-auto flex max-w-lg flex-col items-center text-center">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F2942] shadow-lg">
            <svg className="h-7 w-7 text-[#FDB022]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#FDB022]">
            Our Headquarters
          </p>
          <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">Accra, Ghana</p>
        </div>
      </section> */}

      <section className="bg-[#0F2942]">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2">
            {/* Map */}
            <div className="h-[400px] lg:h-[500px]">
              <LocationMap />
            </div>

            {/* Location information */}
            <div className="flex min-h-[400px] items-center bg-[#0F2942] px-6 py-16 sm:px-10 lg:min-h-[500px] lg:px-16">
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A33E8]">
                  <svg
                    className="h-7 w-7 text-[#1AE0F0]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>

                <p className="text-xs font-bold uppercase tracking-widest text-[#1AE0F0]">
                  Our Headquarters
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Accra, Ghana
                </h2>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                  Our headquarters serves as the hub for our international
                  development and project management operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
