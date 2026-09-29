import { useState, useRef } from "react";
import { submitInsightToSanity } from "@/app/actions/submitInsight";
import { SlideUp } from "@/components/animations/SlideUp";
import { ChevronDown, UploadCloud, } from "lucide-react";
import Link from "next/link";

export default function ContributeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  // Custom states for custom UI elements
  const [contentType, setContentType] = useState("Article");
  const [fileName, setFileName] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    formData.append("contentType", contentType); // Append the custom state card value

    // Call the Sanity Server Action
    const result = await submitInsightToSanity(formData);

    if (result.success) {
      setStatus({ type: "success", message: result.message });
      (e.target as HTMLFormElement).reset();
      setFileName(null);
      setContentType("Article");
    } else {
      setStatus({ type: "error", message: result.message });
    }

    setIsSubmitting(false);
  };

  // Reusable Section Wrapper matching the design
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
          <FormSection
            num="1"
            title="About you"
            desc="We credit contributors by name. Your email is only used for editorial follow-up."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Full name <span className="text-red-500">*</span></label>
                <input type="text" name="fullName" required className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Work email <span className="text-red-500">*</span></label>
                <input type="email" name="workEmail" required className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Job title <span className="text-red-500">*</span></label>
                <input type="text" name="jobTitle" required className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Organisation <span className="text-red-500">*</span></label>
                <input type="text" name="organisation" required className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none" />
              </div>
              <div className="flex flex-col relative">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Country <span className="text-red-500">*</span></label>
                <select name="country" required defaultValue="" className="w-full h-11 px-4 appearance-none rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none">
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
                <input type="text" name="linkedIn" placeholder="https://" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none" />
              </div>
            </div>
          </FormSection>

          {/* Section 2: Insight Details */}
          <FormSection
            num="2"
            title="Insight details"
            desc="This information appears on the insights page and in search results."
          >
            <div className="flex flex-col gap-6">
              <div>
                <label className="text-[13px] font-bold text-[#0B1220] mb-3 block">Content type <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setContentType("Article")}
                    className={`p-4 rounded-[8px] border cursor-pointer transition-all ${contentType === "Article" ? "border-[#0F58F5] bg-[#EEF1F6]" : "border-[#E2E6ED] hover:border-[#0F58F5]/50"}`}
                  >
                    <h4 className="font-bold text-[#0B1220] text-[14px] mb-1">Article</h4>
                    <p className="text-[12px] text-[#5B6472]">Practical perspective on systems and workflows.</p>
                  </div>
                  <div
                    onClick={() => setContentType("Field Lesson")}
                    className={`p-4 rounded-[8px] border cursor-pointer transition-all ${contentType === "Field Lesson" ? "border-[#0F58F5] bg-[#EEF1F6]" : "border-[#E2E6ED] hover:border-[#0F58F5]/50"}`}
                  >
                    <h4 className="font-bold text-[#0B1220] text-[14px] mb-1">Field lesson</h4>
                    <p className="text-[12px] text-[#5B6472]">Short note from real industrial work.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-[13px] font-bold text-[#0B1220] mb-2 flex justify-between">Title <span className="text-red-500">*</span></label>
                  <input type="text" name="title" required placeholder="Write a clear, specific headline" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none mb-1" />
                  <span className="text-[11px] text-[#5B6472]">Aim for 60 to 100 characters.</span>
                </div>
                <div className="flex flex-col relative">
                  <label className="text-[13px] font-bold text-[#0B1220] mb-2">Industry <span className="text-red-500">*</span></label>
                  <select name="industry" required defaultValue="" className="w-full h-11 px-4 appearance-none rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none">
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
                <textarea name="summary" required rows={3} placeholder="Two sentences that tell readers what they will learn." className="w-full p-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none resize-y mb-1" />
                <span className="text-[11px] text-[#5B6472]">Shown on article cards.</span>
              </div>

              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2 flex justify-between">Tags <span className="text-[#5B6472] font-normal">Optional</span></label>
                <input type="text" name="tags" placeholder="e.g. shift handover, CMMS, reliability (comma separated)" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none" />
              </div>
            </div>
          </FormSection>

          {/* Section 3: Your insight */}
          <FormSection
            num="3"
            title="Your insight"
            desc="Write for plant teams. Use plain language, short paragraphs and concrete examples."
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Full text <span className="text-red-500">*</span></label>
                <textarea name="fullText" required rows={8} placeholder="Use blank lines between paragraphs. Start section headings with ## (for example: ## Where the data lives)." className="w-full p-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none resize-y mb-1" />
                <span className="text-[11px] text-[#5B6472]">Recommended 600 to 1,500 words.</span>
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2">Key takeaway <span className="text-red-500">*</span></label>
                <textarea name="keyTakeaway" required rows={3} placeholder="What should readers remember?" className="w-full p-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none resize-y mb-1" />
                <span className="text-[11px] text-[#5B6472]">One or two sentences.</span>
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2 flex justify-between">Sources or references <span className="text-[#5B6472] font-normal">Optional</span></label>
                <textarea name="sources" rows={3} placeholder="List any standards, studies or links you drew on." className="w-full p-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none resize-y" />
              </div>
            </div>
          </FormSection>

          {/* Section 4: Featured image */}
          <FormSection
            num="4"
            title="Featured image"
            desc="Use an image you own or are licensed to use. Landscape, at least 1600 × 900 px, JPG or PNG up to 5 MB."
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Image Dropzone */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="bg-[#F9FAFB] border-2 border-dashed border-[#E2E6ED] rounded-[12px] p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#EEF1F6] hover:border-[#0F58F5]/30 transition-all min-h-[160px]"
              >
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
                  <input type="text" name="imageDescription" placeholder="Describe the image for screen readers" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[13px] font-bold text-[#0B1220] mb-2">Image credit <span className="text-[#5B6472] font-normal">Optional</span></label>
                  <input type="text" name="imageCredit" placeholder="Photographer, source or 'Own image'" className="w-full h-11 px-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none" />
                </div>
              </div>
            </div>
          </FormSection>

          {/* Section 5: Publishing details */}
          <FormSection
            num="5"
            title="Publishing details"
            desc="Help us plan and confirm what you are allowed to share."
          >
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col relative">
                  <label className="text-[13px] font-bold text-[#0B1220] mb-2 flex justify-between">Preferred publication period <span className="text-[#5B6472] font-normal">Optional</span></label>
                  <select name="pubPeriod" defaultValue="" className="w-full h-11 px-4 appearance-none rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none">
                    <option value="" disabled>No preference</option>
                    <option value="asap">As soon as possible</option>
                    <option value="next_month">Next month</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-9 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
                <div className="flex flex-col relative">
                  <label className="text-[13px] font-bold text-[#0B1220] mb-2">Preferred contact method <span className="text-red-500">*</span></label>
                  <select name="contactMethod" required defaultValue="email" className="w-full h-11 px-4 appearance-none rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none">
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-9 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#0B1220] mb-2 flex justify-between">Note to the editors <span className="text-[#5B6472] font-normal">Optional</span></label>
                <textarea name="note" rows={3} placeholder="Anything useful for review, such as deadlines or related projects." className="w-full p-4 rounded-[8px] border border-[#E2E6ED] text-[14px] focus:border-[#0F58F5] focus:ring-1 focus:ring-[#0F58F5] outline-none resize-y" />
              </div>

              {/* Consents */}
              <div className="flex flex-col gap-4 mt-2">
                <label className="flex items-start gap-4 p-4 bg-[#F9FAFB] border border-[#E2E6ED] rounded-[12px] cursor-pointer hover:border-[#0F58F5]/30">
                  <input type="checkbox" name="consentOriginal" required className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#0F58F5] focus:ring-[#0F58F5] shrink-0" />
                  <span className="text-[13px] text-[#5B6472] leading-[20px]">
                    <strong className="text-[#0B1220]">This is my original work.</strong> I have the right to submit it and it is not published elsewhere.
                  </span>
                </label>
                <label className="flex items-start gap-4 p-4 bg-[#F9FAFB] border border-[#E2E6ED] rounded-[12px] cursor-pointer hover:border-[#0F58F5]/30">
                  <input type="checkbox" name="consentNonConfidential" required className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#0F58F5] focus:ring-[#0F58F5] shrink-0" />
                  <span className="text-[13px] text-[#5B6472] leading-[20px]">
                    <strong className="text-[#0B1220]">It contains no confidential information.</strong> Clients, facilities and people are anonymised unless I have written permission to name them.
                  </span>
                </label>
                <label className="flex items-start gap-4 p-4 bg-[#F9FAFB] border border-[#E2E6ED] rounded-[12px] cursor-pointer hover:border-[#0F58F5]/30">
                  <input type="checkbox" name="consentPrivacy" required className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#0F58F5] focus:ring-[#0F58F5] shrink-0" />
                  <span className="text-[13px] text-[#5B6472] leading-[20px]">
                    I agree that AdunniTrak may edit for clarity and style, and use my details in accordance with its <Link href="/privacy" className="text-[#0F58F5] hover:underline font-semibold">Privacy Policy</Link>.
                  </span>
                </label>
              </div>
            </div>
          </FormSection>

          {/* Form Status */}
          {status.message && (
            <div className={`p-4 rounded-[8px] text-[14px] font-medium ${status.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
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