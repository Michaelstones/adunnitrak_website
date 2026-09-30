"use client";

import Link from "next/link";
import { ChevronDown, Flag, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/submitContact"; // Client-side handler path

export const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const [formValues, setFormValues] = useState({
    fullName: "",
    company: "",
    workEmail: "",
    phone: "",
    country: "",
    industry: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    formValues.fullName.trim() !== "" &&
    formValues.company.trim() !== "" &&
    formValues.workEmail.trim() !== "" &&
    formValues.phone.trim() !== "" &&
    formValues.country !== "" &&
    formValues.industry !== "" &&
    hasConsent;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(event.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setSubmitStatus({ type: "success", message: result.message });
      setFormValues({
        fullName: "",
        company: "",
        workEmail: "",
        phone: "",
        country: "",
        industry: "",
        notes: "",
      });
      setHasConsent(false);
    } else {
      setSubmitStatus({ type: "error", message: result.message });
    }

    setIsSubmitting(false);
  }

  return (
    <section className="w-full py-16 lg:py-24 bg-[#F5F7FB]">
      <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 flex flex-col gap-12 lg:gap-16">

        {/* Form Section (Full Width Top) */}
        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex flex-col w-full">

            {/* 2-Column Grid for Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">

              {/* Full name */}
              <div className="flex flex-col">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formValues.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formValues.company}
                  onChange={handleChange}
                  placeholder="Enter your organisation's name"
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all"
                />
              </div>

              {/* Work email */}
              <div className="flex flex-col">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Work email</label>
                <input
                  type="email"
                  name="workEmail"
                  required
                  value={formValues.workEmail}
                  onChange={handleChange}
                  placeholder="Enter your work email address"
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formValues.phone}
                  onChange={handleChange}
                  placeholder="Include your country code"
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col relative">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Country</label>
                <div className="relative">
                  <select
                    name="country"
                    required
                    value={formValues.country}
                    onChange={handleChange}
                    className="w-full h-[48px] px-4 appearance-none rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all"
                  >
                    <option value="" disabled className="text-[#9CA3AF]">Select country</option>
                    <option value="ca">Canada</option>
                    <option value="ng">Nigeria</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
              </div>

              {/* Industry */}
              <div className="flex flex-col relative">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Industry</label>
                <div className="relative">
                  <select
                    name="industry"
                    required
                    value={formValues.industry}
                    onChange={handleChange}
                    className="w-full h-[48px] px-4 appearance-none rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all"
                  >
                    <option value="" disabled className="text-[#9CA3AF]">Select industry</option>
                    <option value="aggregates">Aggregates & Quarries</option>
                    <option value="mining">Mining & Mineral Processing</option>
                    <option value="cement">Cement Manufacturing</option>
                    <option value="steel">Iron & Steel</option>
                    <option value="power">Power & Utilities</option>
                    <option value="heavy">Heavy Manufacturing</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Additional Notes (Full Width) */}
            <div className="flex flex-col mb-6">
              <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Additional Notes</label>
              <textarea
                name="notes"
                value={formValues.notes}
                onChange={handleChange}
                placeholder="What would you most like AdunniTrak to help your organisation improve?"
                className="w-full min-h-[120px] p-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] resize-y shadow-sm transition-all"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-4 mb-6">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                required
                checked={hasConsent}
                onChange={(e) => setHasConsent(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#0F58F5] focus:ring-[#0F58F5] shrink-0 cursor-pointer"
              />
              <label htmlFor="consent" className="text-[13px] leading-[20px] text-[#5B6472] cursor-pointer">
                I agree that AdunniTrak may use the information provided to respond to this request in accordance with its{" "}
                <Link href="/privacy" className="text-[#0F58F5] hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            {/* Form Status Message */}
            {submitStatus.message && (
              <div className={`p-4 mb-6 rounded-[8px] text-[14px] font-medium ${submitStatus.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                {submitStatus.message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className="inline-flex items-center justify-center w-fit h-[48px] px-8 bg-[#0F58F5] hover:bg-[#093593] disabled:bg-[#0F58F5]/50 disabled:cursor-not-allowed rounded-[8px] text-white font-semibold text-[14px] transition-colors shadow-sm"
            >
              {isSubmitting ? "Submitting..." : "Submit requirements"}
            </button>
          </form>
        </div>

        {/* Middle Section: 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-[16px] p-6 lg:p-8 border border-[#E2E6ED] shadow-sm flex flex-col h-full hover:border-[#0F58F5]/30 transition-colors">
            <div className="mb-6">
              <Flag className="w-5 h-5 text-[#0F58F5]" strokeWidth={1.5} />
            </div>
            <h4 className="text-[15px] leading-[22px] font-bold text-[#0B1220] mb-2">AdunniTrak Solutions Inc.</h4>
            <p className="text-[13px] leading-[20px] text-[#5B6472]">London, Ontario, Canada</p>
          </div>

          <div className="bg-white rounded-[16px] p-6 lg:p-8 border border-[#E2E6ED] shadow-sm flex flex-col h-full hover:border-[#0F58F5]/30 transition-colors">
            <div className="mb-6">
              <Flag className="w-5 h-5 text-[#0F58F5]" strokeWidth={1.5} />
            </div>
            <h4 className="text-[15px] leading-[22px] font-bold text-[#0B1220] mb-2">AdunniTrak Solutions Nigeria Ltd.</h4>
            <p className="text-[13px] leading-[20px] text-[#5B6472]">
              2, Babatope Ajakaiye Crescent, Jahi, FCT Abuja, Nigeria
            </p>
          </div>

          <div className="bg-white rounded-[16px] p-6 lg:p-8 border border-[#E2E6ED] shadow-sm flex flex-col h-full hover:border-[#0F58F5]/30 transition-colors">
            <div className="mb-6">
              <Phone className="w-5 h-5 text-[#0F58F5]" strokeWidth={1.5} />
            </div>
            <h4 className="text-[15px] leading-[22px] font-bold text-[#0B1220] mb-2">Phone</h4>
            <div className="text-[13px] leading-[22px] text-[#5B6472]">
              <span className='text-[#0F58F5] inline-block'>+1 226 385 7309</span> (Canada)<br />
              <span className='text-[#0F58F5] inline-block mt-1'>+234 803 458 7309</span> (Nigeria)
            </div>
          </div>

          <div className="bg-white rounded-[16px] p-6 lg:p-8 border border-[#E2E6ED] shadow-sm flex flex-col h-full hover:border-[#0F58F5]/30 transition-colors">
            <div className="mb-6">
              <Mail className="w-5 h-5 text-[#0F58F5]" strokeWidth={1.5} />
            </div>
            <h4 className="text-[15px] leading-[22px] font-bold text-[#0B1220] mb-2">Email</h4>
            <p className="text-[13px] leading-[20px] text-[#0F58F5] break-words">
              info@adunnitrak.com
            </p>
            <p className="text-[13px] leading-[20px] text-[#0F58F5] break-words mt-1">
              admin@adunnitrak.com
            </p>
          </div>

        </div>

        {/* Bottom CTA Block (Full Width) */}
        <div className="bg-[#031231] rounded-[16px] p-8 lg:p-12 flex flex-col items-center justify-center text-center mt-2">
          <h4 className="text-[16px] md:text-[18px] leading-[24px] font-bold text-white mb-6 tracking-wide">
            Prefer a live walkthrough?
          </h4>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center w-full max-w-[400px] h-[52px] bg-[#0F58F5] hover:bg-[#093593] rounded-[8px] text-white font-semibold text-[15px] transition-colors"
          >
            Book a Demo
          </Link>
        </div>

      </div>
    </section>
  );
};