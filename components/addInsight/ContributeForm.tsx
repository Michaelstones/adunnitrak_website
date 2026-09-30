"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, UploadCloud } from "lucide-react";
import { toast } from "sonner";
import { submitInsightToSanity } from "@/app/actions/submitInsight";
import { SlideUp } from "@/components/animations/SlideUp";

export default function ContributeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Custom states for UI elements
  const [contentType, setContentType] = useState("Article");
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fully controlled state for all text/select inputs
  const [formValues, setFormValues] = useState({
    fullName: "",
    workEmail: "",
    jobTitle: "",
    organisation: "",
    country: "",
    linkedIn: "",
    title: "",
    industry: "",
    summary: "",
    tags: "",
    fullText: "",
    keyTakeaway: "",
    sources: "",
    imageDescription: "",
    imageCredit: "",
    pubPeriod: "",
    contactMethod: "email",
    note: "",
  });

  // Controlled state for mandatory checkboxes
  const [consents, setConsents] = useState({
    original: false,
    nonConfidential: false,
    privacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setConsents((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  // Strict validation guard: Button remains disabled unless ALL these are true
  const isFormValid =
    formValues.fullName.trim() !== "" &&
    formValues.workEmail.trim() !== "" &&
    formValues.jobTitle.trim() !== "" &&
    formValues.organisation.trim() !== "" &&
    formValues.country !== "" &&
    formValues.title.trim() !== "" &&
    formValues.industry !== "" &&
    formValues.summary.trim() !== "" &&
    formValues.fullText.trim() !== "" &&
    formValues.keyTakeaway.trim() !== "" &&
    formValues.contactMethod !== "" &&
    consents.original &&
    consents.nonConfidential &&
    consents.privacy;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Final safety check before executing
    if (!isFormValid) {
      toast.error("Please fill all required fields and accept the policies.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Uploading your insight to the editors...");

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("contentType", contentType);

      const result = await submitInsightToSanity(formData);

      if (result.success) {
        toast.success("Insight submitted successfully! We will be in touch.", { id: toastId });

        // Reset everything on success
        (e.target as HTMLFormElement).reset();
        setFileName(null);
        setContentType("Article");
        setFormValues({
          fullName: "", workEmail: "", jobTitle: "", organisation: "", country: "", linkedIn: "",
          title: "", industry: "", summary: "", tags: "", fullText: "", keyTakeaway: "", sources: "",
          imageDescription: "", imageCredit: "", pubPeriod: "", contactMethod: "email", note: "",
        });
        setConsents({ original: false, nonConfidential: false, privacy: false });
      } else {
        toast.error(result.message || "Something went wrong.", { id: toastId });
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const FormSection = ({ num, title, desc, children }: { num: string, title: string, desc: string, children: React.ReactNode }) => (
    <div className="bg-white border border-[#E2E6ED] rounded-[16px] p-6 lg:p-8 shadow-sm flex flex-col gap-6">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-[8px] bg-[#EEF1F6] text-[#0F58F5] font-bold text-[14px] flex items-center justify-center shrink-0">
          {num}
        </div>
        <div>
          <h2 className="text-[#0B1220] font-inter font-bold text-[18px] mb-1">{title}</h2>
          <p className="text-[#5B6472] font-inter text-[14px] leading-[22px]">{desc}</p>
        </div>
      </div>
      <div className="lg:pl-12">
        {children}
      </div>
    </div>
  );

  return (
    <div className="lg:col-span-8">
      <SlideUp delay={0.1}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">

          {/* Section 1: About You */}
          <FormSection num="1" title="About you" desc="We credit contributors by name. Your email is only used for editorial follow-up.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Full name <span className="text-red-500">*</span></label>
                <input type="text" name="fullName" value={formValues.fullName} onChange={handleChange} required className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Work email <span className="text-red-500">*</span></label>
                <input type="email" name="workEmail" value={formValues.workEmail} onChange={handleChange} required className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Job title <span className="text-red-500">*</span></label>
                <input type="text" name="jobTitle" value={formValues.jobTitle} onChange={handleChange} required className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Organisation <span className="text-red-500">*</span></label>
                <input type="text" name="organisation" value={formValues.organisation} onChange={handleChange} required className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none transition-all" />
              </div>
              <div className="flex flex-col relative">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Country <span className="text-red-500">*</span></label>
                <select name="country" required value={formValues.country} onChange={handleChange} className="w-full h-11 px-4 appearance-none rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none transition-all">
                  <option value="" disabled>Select country</option>
                  <option value="ng">Nigeria</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                </select>
                <ChevronDown className="absolute right-4 top-9 w-4 h-4 text-[#5B6472] pointer-events-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2 flex justify-between">LinkedIn or website <span className="text-[#5B6472] font-normal">Optional</span></label>
                <input type="text" name="linkedIn" value={formValues.linkedIn} onChange={handleChange} placeholder="https://" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none transition-all" />
              </div>
            </div>
          </FormSection>

          {/* Section 2: Insight Details */}
          <FormSection num="2" title="Insight details" desc="This information appears on the insights page and in search results.">
            <div className="flex flex-col gap-6">
              <div>
                <label className="text-[13px] font-bold text-[#0B1220] mb-3 block">Content type <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div onClick={() => setContentType("Article")} className={`p-4 rounded-[8px] border cursor-pointer transition-all ${contentType === "Article" ? "border-[#0F58F5] bg-[#EEF1F6]" : "border-[#E2E6ED] hover:border-[#0F58F5]/50"}`}>
                    <h4 className="font-bold text-[#0B1220] text-[14px] mb-1">Article</h4>
                    <p className="text-[12px] text-[#5B6472]">Practical perspective on systems and workflows.</p>
                  </div>
                  <div onClick={() => setContentType("Field Lesson")} className={`p-4 rounded-[8px] border cursor-pointer transition-all ${contentType === "Field Lesson" ? "border-[#0F58F5] bg-[#EEF1F6]" : "border-[#E2E6ED] hover:border-[#0F58F5]/50"}`}>
                    <h4 className="font-bold text-[#0B1220] text-[14px] mb-1">Field lesson</h4>
                    <p className="text-[12px] text-[#5B6472]">Short note from real industrial work.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-[13px] font-bold text-[#0B1220] mb-2 flex justify-between">Title <span className="text-red-500">*</span></label>
                  <input type="text" name="title" value={formValues.title} onChange={handleChange} required placeholder="Write a clear, specific headline" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none mb-1 transition-all" />
                  <span className="text-[11px] text-[#5B6472]">Aim for 60 to 100 characters.</span>
                </div>
                <div className="flex flex-col relative">
                  <label className="text-[13px] font-bold text-[#0B1220] mb-2">Industry <span className="text-red-500">*</span></label>
                  <select name="industry" required value={formValues.industry} onChange={handleChange} className="w-full h-11 px-4 appearance-none rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none transition-all">
                    <option value="" disabled>Select industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="energy">Energy & Power</option>
                    <option value="mining">Mining</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-9 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Summary <span className="text-red-500">*</span></label>
                <textarea name="summary" value={formValues.summary} onChange={handleChange} required rows={3} placeholder="Two sentences that tell readers what they will learn." className="w-full p-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none resize-y mb-1 transition-all" />
                <span className="text-[11px] text-[#5B6472]">Shown on article cards.</span>
              </div>

              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2 flex justify-between">Tags <span className="text-[#5B6472] font-normal">Optional</span></label>
                <input type="text" name="tags" value={formValues.tags} onChange={handleChange} placeholder="e.g. shift handover, CMMS (comma separated)" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none transition-all" />
              </div>
            </div>
          </FormSection>

          {/* Section 3: Your insight */}
          <FormSection num="3" title="Your insight" desc="Write for plant teams. Use plain language, short paragraphs and concrete examples.">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Full text <span className="text-red-500">*</span></label>
                <textarea name="fullText" value={formValues.fullText} onChange={handleChange} required rows={8} placeholder="Use blank lines between paragraphs. Start section headings with ##." className="w-full p-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none resize-y mb-1 transition-all" />
                <span className="text-[11px] text-[#5B6472]">Recommended 600 to 1,500 words.</span>
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Key takeaway <span className="text-red-500">*</span></label>
                <textarea name="keyTakeaway" value={formValues.keyTakeaway} onChange={handleChange} required rows={3} placeholder="What should readers remember?" className="w-full p-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none resize-y mb-1 transition-all" />
                <span className="text-[11px] text-[#5B6472]">One or two sentences.</span>
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2 flex justify-between">Sources or references <span className="text-[#5B6472] font-normal">Optional</span></label>
                <textarea name="sources" value={formValues.sources} onChange={handleChange} rows={3} placeholder="List any standards, studies or links you drew on." className="w-full p-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none resize-y transition-all" />
              </div>
            </div>
          </FormSection>

          {/* Section 4: Featured image */}
          <FormSection num="4" title="Featured image" desc="Use an image you own or are licensed to use. Landscape, at least 1600 × 900 px, JPG or PNG up to 5 MB.">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div onClick={() => fileInputRef.current?.click()} className="bg-[#F9FAFB] border-2 border-dashed border-[#E2E6ED] rounded-[12px] p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#EEF1F6] hover:border-[#0F58F5]/30 transition-all min-h-[160px]">
                <UploadCloud className="w-8 h-8 text-[#0F58F5] mb-3" />
                {fileName ? (
                  <span className="text-[14px] font-medium text-[#0B1220]">{fileName}</span>
                ) : (
                  <>
                    <p className="text-[14px] text-[#5B6472]"><span className="text-[#0F58F5] font-semibold">Click to upload</span> or drag an image here</p>
                    <p className="text-[12px] text-[#A0ABBA] mt-1">No file selected</p>
                  </>
                )}
                <input type="file" name="image" ref={fileInputRef} onChange={handleFileChange} accept="image/jpeg, image/png" className="hidden" />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label className="text-[13px] font-bold text-[#0B1220] mb-2">Image description <span className="text-[#5B6472] font-normal">Optional</span></label>
                  <input type="text" name="imageDescription" value={formValues.imageDescription} onChange={handleChange} placeholder="Describe the image for screen readers" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none transition-all" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[13px] font-bold text-[#0B1220] mb-2">Image credit <span className="text-[#5B6472] font-normal">Optional</span></label>
                  <input type="text" name="imageCredit" value={formValues.imageCredit} onChange={handleChange} placeholder="Photographer, source or 'Own image'" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none transition-all" />
                </div>
              </div>
            </div>
          </FormSection>

          {/* Section 5: Publishing details */}
          <FormSection num="5" title="Publishing details" desc="Help us plan and confirm what you are allowed to share.">
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col relative">
                  <label className="text-[13px] font-bold text-[#0B1220] mb-2 flex justify-between">Preferred publication period <span className="text-[#5B6472] font-normal">Optional</span></label>
                  <select name="pubPeriod" value={formValues.pubPeriod} onChange={handleChange} className="w-full h-11 px-4 appearance-none rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none transition-all">
                    <option value="" disabled>No preference</option>
                    <option value="asap">As soon as possible</option>
                    <option value="next_month">Next month</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-9 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
                <div className="flex flex-col relative">
                  <label className="text-[13px] font-bold text-[#0B1220] mb-2">Preferred contact method <span className="text-red-500">*</span></label>
                  <select name="contactMethod" required value={formValues.contactMethod} onChange={handleChange} className="w-full h-11 px-4 appearance-none rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none transition-all">
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-9 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2 flex justify-between">Note to the editors <span className="text-[#5B6472] font-normal">Optional</span></label>
                <textarea name="note" value={formValues.note} onChange={handleChange} rows={3} placeholder="Anything useful for review, such as deadlines or related projects." className="w-full p-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none resize-y transition-all" />
              </div>

              {/* Consent Checkboxes */}
              <div className="flex flex-col gap-4 mt-2">
                <label className="flex items-start gap-4 p-4 bg-[#F9FAFB] border border-[#E2E6ED] rounded-[12px] cursor-pointer hover:border-[#0F58F5]/30 transition-all">
                  <input type="checkbox" name="original" checked={consents.original} onChange={handleConsentChange} required className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#0F58F5] focus:ring-[#0F58F5] shrink-0 cursor-pointer" />
                  <span className="text-[13px] text-[#5B6472] leading-[20px]">
                    <strong className="text-[#0B1220]">This is my original work.</strong> I have the right to submit it and it is not published elsewhere.
                  </span>
                </label>
                <label className="flex items-start gap-4 p-4 bg-[#F9FAFB] border border-[#E2E6ED] rounded-[12px] cursor-pointer hover:border-[#0F58F5]/30 transition-all">
                  <input type="checkbox" name="nonConfidential" checked={consents.nonConfidential} onChange={handleConsentChange} required className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#0F58F5] focus:ring-[#0F58F5] shrink-0 cursor-pointer" />
                  <span className="text-[13px] text-[#5B6472] leading-[20px]">
                    <strong className="text-[#0B1220]">It contains no confidential information.</strong> Clients, facilities and people are anonymised unless I have written permission to name them.
                  </span>
                </label>
                <label className="flex items-start gap-4 p-4 bg-[#F9FAFB] border border-[#E2E6ED] rounded-[12px] cursor-pointer hover:border-[#0F58F5]/30 transition-all">
                  <input type="checkbox" name="privacy" checked={consents.privacy} onChange={handleConsentChange} required className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#0F58F5] focus:ring-[#0F58F5] shrink-0 cursor-pointer" />
                  <span className="text-[13px] text-[#5B6472] leading-[20px]">
                    I agree that AdunniTrak may edit for clarity and style, and use my details in accordance with its <Link href="/privacy" className="text-[#0F58F5] hover:underline font-semibold">Privacy Policy</Link>.
                  </span>
                </label>
              </div>
            </div>
          </FormSection>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className="inline-flex items-center justify-center w-full sm:w-auto h-[52px] px-10 bg-[#0F58F5] hover:bg-[#093593] disabled:bg-[#0F58F5]/50 disabled:cursor-not-allowed rounded-[8px] text-white font-bold text-[15px] transition-colors shadow-sm"
            >
              {isSubmitting ? "Submitting..." : "Submit insight"}
            </button>
          </div>

        </form>
      </SlideUp>
    </div>
  );
};