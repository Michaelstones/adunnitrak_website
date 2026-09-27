
import { Check, ArrowRight, } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const SolutionsHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-bg-inverse text-white min-h-[646px] flex items-center">
      {/* Background Gradients/Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(113deg,rgba(3,18,49,0.97)_37%,rgba(9,3,63,0.63)_49%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_100%)] pointer-events-none" />

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-8 relative z-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Content Box */}
        <div className="flex flex-col w-full lg:max-w-[620px]">
          <span className="t-overline text-action-primary mb-4 block">Connected solutions for industrial operations</span>

          <h1 className="t-display mb-6">
            Turn operational challenges into connected action
          </h1>

          <p className="t-body-lg text-text-muted text-white/70 mb-4">
            Bring people, processes and operational data together.
          </p>
          <p className="t-body-lg text-text-muted text-white/70 mb-8">
            AdunniTrak helps industrial teams move from disconnected systems to a unified operational record.
          </p>

          <ul className="flex flex-col gap-3 mb-10">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-action-primary shrink-0 mt-0.5" />
              <span className="t-body-lg text-white/90">Configured around your operation, not a generic one</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-action-primary shrink-0 mt-0.5" />
              <span className="t-body-lg text-white/90">Connected across operational functions, not a collection of silos</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-action-primary shrink-0 mt-0.5" />
              <span className="t-body-lg text-white/90">Supported by Adunni AI, grounded in your approved procedures</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/book-demo" className="btn-primary w-full sm:w-auto group flex items-center justify-center">
              Book a live demo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#solutions" className="btn-outline-dark w-full sm:w-auto flex items-center justify-center">
              Explore solutions
            </Link>
          </div>
        </div>

        {/* Right Asset Box */}
        <div className="w-full relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[600px] h-full">
            <Image
              src="/images/solutions/hero_image.png"
              alt="AdunniTrak Solutions Hero Image"
              fill
              className="object-contain lg:object-right"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};