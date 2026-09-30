"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Image as ImageIcon, Video as VideoIcon } from "lucide-react";
import { toast } from "sonner";
import { submitInsightToSanity } from "@/app/actions/submitInsight";
import { SlideUp } from "@/components/animations/SlideUp";

const inputClass =
  "w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] px-4 py-3 text-[14px] text-[#0B1220] placeholder:text-[#A0ABBA] focus:bg-white focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none transition-all";


export default function ContributeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Custom states for UI elements
  const [contentType, setContentType] = useState("Article");
  const [fileName, setFileName] = useState<string | null>(null);
  const [videoFileName, setVideoFileName] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // Fully controlled state for all text/select inputs (Added 'industry' key here)
  const [formValues, setFormValues] = useState({
    fullName: "",
    workEmail: "",
    jobTitle: "",
    organisation: "",
    country: "",
    linkedIn: "",
    title: "",
    industry: "", // Fixed: Added missing key
    summary: "",
    tags: "",
    fullText: "",
    keyTakeaway: "",
    sources: "",
    imageDescription: "",
    imageCredit: "",
    pubPeriod: "No preference",
    contactMethod: "Email",
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

    // Enforce max lengths based on the UI counters
    if (name === "title" && value.length > 120) return;
    if (name === "summary" && value.length > 200) return;

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

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFileName(e.target.files[0].name);
    }
  };

  // Utility to calculate words for the Full Text field
  const wordCount = formValues.fullText.trim().split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Strict validation guard
  const isFormValid =
    formValues.fullName.trim() !== "" &&
    formValues.workEmail.trim() !== "" &&
    formValues.jobTitle.trim() !== "" &&
    formValues.organisation.trim() !== "" &&
    formValues.country !== "" &&
    formValues.title.trim() !== "" &&
    formValues.summary.trim() !== "" &&
    formValues.industry !== "" && // Added industry to validation check
    formValues.fullText.trim() !== "" &&
    formValues.keyTakeaway.trim() !== "" &&
    formValues.imageDescription.trim() !== "" &&
    formValues.imageCredit.trim() !== "" &&
    consents.original &&
    consents.nonConfidential &&
    consents.privacy;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill all required fields and accept the policies.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Uploading your insight and media...");

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("contentType", contentType);

      const result = await submitInsightToSanity(formData);

      if (result.success) {
        toast.success("Insight submitted successfully! We will be in touch.", { id: toastId });
        if (result.notified) {
          toast.success(result.message, { id: toastId });
        } else {
          toast.warning(result.message, { id: toastId });
        }

        // Reset everything on success
        (e.target as HTMLFormElement).reset();
        setFileName(null);
        setVideoFileName(null);
        setContentType("Article");
        setFormValues({
          fullName: "", workEmail: "", jobTitle: "", organisation: "", country: "", linkedIn: "",
          title: "", industry: "", summary: "", tags: "", fullText: "", keyTakeaway: "", sources: "",
          imageDescription: "", imageCredit: "", pubPeriod: "No preference", contactMethod: "Email", note: "",
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



  return (
    <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-[16px] shadow-sm border border-[#E2E8F0]">
      <SlideUp delay={0.1}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-12">

          {/* Section 1: About You */}
          <FormSection num="1" title="About you" desc="We credit contributors by name. Your email is only used for editorial follow-up.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div className="flex flex-col">
                <Label text="Full name" required />
                <input type="text" name="fullName" value={formValues.fullName} onChange={handleChange} required placeholder="Enter your full name" className={inputClass} />
              </div>
              <div className="flex flex-col">
                <Label text="Work email" required />
                <input type="email" name="workEmail" value={formValues.workEmail} onChange={handleChange} required placeholder="Enter your work email address" className={inputClass} />
              </div>
              <div className="flex flex-col">
                <Label text="Job title" required />
                <input type="text" name="jobTitle" value={formValues.jobTitle} onChange={handleChange} required placeholder="Enter your role or position" className={inputClass} />
              </div>
              <div className="flex flex-col">
                <Label text="Organisation" required />
                <input type="text" name="organisation" value={formValues.organisation} onChange={handleChange} required placeholder="Enter your organisation's name" className={inputClass} />
              </div>
              <div className="flex flex-col relative">
                <Label text="Country" required />
                <select name="country" required value={formValues.country} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="" disabled>Select country</option>
                  <option value="ng">Nigeria</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                </select>
                <ChevronDown className="absolute right-4 top-11 w-4 h-4 text-[#5B6472] pointer-events-none" />
              </div>
              <div className="flex flex-col">
                <Label text="LinkedIn or website" optional />
                <input type="text" name="linkedIn" value={formValues.linkedIn} onChange={handleChange} placeholder="https://" className={inputClass} />
              </div>
            </div>
          </FormSection>

          {/* Section 2: Insight Details */}
          <FormSection num="2" title="Insight details" desc="This information appears on the insights page and in search results.">
            <div className="flex flex-col gap-6">
              <div>
                <Label text="Content type" required />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div onClick={() => setContentType("Article")} className={`p-5 rounded-[12px] border-2 cursor-pointer transition-all ${contentType === "Article" ? "border-[#0F58F5] bg-[#EEF3FF]" : "border-[#E2E8F0] bg-white hover:border-[#0F58F5]/30"}`}>
                    <h4 className="font-bold text-[#0B1220] text-[15px] mb-1">Article</h4>
                    <p className="text-[13px] text-[#5B6472]">Practical perspective on systems and workflows</p>
                  </div>
                  <div onClick={() => setContentType("Field Lesson")} className={`p-5 rounded-[12px] border-2 cursor-pointer transition-all ${contentType === "Field Lesson" ? "border-[#0F58F5] bg-[#EEF3FF]" : "border-[#E2E8F0] bg-white hover:border-[#0F58F5]/30"}`}>
                    <h4 className="font-bold text-[#0B1220] text-[15px] mb-1">Field lesson</h4>
                    <p className="text-[13px] text-[#5B6472]">Short note from real industrial work</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <Label text="Title" required />
                <input type="text" name="title" value={formValues.title} onChange={handleChange} required placeholder="Write a clear, specific headline" className={inputClass} />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[12px] text-[#5B6472]">Aim for 60 to 100 characters.</span>
                  <span className="text-[12px] text-[#5B6472]">{formValues.title.length} / 120</span>
                </div>
              </div>

              <div className="flex flex-col">
                <Label text="Summary" required />
                <textarea name="summary" value={formValues.summary} onChange={handleChange} required rows={3} placeholder="Two sentences that tell readers what they will learn." className={`${inputClass} resize-y`} />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[12px] text-[#5B6472]">Shown on article cards.</span>
                  <span className="text-[12px] text-[#5B6472]">{formValues.summary.length} / 200</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div className="flex flex-col relative">
                  <Label text="Industry" required />
                  <select name="industry" required value={formValues.industry} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" disabled>Select industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="energy">Energy & Power</option>
                    <option value="mining">Mining</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-11 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
                <div className="flex flex-col">
                  <Label text="Tags" subtext="Up to 5, press Enter to add" />
                  <input type="text" name="tags" value={formValues.tags} onChange={handleChange} placeholder="e.g. shift handover, CMMS" className={inputClass} />
                </div>
              </div>
            </div>
          </FormSection>

          {/* Section 3: Your insight */}
          <FormSection num="3" title="Your insight" desc="Write for plant teams. Use plain language, short paragraphs and concrete examples.">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <Label text="Full text" required subtext="Recommended 600 to 1,500 words" />
                <textarea name="fullText" value={formValues.fullText} onChange={handleChange} required rows={10} placeholder="Use blank lines between paragraphs. Start section headings with ## (for example: ## Where the data lives)." className={`${inputClass} resize-y`} />
                <div className="flex justify-between items-center mt-2 border-t border-[#E2E8F0] pt-2">
                  <span className="text-[12px] text-[#5B6472]">Estimated reading time: {formValues.fullText.length > 0 ? readingTime : 0} min</span>
                  <span className="text-[12px] text-[#5B6472]">{formValues.fullText.length > 0 ? wordCount : 0} words</span>
                </div>
              </div>
              <div className="flex flex-col">
                <Label text="Key takeaway" required subtext="One or two sentences" />
                <textarea name="keyTakeaway" value={formValues.keyTakeaway} onChange={handleChange} required rows={3} placeholder="What should readers remember?" className={`${inputClass} resize-y`} />
              </div>
              <div className="flex flex-col">
                <Label text="Sources or references" optional />
                <textarea name="sources" value={formValues.sources} onChange={handleChange} rows={3} placeholder="List any standards, studies or links you drew on." className={`${inputClass} resize-y`} />
              </div>
            </div>
          </FormSection>

          {/* Section 4: Media Uploads */}
          <FormSection num="4" title="Media uploads" desc="Upload featured images or field walkthrough videos for your submission.">
            <div className="flex flex-col gap-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image Upload Box */}
                <div onClick={() => fileInputRef.current?.click()} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] p-5 flex items-center gap-4 cursor-pointer hover:bg-[#F1F5F9] transition-all">
                  <div className="w-12 h-12 bg-[#EEF3FF] rounded-[10px] flex items-center justify-center shrink-0">
                    <ImageIcon className="w-6 h-6 text-[#0F58F5]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[13px] font-bold text-[#0B1220]">Featured Image</span>
                    <span className="text-[12px] text-[#5B6472] truncate">
                      {fileName ? fileName : "Click to select JPG or PNG"}
                    </span>
                  </div>
                  <input type="file" name="image" ref={fileInputRef} onChange={handleFileChange} accept="image/jpeg, image/png, image/webp" className="hidden" />
                </div>

                {/* Video Upload Box */}
                <div onClick={() => videoInputRef.current?.click()} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] p-5 flex items-center gap-4 cursor-pointer hover:bg-[#F1F5F9] transition-all">
                  <div className="w-12 h-12 bg-[#EEF3FF] rounded-[10px] flex items-center justify-center shrink-0">
                    <VideoIcon className="w-6 h-6 text-[#0F58F5]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[13px] font-bold text-[#0B1220]">Walkthrough Video <span className="text-[#5B6472] font-normal">(Optional)</span></span>
                    <span className="text-[12px] text-[#5B6472] truncate">
                      {videoFileName ? videoFileName : "Click to select MP4 or MOV"}
                    </span>
                  </div>
                  <input type="file" name="video" ref={videoInputRef} onChange={handleVideoChange} accept="video/mp4, video/quicktime" className="hidden" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div className="flex flex-col">
                  <Label text="Image description" required />
                  <input type="text" name="imageDescription" value={formValues.imageDescription} onChange={handleChange} required placeholder="Describe the image for screen readers" className={inputClass} />
                </div>
                <div className="flex flex-col">
                  <Label text="Image credit" required />
                  <input type="text" name="imageCredit" value={formValues.imageCredit} onChange={handleChange} required placeholder="Photographer, source or 'Own image'" className={inputClass} />
                </div>
              </div>
            </div>
          </FormSection>

          {/* Section 5: Publishing details */}
          <FormSection num="5" title="Publishing details" desc="Help us plan and confirm what you are allowed to share.">
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div className="flex flex-col relative">
                  <Label text="Preferred publication period" optional />
                  <select name="pubPeriod" value={formValues.pubPeriod} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="No preference">No preference</option>
                    <option value="asap">As soon as possible</option>
                    <option value="next_month">Next month</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-11 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
                <div className="flex flex-col relative">
                  <Label text="Preferred contact method" />
                  <select name="contactMethod" value={formValues.contactMethod} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-11 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col">
                <Label text="Note to the editors" optional />
                <textarea name="note" value={formValues.note} onChange={handleChange} rows={3} placeholder="Anything useful for review, such as deadlines or related projects." className={`${inputClass} resize-y`} />
              </div>

              {/* Consent Checkboxes */}
              <div className="flex flex-col gap-4 mt-2">
                <label className="flex items-start gap-4 p-4 bg-white border border-[#E2E8F0] rounded-[10px] cursor-pointer hover:border-[#0F58F5]/30 transition-all">
                  <input type="checkbox" name="original" checked={consents.original} onChange={handleConsentChange} required className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#0F58F5] focus:ring-[#0F58F5] shrink-0 cursor-pointer" />
                  <span className="text-[14px] text-[#5B6472] leading-[22px]">
                    <strong className="text-[#0B1220]">This is my original work.</strong> I have the right to submit it and it is not published elsewhere.
                  </span>
                </label>

                <label className="flex items-start gap-4 p-4 bg-white border border-[#E2E8F0] rounded-[10px] cursor-pointer hover:border-[#0F58F5]/30 transition-all">
                  <input type="checkbox" name="nonConfidential" checked={consents.nonConfidential} onChange={handleConsentChange} required className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#0F58F5] focus:ring-[#0F58F5] shrink-0 cursor-pointer" />
                  <span className="text-[14px] text-[#5B6472] leading-[22px]">
                    <strong className="text-[#0B1220]">It contains no confidential information.</strong> Clients, facilities and people are anonymised unless I have written permission to name them.
                  </span>
                </label>

                <label className="flex items-start gap-4 p-4 bg-white border border-[#E2E8F0] rounded-[10px] cursor-pointer hover:border-[#0F58F5]/30 transition-all">
                  <input type="checkbox" name="privacy" checked={consents.privacy} onChange={handleConsentChange} required className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#0F58F5] focus:ring-[#0F58F5] shrink-0 cursor-pointer" />
                  <span className="text-[14px] text-[#5B6472] leading-[22px]">
                    I agree that AdunniTrak may edit for clarity and style, and use my details in accordance with its <Link href="/privacy" className="text-[#0F58F5] font-semibold hover:underline">Privacy Policy</Link>.
                  </span>
                </label>
              </div>
            </div>
          </FormSection>

          {/* Submit Button Area */}
          <div className="flex flex-col gap-3 pt-4 border-t border-[#E2E8F0]">
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className="inline-flex items-center justify-center w-fit h-[48px] px-8 bg-[#0F58F5] hover:bg-[#093593] disabled:bg-[#0F58F5]/50 disabled:cursor-not-allowed rounded-[8px] text-white font-bold text-[15px] transition-colors shadow-sm"
            >
              {isSubmitting ? "Submitting..." : "Submit for review"}
            </button>
            <span className="text-[12px] text-[#5B6472]">
              Submitting does not guarantee publication. We reply within 10 working days.
            </span>
          </div>

        </form>
      </SlideUp>
    </div>
  );
}

function FormSection({
  num,
  title,
  desc,
  children,
}: {
  num: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-[#0F58F5] text-white font-bold text-[14px] flex items-center justify-center shrink-0 mt-0.5">
          {num}
        </div>
        <div>
          <h2 className="text-[#0B1220] font-inter font-bold text-[20px] mb-1">{title}</h2>
          {desc && <p className="text-[#5B6472] font-inter text-[14px] leading-[22px]">{desc}</p>}
        </div>
      </div>
      <div className="lg:pl-12">{children}</div>
    </div>
  );
}

function Label({
  text,
  required,
  optional,
  subtext,
}: {
  text: string;
  required?: boolean;
  optional?: boolean;
  subtext?: string;
}) {
  return (
    <div className="flex items-baseline justify-between mb-2">
      <label className="text-[14px] font-bold text-[#0B1220]">
        {text} {required && <span className="text-[#E02424]">*</span>}{" "}
        {subtext && <span className="text-[#5B6472] font-normal ml-1">{subtext}</span>}
      </label>
      {optional && <span className="text-[13px] text-[#5B6472]">Optional</span>}
    </div>
  );
}