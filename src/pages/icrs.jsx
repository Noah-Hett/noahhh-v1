
import { Link } from "react-router-dom";
import ProfileTag from "../components/profileTag";
import SkillTag from "../components/skillTag";

import ICRS1 from "../assets/icrs1.png";
import ICRS2 from "../assets/icrs2.png";
import ICRS3 from "../assets/icrs3.png";
import ICRS4 from "../assets/icrs4.png";
import ICRS5 from "../assets/icrs5.png";
import ICRS6 from "../assets/icrs6.png";
import ICRS7 from "../assets/icrs7.png";
import ICRS8 from "../assets/icrs8.png";
import ICRS9 from "../assets/icrs9.png";

export default function ICRS() {
    return (
        <div className="relative min-h-screen bg-neutral-100 dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-x-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 min-h-screen p-4 md:p-6 gap-4 md:gap-6">

                {/* LEFT CONTENT AREA spanning 2 cols | Order 1 (Desktop) / Order 1 (Mobile) */}
                <div className="md:col-span-2 pt-20 flex flex-col gap-6 order-1">

                    {/* Header Group */}
                    <div className="flex flex-col gap-4">
                        {/* Title and Profiles Row */}
                        <div className="flex flex-row items-end justify-between gap-4">
                            <h1 className="text-5xl md:text-7xl font-londonunderground leading-none text-left">
                                ICRS
                            </h1>

                            <div className="flex items-center gap-0 -space-x-3 lg:gap-3 lg:space-x-0">
                                <ProfileTag initials="Me" bgClass="bg-white dark:bg-black" href="https://www.linkedin.com/in/noahhett" />
                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="relative w-[100vw] h-[2px] bg-black dark:bg-white left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]"></div>

                        {/* Skill Tags Row */}
                        <div className="flex flex-wrap gap-2">
                            <SkillTag text="Branding Design" color="text-blue-700 dark:text-[#F2FF00]" />
                            <SkillTag text="Social Media" color="text-black dark:text-white" />
                            <SkillTag text="Publicity" color="text-black dark:text-white" />
                        </div>
                    </div>

                    {/* Main Content Body */}
                    <main className="flex flex-col gap-6 mt-4">
                        <img
                            src={ICRS1}
                            alt=""
                            className="w-full h-auto" />

                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-sm text-neutral-800 dark:text-neutral-200">
                                Imperial College Robotics Society (ICRS) is one of the largest student-run societies at Imperial. I became publicity officer for the start of the 2025/2026 year, and decided to that a full refresh of the brand identity was would be a good way to start.
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                The main goals of the project were to make the society more recognisable and suited for digital communication, while not compromising on the fun and student run feel. <br /> This rebrand included edits to the logo, a new colour palette, typeface and set graphic style. I also created a new set of assets that could be used across both social media and print media. <br /> Since the rebrand, I have also been responsible for the publicity of the society, which has included posters and advertisements for events and activities (below) and social media posts on <a href="https://www.instagram.com/icrobotics" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:font-semibold duration-300">instagram</a>.
                            </p>
                        </div>
                    </main>
                </div>

                {/* RIGHT COLUMN: PDF Sidebar | Order 2 (Desktop) / Order 3 (Mobile) */}
                <aside className="md:col-span-1 h-[60vh] md:h-full z-10 order-3 md:order-2 flex flex-col gap-3">
                    <iframe
                        src="/icrs.pdf#toolbar=0&navpanes=0"
                        title="ICRS PDF"
                        className="w-full flex-1 bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800"
                    />

                    <a
                        href="/icrs.pdf"
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
                <div className="col-span-1 md:col-span-3 grid grid-cols-4 md:grid-cols-8 gap-4 pb-20 order-2 md:order-3">
                    <img src={ICRS2} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                    <img src={ICRS3} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                    <img src={ICRS4} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                    <img src={ICRS5} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                    <img src={ICRS6} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                    <img src={ICRS7} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                    <img src={ICRS8} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                    <img src={ICRS9} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                </div>

                {/* COPYRIGHT / COPY TEXT SECTION */}
                <div className="col-span-1 md:col-span-3 pb-64 pt-20 flex flex-col gap-4 text-center order-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        &copy; {new Date().getFullYear()} Noah Hett. All Rights Reserved.
                    </p>
                </div>

            </div>
        </div>
    );
}