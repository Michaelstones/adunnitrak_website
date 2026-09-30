import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="bg-[#031231] text-white pt-16 md:pt-24">
      {/* Pre-Footer Action Band */}


      {/* Main Footer Matrix */}
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logofooter.png"
                alt="AdunniTrak Logo"
                width={150}
                height={24}
                style={{ width: "auto" }}
              />
            </Link>
            <p className="font-sans font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22px] text-white/70 max-w-sm">
              An AI-powered industrial operational intelligence platform
              connecting operations, maintenance, reliability, inventory and
              workforce activity.
            </p>
          </div>

          {/* Column 2: Platform Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h6 className="font-sans font-bold text-[11px] leading-[16px] tracking-[0.06em] text-white uppercase">PLATFORM</h6>
            <div className="flex flex-col gap-3">
              <Link
                href="/platform"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                Operation
              </Link>
              <Link
                href="/maintenance"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                Maintenance
              </Link>
              <Link
                href="/reliability"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                Reliability and analytics
              </Link>
              <Link
                href="/inventory"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                Inventory and resources
              </Link>
              <Link
                href="/workforce"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                Workforce
              </Link>
              <Link
                href="/adunni-ai"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                Adunni AI
              </Link>
            </div>
          </div>

          {/* Column 3: Company Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h6 className="font-sans font-bold text-[11px] leading-[16px] tracking-[0.06em] text-white uppercase">COMPANY</h6>
            <div className="flex flex-col gap-3">
              <Link
                href="/about"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                About us
              </Link>
              <Link
                href="/story"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                Our story
              </Link>
              <Link
                href="/leadership"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                Leadership
              </Link>
              <Link
                href="/insight"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                Insight
              </Link>
              <Link
                href="/contact"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/demo"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                Book a demo
              </Link>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h6 className="font-sans font-bold text-[11px] leading-[16px] tracking-[0.06em] text-white uppercase">CONTACT</h6>
            <div className="flex flex-col gap-3">
              <p className="font-sans font-normal text-[13px] md:text-[14px] text-white/70">
                AdunniTrak Solutions Inc.
                <br />
                London, Ontario, Canada
              </p>
              <p className="font-sans font-normal text-[13px] md:text-[14px] text-white/70">
                AdunniTrak Solutions Nigeria Ltd.
                <br />
                2, Babatope Ajakaiye Crescent, Jahi, FCT Abuja, Nigeria
              </p>
              <p className="font-sans font-normal text-[13px] md:text-[14px] text-white/70">
                +1 226 365 7308
                <br />
                +234 803 458 7309
              </p>
              <Link
                href="mailto:info@adunnitrak.com"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                info@adunnitrak.com

              </Link>
              <Link
                href="https://www.adunnitrak.com"
                target="_blank"
                className="font-sans font-normal text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors"
              >
                www.adunnitrak.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Sub-footer */}
      <div className="border-t border-white/10">
        <div className="max-w-[1366px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy"
              className="font-sans font-normal text-[12px] text-white/70 hover:text-white transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms"
              className="font-sans font-normal text-[12px] text-white/70 hover:text-white transition-colors"
            >
              Terms of use
            </Link>
            <Link
              href="/cookie"
              className="font-sans font-normal text-[12px] text-white/70 hover:text-white transition-colors"
            >
              Cookie policy
            </Link>
          </div>
          <p className="font-sans font-normal text-[12px] text-white/70 text-center md:text-right">
            Where data meets diligence · © 2026 AdunniTrak Solutions Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
