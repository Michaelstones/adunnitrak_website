import { Quote } from "lucide-react";
import Image from "next/image";

interface PrincipleCard {
    id: string;
    number: string;
    title: string;
    body: string;
}

const PRINCIPLE_CARDS: PrincipleCard[] = [
    {
        id: "p-3",
        number: "Founder and Chief Executive Officer\nAdunniTrak Solutions Inc.",
        title: "Agboola Adio Shonekan, C.Tech.",
        body: "Industrial technology should adapt to the way organisations operate — not require organisations to adapt to the technology.",
    },
];

export default function AboutPrinciples2() {
    return (
        <section className="bg-[#071A33] py-16 lg:py-24">
            <div className="max-w-[1280px] w-full mx-auto px-5 md:px-8">

                {/* Natural 7-col / 5-col split without forced start positions */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Text Block (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <p className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#3FC3EE] font-inter">
                            A message from the founder
                        </p>

                        <h2 className="mt-4 font-inter font-extrabold text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] tracking-[-0.01em] text-white">
                            Preserving operational knowledge and turning it into action
                        </h2>

                        <div className="mt-6 flex flex-col gap-4 text-[16px] leading-[26px] font-normal text-[#D4D4D4] font-inter">
                            <p>
                                Working within plant operations gave me a close view of how much valuable knowledge exists in operators, technicians, supervisors and engineering teams.
                            </p>
                            <p>
                                That knowledge is built over years of observing equipment behaviour, responding to failures, completing repairs, managing production pressures and finding practical ways to keep operations moving. Yet much of it may remain within conversations, handwritten notes, personal experience and disconnected records.
                            </p>
                            <p>
                                When information is not connected, teams can struggle to understand what happened, what action was taken, what was learned and how a similar incident should be addressed in the future. When experienced employees retire, transfer or leave, important operational knowledge can also leave with them.
                            </p>
                            <p>
                                AdunniTrak was created to help address this challenge — not by replacing the experience and judgement of industrial professionals, but by giving them a connected system in which operational activity, decisions and confirmed learning can be captured, shared and retained.
                            </p>
                        </div>
                    </div>

                    {/* Right Image & Quote Block (5 cols) */}
                    <div className="lg:col-span-5 w-full flex flex-col gap-6">

                        {/* Flawlessly responsive image wrapper */}
                        <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[450px] rounded-[14px] bg-[#050F1E] border border-white/10 overflow-hidden shadow-md">
                            <Image
                                src="/ceoburst.png"
                                alt="Agboola Adio Shonekan, CEO"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>

                        {/* Quote Card - Allowed to span full width of the column */}
                        <div className="flex flex-col gap-4 bg-[#192F5D] p-[30px] rounded-[14px]">
                            {PRINCIPLE_CARDS.map((card) => (
                                <article
                                    key={card.id}
                                    id={card.id}
                                    className="flex flex-col gap-4  "
                                >
                                    <Quote className="text-[#0F58F5] w-6 h-6" />

                                    <div className="flex flex-col gap-1">
                                        <p className="text-[14px] leading-[22px] font-medium text-white font-inter">
                                            "{card.body}"
                                        </p>
                                        <span className="text-[12px] leading-[16px] tracking-[0.06em] font-bold uppercase text-[#D4D4D4] font-inter whitespace-pre-line">
                                            {card.number}
                                        </span>
                                        <h4 className="text-[16px] leading-[24px] font-bold text-[#D4D4D4] font-inter">
                                            {card.title}
                                        </h4>
                                    </div>


                                </article>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}