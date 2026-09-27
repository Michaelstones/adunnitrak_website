"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-6 md:px-6 lg:px-[24px] border-b border-line-200 bg-white/95 backdrop-blur-[12px] dark:bg-navy-950/95 dark:border-white/10 transition-colors">
      <div className="max-w-[1302px] mx-auto h-[76px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="AdunniTrak Logo"
            width={150}
            height={24}
            style={{ width: "auto" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="t-body-sm font-medium text-ink-700 hover:text-action-primary dark:text-slate-300 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/platform"
            className="t-body-sm font-medium text-ink-700 hover:text-action-primary dark:text-slate-300 transition-colors"
          >
            Platform
          </Link>
          <Link
            href="/solutions"
            className="t-body-sm font-medium text-ink-700 hover:text-action-primary dark:text-slate-300 transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="/industries"
            className="t-body-sm font-medium text-ink-700 hover:text-action-primary dark:text-slate-300 transition-colors"
          >
            Industries
          </Link>
          <Link
            href="/pricing"
            className="t-body-sm font-medium text-ink-700 hover:text-action-primary dark:text-slate-300 transition-colors"
          >
            Pricing
          </Link>

          {/* Custom Dropdown for "More" */}
          <div className="relative" onMouseLeave={() => setIsMoreOpen(false)}>
            <button
              onMouseEnter={() => setIsMoreOpen(true)}
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center gap-1 t-body-sm font-medium text-ink-700 hover:text-action-primary dark:text-slate-300 transition-colors"
            >
              More <ChevronDown className="w-4 h-4" />
            </button>

            {isMoreOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex flex-col w-[200px] bg-white dark:bg-navy-900 border border-line-200 dark:border-white/10 rounded-lg shadow-elev-2 p-2">
                  <Link
                    href="/adunni-ai"
                    className="px-4 py-2 t-body-sm hover:bg-canvas-50 dark:hover:bg-navy-800 rounded-md transition-colors"
                  >
                    Adunni AI
                  </Link>
                  <Link
                    href="/insight"
                    className="px-4 py-2 t-body-sm hover:bg-canvas-50 dark:hover:bg-navy-800 rounded-md transition-colors"
                  >
                    Insight
                  </Link>
                  <Link
                    href="/about"
                    className="px-4 py-2 t-body-sm hover:bg-canvas-50 dark:hover:bg-navy-800 rounded-md transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 t-body-sm hover:bg-canvas-50 dark:hover:bg-navy-800 rounded-md transition-colors"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA - Desktop */}
        <div className="hidden lg:block">
          <Link href="/demo" className="btn-primary h-10 px-5 hover:scale-105 transition-transform">
            Book a Demo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-ink-900 dark:text-white transition-transform active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 animate-in fade-in zoom-in duration-200" />
          ) : (
            <Menu className="w-6 h-6 animate-in fade-in zoom-in duration-200" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-[76px] left-0 w-full h-[calc(100vh-76px)] bg-white dark:bg-navy-950 border-t border-line-200 dark:border-white/10 p-6 flex flex-col gap-6 lg:hidden overflow-y-auto animate-in slide-in-from-right-full duration-300">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="t-h5 text-ink-900 dark:text-white border-b border-line-200 dark:border-white/10 pb-4"
          >
            Home
          </Link>
          <Link
            href="/platform"
            onClick={() => setIsMobileMenuOpen(false)}
            className="t-h5 text-ink-900 dark:text-white border-b border-line-200 dark:border-white/10 pb-4"
          >
            Platform
          </Link>
          <Link
            href="/solutions"
            onClick={() => setIsMobileMenuOpen(false)}
            className="t-h5 text-ink-900 dark:text-white border-b border-line-200 dark:border-white/10 pb-4"
          >
            Solutions
          </Link>
          <Link
            href="/industries"
            onClick={() => setIsMobileMenuOpen(false)}
            className="t-h5 text-ink-900 dark:text-white border-b border-line-200 dark:border-white/10 pb-4"
          >
            Industries
          </Link>
          <Link
            href="/pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="t-h5 text-ink-900 dark:text-white border-b border-line-200 dark:border-white/10 pb-4"
          >
            Pricing
          </Link>

          <div className="flex flex-col gap-4 pt-2">
            <span className="t-overline text-ink-500 dark:text-slate-400">
              More
            </span>
            <Link
              href="/adunni-ai"
              onClick={() => setIsMobileMenuOpen(false)}
              className="t-body-lg text-ink-900 dark:text-white"
            >
              Adunni AI
            </Link>
            <Link
              href="/insight"
              onClick={() => setIsMobileMenuOpen(false)}
              className="t-body-lg text-ink-900 dark:text-white"
            >
              Insight
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="t-body-lg text-ink-900 dark:text-white"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="t-body-lg text-ink-900 dark:text-white"
            >
              Contact Sales
            </Link>
          </div>

          <div className="mt-auto pt-8">
            <Link
              href="/demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full h-12"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}