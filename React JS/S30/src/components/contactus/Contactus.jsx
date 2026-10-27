
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  ShoppingCart,
} from "lucide-react";

const contactDetails = [
  {
    title: "Email Support",
    value: "support@shopcart.com",
    description: "Send us an email anytime.",
    icon: Mail,
    href: "mailto:support@shopcart.com",
  },
  {
    title: "Call Us",
    value: "+1 (234) 567-890",
    description: "Talk to our support team.",
    icon: Phone,
    href: "tel:+1234567890",
  },
  {
    title: "Visit Us",
    value: "123 Commerce Street",
    description: "New York, NY, USA",
    icon: MapPin,
    href: null,
  },
  {
    title: "Support Hours",
    value: "Mon - Sat, 9 AM - 6 PM",
    description: "Sunday: Closed",
    icon: Clock,
    href: null,
  },
];

const faqs = [
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking link through email. You can use it to check the delivery status of your order.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Return eligibility depends on the product and order terms. Please contact our support team with your order number for assistance.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times depend on your location and selected shipping method. Estimated delivery details will be provided during checkout.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Please contact our support team as soon as possible. Cancellation depends on whether your order has already been processed or shipped.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us using the contact form, email address, or phone number listed on this page.",
  },
];

function ContactCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#eaf3ee] text-[#00452e]">
        <Icon size={25} />
      </div>

      <h3 className="text-lg font-bold text-gray-900">
        {item.title}
      </h3>

      {item.href ? (
        <a
          href={item.href}
          className="mt-3 block break-all text-sm font-semibold text-[#00452e] hover:underline"
        >
          {item.value}
        </a>
      ) : (
        <p className="mt-3 text-sm font-semibold text-[#00452e]">
          {item.value}
        </p>
      )}

      <p className="mt-2 text-sm text-gray-500">
        {item.description}
      </p>
    </div>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-5 text-left"
      >
        <span className="text-sm font-semibold text-gray-900 md:text-base">
          {item.question}
        </span>

        <ChevronDown
          size={19}
          className={`shrink-0 text-[#00452e] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
          {item.answer}
        </p>
      )}
    </div>
  );
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo submission.
    // Connect your backend API here to save/send messages.
    console.log("Contact form data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      {/* HERO SECTION */}
      <section className="bg-[#00452e] px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest">
            <MessageCircle size={15} />
            Get in Touch
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            We'd Love to Hear
            <br />
            From You.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            Have a question about your order, need product
            assistance, or simply want to say hello?
            Our support team is ready to help.
          </p>

          <a
            href="#contact-form"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#00452e] transition hover:bg-[#eaf3ee]"
          >
            Send a Message
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00734e]">
            Contact Information
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Let's Get Connected
          </h2>

          <p className="mt-4 text-sm text-gray-500">
            Choose the most convenient way to reach us.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item) => (
            <ContactCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section
        id="contact-form"
        className="scroll-mt-24 bg-[#f6f8f7] px-5 py-20 md:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5 lg:items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#00734e]">
              Send a Message
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Have Questions?
              <br />
              We're Here to Help.
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-500">
              Whether you're looking for product
              recommendations, need assistance with an
              existing order, or have general questions,
              we're happy to hear from you.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Reliable Support",
                  text: "Helpful assistance for your shopping needs.",
                },
                {
                  icon: Truck,
                  title: "Order Assistance",
                  text: "Questions about shipping and delivery.",
                },
                {
                  icon: RotateCcw,
                  title: "Returns & Exchanges",
                  text: "Guidance for eligible returns.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e2eee7] text-[#00452e]">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-9 lg:col-span-3">
            <h3 className="text-2xl font-extrabold">
              Send Us a Message
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Fill out the form below and our team
              will get back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >
              <div className="grid gap-5 sm:grid-cols-2">

                {/* FULL NAME */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full Name *
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#00452e] focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address *
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#00452e] focus:ring-2 focus:ring-green-100"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    maxLength={25}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#00452e] focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Subject *
                  </label>

                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#00452e] focus:ring-2 focus:ring-green-100"
                  >
                    <option value="">
                      Select a subject
                    </option>
                    <option value="Order Inquiry">
                      Order Inquiry
                    </option>
                    <option value="Product Information">
                      Product Information
                    </option>
                    <option value="Shipping & Delivery">
                      Shipping & Delivery
                    </option>
                    <option value="Returns & Refunds">
                      Returns & Refunds
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#00452e] focus:ring-2 focus:ring-green-100"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#00452e] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#006b48]"
              >
                Send Message
                <Send size={17} />
              </button>

              {submitted && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-xl bg-green-50 p-4 text-sm text-green-800"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0"
                  />
                  Demo form submitted. Connect a backend
                  to deliver your message.
                </div>
              )}

              <p className="text-center text-xs text-gray-400">
                Please avoid including passwords or
                payment card details in your message.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto max-w-4xl px-5 py-20 md:py-24">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00734e]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            How Can We Help?
          </h2>

          <p className="mt-4 text-sm text-gray-500">
            Find answers to some of our most common questions.
          </p>
        </div>

        <div>
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openFAQ === index}
              onToggle={() =>
                setOpenFAQ(
                  openFAQ === index ? null : index
                )
              }
            />
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#f9ede3] px-5 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold text-[#00452e] md:text-4xl">
            Ready to Start Shopping?
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Explore our collection of quality products
            and discover something you'll love.
          </p>

          <a
            href="/"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#00452e] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#006b48]"
          >
            <ShoppingCart size={17} />
            Continue Shopping
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-[#fafafa]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-gray-500 md:flex-row md:px-8">
          <span className="text-lg font-bold text-[#00452e]">
            Shopcart
          </span>

          <p>© 2026 Shopcart. All rights reserved.</p>

          <p>Privacy Policy · Terms & Conditions</p>
        </div>
      </footer>
    </div>
  );
}
