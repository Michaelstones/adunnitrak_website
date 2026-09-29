import Link from "next/link";
import { ChevronDown, Flag, Phone, Mail } from "lucide-react";

export const ContactFormSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#F5F7FB]">
      <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left Side: Form */}
        <div className="lg:col-span-7 flex flex-col">
          <form className="flex flex-col w-full">

            {/* 2-Column Grid for Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-6">

              {/* Full name */}
              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Full name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Company</label>
                <input
                  type="text"
                  placeholder="Enter your organisation's name"
                  className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]"
                />
              </div>

              {/* Work email */}
              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Work email</label>
                <input
                  type="email"
                  placeholder="Enter your work email address"
                  className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="Include your country code"
                  className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col relative">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Country</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-12 px-4 appearance-none rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]">
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
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Industry</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-12 px-4 appearance-none rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]">
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

              {/* Facility information */}
              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Facility information</label>
                <input
                  type="text"
                  placeholder="Briefly describe your facility"
                  className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]"
                />
              </div>

              {/* Current operational systems */}
              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Current operational systems</label>
                <input
                  type="text"
                  placeholder="Systems, spreadsheets or tools in use"
                  className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]"
                />
              </div>

              {/* Required modules */}
              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Required modules</label>
                <input
                  type="text"
                  placeholder="Operations, maintenance, reliability, inventory…"
                  className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]"
                />
              </div>

              {/* Equipment or asset structure */}
              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Equipment or asset structure</label>
                <input
                  type="text"
                  placeholder="Briefly describe your equipment hierarchy"
                  className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]"
                />
              </div>

              {/* Terminology and nomenclature */}
              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Terminology and nomenclature</label>
                <input
                  type="text"
                  placeholder="Naming conventions used on site"
                  className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]"
                />
              </div>

              {/* Workflow or approval requirements */}
              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Workflow or approval requirements</label>
                <input
                  type="text"
                  placeholder="Key approval or escalation requirements"
                  className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]"
                />
              </div>
            </div>

            {/* Full-width Fields */}
            <div className="flex flex-col mb-6">
              <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Integration requirements</label>
              <input
                type="text"
                placeholder="Existing systems you may need to connect"
                className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]"
              />
            </div>

            <div className="flex flex-col mb-8">
              <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Main challenges</label>
              <textarea
                placeholder="What would you most like AdunniTrak to help your operation achieve?"
                className="w-full min-h-[114px] p-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8] resize-y"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-4 mb-8">
              <input
                type="checkbox"
                id="consent"
                className="mt-1 w-4 h-4 rounded border-[#D1D5DB] text-[#1656E8] focus:ring-[#1656E8]"
              />
              <label htmlFor="consent" className="text-[14px] leading-[20px] text-[#5B6472]">
                I agree that AdunniTrak may use the information provided to contact me to discuss my requirements and schedule a demonstration.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex items-center justify-center w-fit  h-12 px-8 bg-[#1656E8] hover:bg-[#0F45C4] rounded-lg text-white font-bold text-[14px] transition-colors"
            >
              Submit requirements
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#E2E6ED] flex flex-col">
            <div className="w-12 h-12 rounded-full bg-[#F5F7FB] flex items-center justify-center mb-4">
              <Flag className="w-5 h-5 text-[#0F58F5]" />
            </div>
            <h4 className="text-[18px] leading-[24px] font-bold text-[#0B1220] mb-2">AdunniTrak Solutions Inc.</h4>
            <p className="text-[16px] leading-[20px] text-[#5B6472]">London, Ontario, Canada</p>
          </div>

          <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#E2E6ED] flex flex-col">
            <div className="w-12 h-12 rounded-full bg-[#F5F7FB] flex items-center justify-center mb-4">
              <Flag className="w-5 h-5 text-[#0F58F5]" />
            </div>
            <h4 className="text-[18px] leading-[24px] font-bold text-[#0B1220] mb-2">AdunniTrak Solutions Nigeria Ltd.</h4>
            <p className="text-[16px] leading-[26px] text-[#5B6472]">
              2, Babatope Ajakaiye Crescent, Jahi, FCT Abuja, Nigeria
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#E2E6ED] flex flex-col">
            <div className="w-12 h-12 rounded-full bg-[#F5F7FB] flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-[#0F58F5]" />
            </div>
            <h4 className="text-[18px] leading-[24px] font-bold text-[#0B1220] mb-4">Phone</h4>
            <p className="text-[16px] leading-[26px] text-[#5B6472]">
              <span className='text-[#0F58F5] inline-flex'>+1 226 385 7309 </span>
              (Canada)<br />
              <span className='text-[#0F58F5]'> +234 803 458 7309</span>
              (Nigeria)
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#E2E6ED] flex flex-col">
            <div className="w-12 h-12 rounded-full bg-[#F5F7FB] flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-[#0F58F5]" />
            </div>
            <h4 className="text-[18px] leading-[24px] font-bold text-[#0B1220] mb-2">Email</h4>
            <p className="text-[16px] leading-[26px] text-[#0F58F5]">
              agboola.shonekan@adunnitrak.com
            </p>
          </div>

          <div className="bg-[#0B1220]  rounded-xl p-6 lg:p-8 border border-[#E2E6ED] flex flex-col mt-4">
            <h4 className="text-[18px] leading-[24px] font-bold text-white mb-4">Prefer a live walkthrough?</h4>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center w-full h-12 px-8 bg-[#1656E8] hover:bg-[#333B47] rounded-lg text-white font-bold text-[14px] transition-colors"
            >
              Book a demo
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
