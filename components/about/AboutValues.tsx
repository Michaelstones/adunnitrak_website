/* ── AboutValues — #3813:23450
   #EAEEF6 bg, py-24
   Layout:
   - Top: 8-col heading block (EL-5a3c45f3 = span 8)
   - Below (48px gap): grid of cards rows (150px + 170px rows, 12 cols, gap 16px)
   - After second margin: left-bordered blue quote block (#0F58F5 left border, padding left 24px)  */

interface ValueCard {
  id: string;
  overline?: string;
  title: string;
  body: string;
  colSpan: number;
}

const VALUE_CARDS: ValueCard[] = [
  {
    id: "v-1",
    title: "Operations first",
    body: "Every feature in AdunniTrak is designed from the perspective of the person on the plant floor — not the IT department or the boardroom.",
    colSpan: 4,
  },
  {
    id: "v-2",
    title: "Configured, not customised",
    body: "We configure our platform around your terminology, workflows and equipment hierarchy. No lengthy software development cycles, no generic bolt-ons.",
    colSpan: 4,
  },
  {
    id: "v-3",
    title: "Data you can trust",
    body: "We build audit trails into everything. Every record, every action, every reading — time-stamped, attributed and immutable.",
    colSpan: 4,
  },
  {
    id: "v-4",
    title: "Intelligence, not just reporting",
    body: "AdunniTrak surfaces patterns, anomalies and risks — not just tables and charts. Our AI layer is built to prompt better decisions, not just generate more reports.",
    colSpan: 4,
  },
  {
    id: "v-5",
    title: "Built for African conditions",
    body: "Low-bandwidth mode, offline capability, and Naira billing — we engineer for the reality of Nigerian and West African industrial infrastructure.",
    colSpan: 4,
  },
  {
    id: "v-6",
    title: "Transparent and accountable",
    body: "No hidden fees. No lock-in. No black-box algorithms. We believe our clients should always understand exactly what they are paying for and why.",
    colSpan: 4,
  },
];

const BLUE_QUOTE =
  "The objective is not to force an organisation to abandon the practical knowledge that makes its operation unique. The objective is to connect that knowledge, make it accessible to authorised teams and strengthen how operational decisions are supported.";

export default function AboutValues() {
  return (
    <section className="bg-[#EAEEF6] py-[96px]">
      <div className="w-full max-w-[1366px] mx-auto px-5 lg:px-[32px]">

        {/* Heading block — 8 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-[16px] mb-6">
          <div className="lg:col-span-8 flex flex-col gap-0">
            <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#0F58F5] font-inter">
              Our product philosophy
            </p>
            <h2 className="mt-[16px] font-inter font-extrabold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.01em] text-[#0B1220] max-w-[752px] whitespace-nowrap">
              Technology should reflect the operation it supports
            </h2>
            <p className="mt-[16px] font-inter font-normal text-[16px] leading-[24px] text-[#5B6472] max-w-[800px]">Industrial facilities differ in their equipment, workflows, priorities, terminology, responsibilities and operating conditions. Our approach is to understand those differences and configure AdunniTrak around the client's operational environment.</p>
          </div>
        </div>

        {/* Value cards grid — mt-12 (48px) */}
        <div className="mt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {VALUE_CARDS.map((card) => (
            <article
              key={card.id}
              id={card.id}
              className="flex flex-col gap-[8px] rounded-[14px] border border-[#ECEDEE] bg-white p-[24px] shadow-[0px_1px_2px_0px_rgba(11,18,32,0.06)]"
            >
              <h3 className="text-[16px] leading-[24px] font-bold text-[#0B1220] font-inter">
                {card.title}
              </h3>
              <p className="text-[14px] leading-[22px] font-normal text-[#5B6472] font-inter">
                {card.body}
              </p>
            </article>
          ))}
        </div>

        {/* Left-bordered blue quote block — mt-12 (48px) */}
        <div className="mt-[48px] border-l-[2px] border-[#0F58F5] pl-[24px]">
          <blockquote className="text-[16px] font-bold  leading-[26px]  text-[#0B1220] font-inter w-full">
            &ldquo;{BLUE_QUOTE}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
