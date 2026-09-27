import React from "react";
import { ChevronDown } from "lucide-react";

export const DemoRequestFormSection = () => {
  const nextSteps = [
    "We review your organisation, industry, interests and current challenges.",
    "We contact you to confirm the session and clarify any missing details.",
    "We prepare relevant workflows, product views and examples.",
    "We conduct the demo and discuss configuration needs."
  ];

  return (
    <section id="request-form" className="w-full py-16 lg:py-24   bg-white">
      <div className=" w-full mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            Request a personalised session
          </span>
          <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-extrabold text-[#0B1220] tracking-[-0.01em] mb-6">
            Tell us about your operation
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-[#5B6472] mb-12">
            Provide a few details about your organisation and the areas you would like to explore. This information will help us prepare a more relevant demonstration.
          </p>

          <div className="flex flex-col mb-12">
            <h3 className="text-[18px] leading-[24px] font-bold text-[#0B1220] mb-6">
              What happens after you submit
            </h3>
            <div className="flex flex-col gap-6 bg-[#F5F7FB] h-[400px] sm:h-[700px] p-6 rounded-xl">
              {nextSteps.map((step, i) => (
                <div key={i} className="flex gap-4 place-items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F58F5] " />

                  <p className="text-[14px] leading-[22px] text-[#5B6472] pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>


        </div>

        {/* Right Content - Form */}
        <div className="lg:col-span-7 flex flex-col">
          <form className="flex flex-col w-full">

            {/* Top 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-6">

              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Full name</label>
                <input type="text" placeholder="Enter your full name" className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]" />
              </div>

              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Company or organisation</label>
                <input type="text" placeholder="Enter your organisation's name" className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]" />
              </div>

              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Work email</label>
                <input type="email" placeholder="Enter your work email address" className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]" />
              </div>

              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Phone number</label>
                <input type="tel" placeholder="Include your country code" className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]" />
              </div>

              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Job title</label>
                <input type="text" placeholder="Enter your role or position" className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]" />
              </div>

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

              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Facility or plant type</label>
                <input type="text" placeholder="Briefly describe your facility" className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]" />
              </div>

              <div className="flex flex-col relative">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Industry</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-12 px-4 appearance-none rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]">
                    <option value="" disabled className="text-[#9CA3AF]">Select industry</option>
                    <option value="aggregates">Aggregates & Quarries</option>
                    <option value="mining">Mining & Mineral Processing</option>
                    <option value="cement">Cement Manufacturing</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Full-width Areas of interest */}
            <div className="flex flex-col mb-6 relative">
              <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Areas of interest</label>
              <div className="relative">
                <select defaultValue="" className="w-full h-12 px-4 appearance-none rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]">
                  <option value="" disabled className="text-[#9CA3AF]">Select areas of interest</option>
                  <option value="all">Complete platform overview</option>
                  <option value="maintenance">Maintenance & Reliability</option>
                  <option value="operations">Operations & Production</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6472] pointer-events-none" />
              </div>
            </div>

            {/* Bottom 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-6">
              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Current operational systems</label>
                <input type="text" placeholder="Systems, spreadsheets or tools in use" className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]" />
              </div>

              <div className="flex flex-col">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Main operational challenge</label>
                <input type="text" placeholder="What should AdunniTrak help improve?" className="w-full h-12 px-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]" />
              </div>

              <div className="flex flex-col relative">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Preferred contact method</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-12 px-4 appearance-none rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]">
                    <option value="" disabled className="text-[#9CA3AF]">Select preferred contact method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6472] pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col relative">
                <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Preferred date or period</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-12 px-4 appearance-none rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8]">
                    <option value="" disabled className="text-[#9CA3AF]">Select timeframe</option>
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
              <label className="text-[14px] leading-[20px] font-bold text-[#0B1220] mb-2">Additional message</label>
              <textarea placeholder="Any other useful preparation information" className="w-full min-h-[114px] p-4 rounded-lg border border-[#D1D5DB] bg-white text-[14px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1656E8] focus:ring-1 focus:ring-[#1656E8] resize-y" />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-4 mb-8">
              <input type="checkbox" id="demo_consent" className="mt-1 w-4 h-4 rounded border-[#D1D5DB] text-[#1656E8] focus:ring-[#1656E8]" />
              <label htmlFor="demo_consent" className="text-[14px] leading-[20px] text-[#5B6472]">
                I agree that AdunniTrak may use the information provided to contact me to discuss my requirements and schedule a demonstration.
              </label>
            </div>

            {/* Submit & Disclaimer */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button type="button" className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-8 bg-[#1656E8] hover:bg-[#0F45C4] rounded-lg text-white font-bold text-[14px] transition-colors whitespace-nowrap">
                Request personalized demo
              </button>
              <p className="text-[12px] leading-[18px] text-[#5B6472]">
                Submitting this form does not create a purchase obligation or a binding contract.
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
