
import { Link } from "react-router-dom";
import ProfileTag from "../components/profileTag";
import SkillTag from "../components/skillTag";
import ResponsiveVideo from "../components/responsiveVideo";

import BuskRadioHero from "../assets/BuskRadioHero.png";
import BuskRadio3 from "../assets/buskradio3.png";
import BuskRadio2 from "../assets/buskradio2.png";

export default function BuskRadio() {
    return (
        <div className="relative min-h-screen bg-neutral-100 dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-x-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 min-h-screen p-4 md:p-6 gap-4 md:gap-6">

                {/* LEFT CONTENT AREA spanning 2 cols | Order 1 (Desktop) / Order 1 (Mobile) */}
                <div className="md:col-span-2 pt-20 flex flex-col gap-6 order-1">

                    {/* Header Group */}
                    <div className="flex flex-col gap-4">
                        {/* Title and Profiles Row */}
                        <div className="flex flex-row items-end justify-between gap-4">
                            <h1 className="text-5xl md:text-7xl font-londrina leading-none text-left">
                                BUSK RADIO
                            </h1>

                            <div className="flex items-center gap-0 -space-x-3 lg:gap-3 lg:space-x-0">
                                <ProfileTag initials="Me" bgClass="bg-white dark:bg-black" href="https://www.linkedin.com/in/noahhett" />
                                <ProfileTag initials="TS" bgClass="bg-[#C6E9FF] dark:bg-blue-600" href="https://www.linkedin.com/in/timothy-spawforth-80a992332/" />
                                <ProfileTag initials="JB" bgClass="bg-[#C6E9FF] dark:bg-blue-600" href="https://www.linkedin.com/in/joseph-birch-546683278/" />
                                <ProfileTag initials="WP" bgClass="bg-[#C6E9FF] dark:bg-blue-600" href="https://www.linkedin.com/in/wepurcell/" />
                                <ProfileTag initials="MW" bgClass="bg-[#C6E9FF] dark:bg-blue-600" href="https://www.linkedin.com/in/maxim-wolff-0306a128b/" />
                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="relative w-[100vw] h-[2px] bg-black dark:bg-white left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]"></div>

                        {/* Skill Tags Row */}
                        <div className="flex flex-wrap gap-2">
                            <SkillTag text="Interaction Design" color="text-blue-700 dark:text-blue-400" />
                            <SkillTag text="Electronics" color="text-black dark:text-white" />
                            <SkillTag text="C++" color="text-black dark:text-white" />
                        </div>
                    </div>

                    {/* Main Content Body */}
                    <main className="flex flex-col gap-6 mt-4">
                        {/* Video */}
                        <ResponsiveVideo
                            src="/buskradio.mp4"
                            autoPlay={true}
                            loop={false}
                            muted={false} />

                        {/* Description Text */}
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-sm text-neutral-800 dark:text-neutral-200">
                                The Gizmophone is an instrument designed to challenge traditional music theory by implementing a rotating face as a primary interaction.
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Instead of using musical bars, we use rhythmic rotations, with colour representing pitch and timbre. Our musical rests and tempo are controlled by the clock hand (or light) which we rotate ourselves.
                            </p>
                        </div>
                    </main>
                </div>

                {/* RIGHT COLUMN: PDF Sidebar | Order 2 (Desktop) / Order 3 (Mobile) */}
                <aside className="md:col-span-1 h-[60vh] md:h-full z-10 order-3 md:order-2 flex flex-col gap-3">
                    <iframe
                        src="/buskradio.pdf#toolbar=0&navpanes=0"
                        title="Busk Radio PDF"
                        className="w-full flex-1 bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800"
                    />

                    <a
                        href="/buskradio.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 flex items-center justify-center gap-2 bg-white dark:bg-black border-2 border-black dark:border-white text-black dark:text-white font-synemono text-xs hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                    >
                        <span>See Full Project PDF</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </a>
                </aside>

                {/* FULL WIDTH BOTTOM ROW: Image Grid | Order 3 (Desktop) / Order 2 (Mobile) */}
                <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 pb-20 order-2 md:order-3">
                    <img src={BuskRadioHero} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800 object-cover aspect-[297/210]" />
                    <img src={BuskRadio2} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800 object-cover" />
                    <img src={BuskRadio3} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800 object-cover" />
                </div>

                {/* COPYRIGHT / COPY TEXT SECTION */}
                <div className="col-span-1 md:col-span-3 pb-64 pt-20 flex flex-col gap-4 text-center order-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        11Urbs&Spaces.   &copy; {new Date().getFullYear()} Noah Hett, Timothy Spawforth, Joseph Birch, William Purcell, Maxim Wolff.   All Rights Reserved.
                    </p>
                </div>

            </div>
        </div>
    );
}