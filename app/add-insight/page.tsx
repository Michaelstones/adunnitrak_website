"use client";

import ContributeForm from '@/components/addInsight/ContributeForm'
import ContributeHero from '@/components/addInsight/ContributeHero'
import ContributeSidebar from '@/components/addInsight/ContributeSidebar'




export default function ContributePage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] font-inter">
      <ContributeHero />
      <div className="py-16 lg:py-24 px-6 lg:px-[24px]">
        <div className="max-w-[1302px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <ContributeForm />
            <ContributeSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}