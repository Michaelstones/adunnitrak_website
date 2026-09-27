import { Server, Shield, Users, FileCheck, Database, Link as LinkIcon } from "lucide-react";

interface AccessCard {
  title: string;
  desc: string;
  icon: React.ElementType;
}

const accessControls: AccessCard[] = [
  { title: "Hosted infrastructure", desc: "Cloud or private hosting structured around client technical, operational and compliance requirements.", icon: Server },
  { title: "Authorised access", desc: "Identity management, multi-factor authentication (MFA) and single sign-on (SSO) integration options.", icon: Shield },
  { title: "Role-based permissions", desc: "View, edit, approve and administer permissions linked to verified operational roles.", icon: Users },
  { title: "Auditability", desc: "Traceable records of data entry, approvals, modifications and system configuration changes.", icon: FileCheck },
  { title: "Data management", desc: "Automated backups, retention policies and controlled procedures for information management.", icon: Database },
  { title: "System integration", desc: "API connections to approved external systems (e.g., ERP, SCADA) based on operational need.", icon: LinkIcon },
];

export default function SecurityDisclaimerSection() {
  return (
    <section className="bg-[#EAEEF6] py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 flex flex-col">
            <span className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] text-[#0F58F5] uppercase">
              Controlled and accountable access
            </span>
            <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0F1424] pt-4">
              Operational intelligence within defined boundaries
            </h2>
            <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72] pt-4 max-w-[862px]">
              Industrial information must be available to the people who need it without becoming unrestricted. AdunniTrak is designed around authorised roles, defined workflow responsibilities and traceable operational activity.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {accessControls.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ECEDEE] shadow-[0px_1px_2px_0px_rgba(11,18,32,0.06)] rounded-[14px] p-6 flex flex-col min-h-[158px]"
            >
              <div className="mb-4 text-[#0F58F5]">
                <item.icon size={24} />
              </div>
              <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#0F1424]">
                {item.title}
              </h3>
              <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525A72] pt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer Callout */}
        <div className="w-full max-w-[1205px] bg-[#EDEFF5] border border-[#ECEDEE] rounded-[16px] p-4 md:p-6 mx-auto">
          <h4 className="font-sans font-semibold text-[16px] leading-[24px] text-[#0F1424]">
            Important qualification
          </h4>
          <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525A72] pt-2">
            Specific hosting, encryption, compliance, integration and cybersecurity requirements must be confirmed during technical assessment. This website does not display certifications or guarantees that have not been formally verified.
          </p>
        </div>
      </div>
    </section>
  );
}
