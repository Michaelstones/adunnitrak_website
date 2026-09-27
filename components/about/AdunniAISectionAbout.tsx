import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";



export default function AdunniAISectionAbout() {
    return (
        <section className="bg-[#EAEEF6] py-[96px] px-4 lg:px-[64px]">
            <div className=" mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-4 md:gap-y-12">
                    {/* Left — span 6 */}
                    <div className="md:col-span-6 flex flex-col">
                        <p className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.06em] uppercase text-[#0F58F5]">
                            Our approach to artificial intelligence
                        </p>
                        <h2 className="font-sans font-extrabold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] tracking-[-0.01em] text-[#0F1424] pt-4 max-w-[642px]">
                            AI should strengthen professional judgement
                        </h2>
                        <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72] pt-6 max-w-[642px]">
                            We believe industrial AI should operate within relevant and authorised context. Adunni AI is designed to help users retrieve operational knowledge, identify similar events, support structured investigations, recognise recurring patterns and generate clear operational or executive summaries.
                        </p>

                        <p className="font-sans font-normal text-[14px] leading-[22px] text-[#525A72] pt-6 max-w-[642px]">
                            It is intended to support — not replace — the experience, judgement and authority of industrial professionals.
                        </p>


                        <div className="pt-8">
                            <Link
                                href="/adunni-ai"
                                className="inline-flex items-center justify-center bg-[#0F58F5] rounded-lg py-4 px-6 font-sans font-bold text-[16px] text-white leading-none hover:opacity-90 transition-opacity"
                            >
                                Explore Adunni AI
                            </Link>
                        </div>
                    </div>

                    {/* Right — span 5, justifySelf start */}
                    <div className="md:col-span-5 md:col-start-8 flex flex-col justify-self-start">
                        {/* Image: 633.63×475.22 */}
                        <div className="w-full max-w-[634px] aspect-[4/3] shrink-0 overflow-hidden ">
                            <Image
                                src="/images/adunni-ai-chat.png"
                                alt="Adunni AI interface"
                                width={1268}
                                height={951}
                                className="w-full h-full bg-none object-cover block"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
