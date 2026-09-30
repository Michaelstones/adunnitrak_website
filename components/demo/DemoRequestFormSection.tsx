"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { submitDemoRequest } from "@/app/actions/submitDemoRequest";

export const DemoRequestFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const [formValues, setFormValues] = useState({
    fullName: "",
    company: "",
    workEmail: "",
    phone: "",
    jobTitle: "",
    country: "",
    facilityType: "",
    industry: "",
    areasOfInterest: "",
    currentSystems: "",
    mainChallenge: "",
    contactMethod: "",
    timeframe: "",
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
    formValues.jobTitle.trim() !== "" &&
    formValues.country !== "" &&
    formValues.industry !== "" &&
    hasConsent;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(event.currentTarget);
    const result = await submitDemoRequest(formData);

    if (result.success) {
      setSubmitStatus({ type: "success", message: result.message });
      setFormValues({
        fullName: "", company: "", workEmail: "", phone: "", jobTitle: "", country: "",
        facilityType: "", industry: "", areasOfInterest: "", currentSystems: "",
        mainChallenge: "", contactMethod: "", timeframe: "", notes: "",
      });
      setHasConsent(false);
    } else {
      setSubmitStatus({ type: "error", message: result.message });
    }

    setIsSubmitting(false);
  }

  const nextSteps = [
    "We review your organisation, industry, interests and priorities.",
    "We contact you to confirm the session and clarify requirements.",
    "We prepare relevant workflows, product views and examples.",
    "We conduct the demo and discuss configuration needs."
  ];

  return (
    <section id="request-form" className="w-full py-16 lg:py-24 bg-[#DDDEE1]">
      <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left Content Column */}
        <div className="lg:col-span-4 flex flex-col">
          <span className="text-[#0F58F5] text-[11px] font-bold tracking-[0.08em] uppercase mb-4 block">
            Request a personalised session
          </span>
          <h2 className="text-[32px] md:text-[36px] leading-[40px] md:leading-[44px] font-extrabold text-[#0B1220] tracking-[-0.01em] mb-6">
            Tell us about your operation
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[24px] text-[#5B6472] mb-12">
            Provide a few details about your organisation and the areas you would like to explore. This information will help us prepare a more relevant demonstration.
          </p>

          <div className="flex flex-col gap-6">
            {/* Steps Card */}
            <div className="bg-[#EEF1F6] p-6 rounded-[12px]">
              <h3 className="text-[15px] leading-[22px] font-bold text-[#0B1220] mb-5">
                What happens after you submit
              </h3>
              <div className="flex flex-col gap-4">
                {nextSteps.map((step, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0F58F5] shrink-0 mt-2" />
                    <p className="text-[14px] leading-[22px] text-[#5B6472]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Reassurance Card */}
            <div className="bg-[#EEF1F6] p-6 rounded-[12px]">
              <h3 className="text-[15px] leading-[22px] font-bold text-[#0B1220] mb-3">
                Privacy reassurance
              </h3>
              <p className="text-[13px] leading-[22px] text-[#5B6472]">
                The information you provide is used to respond to your enquiry and prepare the demonstration. Do not submit confidential production data, passwords, proprietary drawings or sensitive operational records through this form.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Form */}
        <div className="lg:col-span-8 flex flex-col">
          <form onSubmit={handleSubmit} className="flex flex-col w-full">

            {/* Top Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-6">

              <div className="flex flex-col">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input type="text" name="fullName" value={formValues.fullName} onChange={handleChange} required placeholder="Enter your full name" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all" />
              </div>

              <div className="flex flex-col">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">
                  Company or organisation <span className="text-red-500">*</span>
                </label>
                <input type="text" name="company" value={formValues.company} onChange={handleChange} required placeholder="Enter your organisation's name" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all" />
              </div>

              <div className="flex flex-col">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">
                  Work email <span className="text-red-500">*</span>
                </label>
                <input type="email" name="workEmail" value={formValues.workEmail} onChange={handleChange} required placeholder="Enter your work email address" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all" />
              </div>

              <div className="flex flex-col">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input type="tel" name="phone" value={formValues.phone} onChange={handleChange} required placeholder="Include your country code" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all" />
              </div>

              <div className="flex flex-col">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">
                  Job title <span className="text-red-500">*</span>
                </label>
                <input type="text" name="jobTitle" value={formValues.jobTitle} onChange={handleChange} required placeholder="Enter your role or position" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all" />
              </div>

              <div className="flex flex-col relative">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select name="country" required value={formValues.country} onChange={handleChange} className="w-full h-11 px-4 appearance-none rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all">
                    <option value="" disabled className="text-[#9CA3AF]">Select country</option>
                    <option value="ca">Canada</option>
                    <option value="ng">Nigeria</option>
                    <option value="uk">United Kingdom</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Facility or plant type</label>
                <input type="text" name="facilityType" value={formValues.facilityType} onChange={handleChange} placeholder="Briefly describe your facility" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all" />
              </div>

              <div className="flex flex-col relative">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">
                  Industry <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select name="industry" required value={formValues.industry} onChange={handleChange} className="w-full h-11 px-4 appearance-none rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all">
                    <option value="" disabled className="text-[#9CA3AF]">Select industry</option>
                    <option value="aggregates">Aggregates & Quarries</option>
                    <option value="mining">Mining & Mineral Processing</option>
                    <option value="cement">Cement Manufacturing</option>
                    <option value="steel">Iron & Steel</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Areas of interest */}
            <div className="flex flex-col mb-6">
              <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Areas of interest</label>
              <textarea name="areasOfInterest" value={formValues.areasOfInterest} onChange={handleChange} className="w-full min-h-[90px] p-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] resize-y shadow-sm transition-all" />
            </div>

            {/* Middle Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-6">
              <div className="flex flex-col">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Current operational systems</label>
                <input type="text" name="currentSystems" value={formValues.currentSystems} onChange={handleChange} placeholder="Systems, spreadsheets or tools in use" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all" />
              </div>

              <div className="flex flex-col">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Main operational challenge</label>
                <input type="text" name="mainChallenge" value={formValues.mainChallenge} onChange={handleChange} placeholder="What should AdunniTrak help improve?" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all" />
              </div>

              <div className="flex flex-col relative">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Preferred contact method</label>
                <div className="relative">
                  <select name="contactMethod" value={formValues.contactMethod} onChange={handleChange} className="w-full h-11 px-4 appearance-none rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all">
                    <option value="" disabled className="text-[#9CA3AF]">Select...</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col relative">
                <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Preferred date or period</label>
                <div className="relative">
                  <select name="timeframe" value={formValues.timeframe} onChange={handleChange} className="w-full h-11 px-4 appearance-none rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] shadow-sm transition-all">
                    <option value="" disabled className="text-[#9CA3AF]">Select...</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-2-weeks">In 1-2 weeks</option>
                    <option value="month">In a month</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Additional Message */}
            <div className="flex flex-col mb-8">
              <label className="text-[13px] leading-[20px] font-bold text-[#0B1220] mb-2">Additional message</label>
              <textarea name="notes" value={formValues.notes} onChange={handleChange} placeholder="Any other useful preparation information" className="w-full min-h-[90px] p-4 rounded-[8px] border border-[#E2E6ED] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] resize-y shadow-sm transition-all" />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-4 mb-6">
              <input type="checkbox" name="consent" id="demo_consent" required checked={hasConsent} onChange={(e) => setHasConsent(e.target.checked)} className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#0F58F5] focus:ring-[#0F58F5] shrink-0 cursor-pointer" />
              <label htmlFor="demo_consent" className="text-[13px] leading-[20px] text-[#5B6472] cursor-pointer">
                I agree that AdunniTrak may use the information provided to respond to this request and arrange the demonstration in accordance with its <Link href="/privacy" className="text-[#0F58F5] hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            {submitStatus.message && (
              <div className={`p-4 mb-6 rounded-[8px] text-[14px] font-medium ${submitStatus.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                {submitStatus.message}
              </div>
            )}

            {/* Submit & Disclaimer */}
            <div className="flex flex-col sm:flex-row items-center gap-6 border-t border-[#E2E6ED] pt-6">
              <button type="submit" disabled={isSubmitting || !isFormValid} className="inline-flex items-center justify-center w-full sm:w-auto h-[48px] px-8 bg-[#0F58F5] hover:bg-[#093593] disabled:bg-[#0F58F5]/50 disabled:cursor-not-allowed rounded-[8px] text-white font-semibold text-[14px] transition-colors whitespace-nowrap shadow-sm">
                {isSubmitting ? "Submitting..." : "Request personalized demo"}
              </button>
              <p className="text-[12px] leading-[18px] text-[#5B6472]">
                Submitting this form does not create a purchase obligation.
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};