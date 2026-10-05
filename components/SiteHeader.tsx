"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const pathname = usePathname();

  // Helper function to check if a link is active (handles exact root match and nested routes)
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  // Helper to check if any link inside the "More" dropdown is active
  const isMoreActive = ["/adunni-ai", "/insight", "/about", "/contact"].some(path => pathname.startsWith(path));

  // Dynamic CTA values based on the current route
  const isDemoPage = pathname === "/demo";
  const ctaText = isDemoPage ? "Contact Sales" : "Book a Demo";
  const ctaHref = isDemoPage ? "/contact" : "/demo";

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
            className={`t-body-sm font-medium transition-colors ${isActive("/") ? "text-action-primary" : "text-ink-700 hover:text-action-primary dark:text-slate-300"
              }`}
          >
            Home
          </Link>
          <Link
            href="/platform"
            className={`t-body-sm font-medium transition-colors ${isActive("/platform") ? "text-action-primary" : "text-ink-700 hover:text-action-primary dark:text-slate-300"
              }`}
          >
            Platform
          </Link>
          <Link
            href="/solutions"
            className={`t-body-sm font-medium transition-colors ${isActive("/solutions") ? "text-action-primary" : "text-ink-700 hover:text-action-primary dark:text-slate-300"
              }`}
          >
            Solutions
          </Link>
          <Link
            href="/industries"
            className={`t-body-sm font-medium transition-colors ${isActive("/industries") ? "text-action-primary" : "text-ink-700 hover:text-action-primary dark:text-slate-300"
              }`}
          >
            Industries
          </Link>
          <Link
            href="/pricing"
            className={`t-body-sm font-medium transition-colors ${isActive("/pricing") ? "text-action-primary" : "text-ink-700 hover:text-action-primary dark:text-slate-300"
              }`}
          >
            Pricing
          </Link>

          {/* Custom Dropdown for "More" */}
          <div className="relative" onMouseLeave={() => setIsMoreOpen(false)}>
            <button
              onMouseEnter={() => setIsMoreOpen(true)}
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className={`flex items-center gap-1 t-body-sm font-medium transition-colors ${isMoreActive ? "text-action-primary" : "text-ink-700 hover:text-action-primary dark:text-slate-300"
                }`}
            >
              More <ChevronDown className="w-4 h-4" />
            </button>

            {isMoreOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex flex-col w-[200px] bg-white dark:bg-navy-900 border border-line-200 dark:border-white/10 rounded-lg shadow-elev-2 p-2">
                  <Link
                    href="/adunni-ai"
                    className={`px-4 py-2 t-body-sm rounded-md transition-colors ${isActive("/adunni-ai") ? "bg-canvas-50 dark:bg-navy-800 text-action-primary" : "hover:bg-canvas-50 dark:hover:bg-navy-800"
                      }`}
                  >
                    Adunni AI
                  </Link>
                  <Link
                    href="/insight"
                    className={`px-4 py-2 t-body-sm rounded-md transition-colors ${isActive("/insight") ? "bg-canvas-50 dark:bg-navy-800 text-action-primary" : "hover:bg-canvas-50 dark:hover:bg-navy-800"
                      }`}
                  >
                    Insight
                  </Link>
                  <Link
                    href="/about"
                    className={`px-4 py-2 t-body-sm rounded-md transition-colors ${isActive("/about") ? "bg-canvas-50 dark:bg-navy-800 text-action-primary" : "hover:bg-canvas-50 dark:hover:bg-navy-800"
                      }`}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className={`px-4 py-2 t-body-sm rounded-md transition-colors ${isActive("/contact") ? "bg-canvas-50 dark:bg-navy-800 text-action-primary" : "hover:bg-canvas-50 dark:hover:bg-navy-800"
                      }`}
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
          <Link href={ctaHref} className="btn-primary h-10 px-5 hover:scale-105 transition-transform">
            {ctaText}
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
            className={`t-h5 border-b border-line-200 dark:border-white/10 pb-4 ${isActive("/") ? "text-action-primary" : "text-ink-900 dark:text-white"
              }`}
          >
            Home
          </Link>
          <Link
            href="/platform"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`t-h5 border-b border-line-200 dark:border-white/10 pb-4 ${isActive("/platform") ? "text-action-primary" : "text-ink-900 dark:text-white"
              }`}
          >
            Platform
          </Link>
          <Link
            href="/solutions"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`t-h5 border-b border-line-200 dark:border-white/10 pb-4 ${isActive("/solutions") ? "text-action-primary" : "text-ink-900 dark:text-white"
              }`}
          >
            Solutions
          </Link>
          <Link
            href="/industries"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`t-h5 border-b border-line-200 dark:border-white/10 pb-4 ${isActive("/industries") ? "text-action-primary" : "text-ink-900 dark:text-white"
              }`}
          >
            Industries
          </Link>
          <Link
            href="/pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`t-h5 border-b border-line-200 dark:border-white/10 pb-4 ${isActive("/pricing") ? "text-action-primary" : "text-ink-900 dark:text-white"
              }`}
          >
            Pricing
          </Link>

          <div className="flex flex-col gap-4 pt-2">
            <span className={`t-overline ${isMoreActive ? "text-action-primary" : "text-ink-500 dark:text-slate-400"}`}>
              More
            </span>
            <Link
              href="/adunni-ai"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`t-body-lg ${isActive("/adunni-ai") ? "text-action-primary font-semibold" : "text-ink-900 dark:text-white"}`}
            >
              Adunni AI
            </Link>
            <Link
              href="/insight"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`t-body-lg ${isActive("/insight") ? "text-action-primary font-semibold" : "text-ink-900 dark:text-white"}`}
            >
              Insight
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`t-body-lg ${isActive("/about") ? "text-action-primary font-semibold" : "text-ink-900 dark:text-white"}`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`t-body-lg ${isActive("/contact") ? "text-action-primary font-semibold" : "text-ink-900 dark:text-white"}`}
            >
              Contact Sales
            </Link>
          </div>

          <div className="mt-auto pt-8">
            <Link
              href={ctaHref}
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full h-12 flex justify-center items-center"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}