import { Link } from "react-router-dom";
import ProfileTag from "../components/profileTag";
import SkillTag from "../components/skillTag";

import thermo1_1 from "../assets/thermo1-1.png";
import thermo1_2 from "../assets/thermo1-2.png";
import thermo2_1 from "../assets/thermo2-1.png";
import thermo2_2 from "../assets/thermo2-2.png";

export default function Thermofluids() {
    return (
        <div className="relative min-h-screen bg-neutral-100 dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-x-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 min-h-screen p-4 md:p-6 gap-4 md:gap-6">

                {/* LEFT CONTENT AREA spanning 2 cols | Order 1 (Desktop) / Order 1 (Mobile) */}
                <button
                    onClick={() => window.history.back()}
                    className="absolute top-6 left-6 flex items-center justify-center w-12 h-12 rounded-full group"
                >
                    <div className="absolute inset-0 bg-white dark:bg-neutral-900 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <span className="relative text-3xl font-light leading-none">
                        ←
                    </span>
                </button>

                <div className="md:col-span-2 pt-20 flex flex-col gap-6 order-1">

                    {/* Header Group */}
                    <div className="flex flex-col gap-4">
                        {/* Title and Profiles Row */}
                        <div className="flex flex-row items-end justify-between gap-4">
                            <h1 className="text-5xl md:text-7xl font-semibold leading-none text-left">
                                Thermo-Fluids
                            </h1>

                            <div className="flex items-center gap-0 -space-x-3 lg:gap-3 lg:space-x-0">
                                <ProfileTag initials="Me" bgClass="bg-white dark:bg-black" href="https://www.linkedin.com/in/noahhett" />
                                <ProfileTag initials="LA" bgClass="bg-[#F53B6690] dark:bg-[#F53B66]" href="https://leilaali24.myportfolio.com/" />
                                <ProfileTag initials="RW" bgClass="bg-[#d9d9d9] dark:bg-[#363636]" href="https://www.linkedin.com/in/rhyswijeratne/" />
                                <ProfileTag initials="EMG" bgClass="bg-[#1E3CFF90] dark:bg-[#1E3CFF]" href="https://www.linkedin.com/in/eliza-mae-garvey-42036425b/" />
                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="relative w-[100vw] h-[2px] bg-black dark:bg-white left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]"></div>

                        {/* Skill Tags Row */}
                        <div className="flex flex-wrap gap-2">
                            <SkillTag text="Automotive Aerodynamics" color="text-[#F53B66] dark:text-[#F53B66]" />
                            <SkillTag text="Pipe Fluidics" color="text-black dark:text-white" />
                            <SkillTag text="CFD" color="text-black dark:text-white" />
                            <SkillTag text="Wind Tunnel Testing" color="text-black dark:text-white" />
                        </div>
                    </div>

                    {/* Main Content Body */}
                    <main className="flex flex-col gap-6 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src={thermo1_1} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                            <img src={thermo1_2} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                        </div>

                        {/* Description Text */}
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-sm text-neutral-800 dark:text-neutral-200 font-semibold">
                                Part 1: Solo Development of Car Concept and Battery Cooling Plate Design
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                I began by researching the estate car category to understand user priorities, identifying reduced drag and improved stability as key goals. I then analysed existing models and literature to inform my own design direction.
                                <br /><br />
                                This led to a few core features, particularly a tapered rear and double-layer separation surfaces to better control rear airflow and wake size. I used CFD to test both a baseline model and these iterations, ultimately achieving a drag coefficient of 0.286.
                                <br /><br />
                                Alongside this, I also designed a battery cooling plate, taking a more experimental approach inspired by “wing-vein” structures and the way blood flows through animal wings to improve temperature uniformity.
                            </p>
                        </div>
                    </main>
                </div>

                {/* RIGHT COLUMN: PDF Sidebar | Order 2 */}
                <aside className="md:col-span-1 h-[60vh] md:h-[calc(100vh-2rem)] z-10 order-2 flex flex-col gap-3 md:sticky md:top-6">
                    <iframe
                        src="/thermos1.pdf#toolbar=0&navpanes=0"
                        title="thermofluids PDF 1"
                        className="w-full flex-1 bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800"
                    />

                    <a
                        href="/thermos1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 flex items-center justify-center gap-2 bg-white dark:bg-black border-2 border-black dark:border-white text-black dark:text-white font-synemono text-xs hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors shrink-0"
                    >
                        <span>See Part 1 PDF</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </a>
                </aside>

                {/* SECOND ROW: PDF Sidebar (Left) | Order 3 */}
                <aside className="md:col-span-1 h-[60vh] md:h-[calc(100vh-2rem)] z-10 order-4 md:order-3 flex flex-col gap-3 md:mt-12 md:sticky md:top-6">
                    <iframe
                        src="/thermos2.pdf#toolbar=0&navpanes=0"
                        title="Thermofluids PDF 2"
                        className="w-full flex-1 bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800"
                    />

                    <a
                        href="/thermos2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 flex items-center justify-center gap-2 bg-white dark:bg-black border-2 border-black dark:border-white text-black dark:text-white font-synemono text-xs hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors shrink-0"
                    >
                        <span>See Part 2 PDF</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </a>
                </aside>

                {/* SECOND ROW: 2 Photos and Text (Right) | Order 4 */}
                <div className="md:col-span-2 flex flex-col gap-6 order-3 md:order-4 md:mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src={thermo2_1} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                        <img src={thermo2_2} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                    </div>

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-sm text-neutral-800 dark:text-neutral-200 font-semibold">
                            Part 2: Group Project - Wind Tunnel Testing of Car Concept, and Development of Battery Cooling Plate
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            We worked as a group, combining one car design and one battery system from the team. We selected a pickup truck design and physically protyped it using non-planar (ZAA) 3D printing. We then tested it in a wind tunnel, using attached strings to visualise airflow, alongside a Python script to track their deflection and vibration amplitude as a way of analysing flow behaviour.
                            <br /><br />
                            My battery design was selected for further development. My teammates worked to build it out in CAD using a highly parameterised and customisable approach. It was then run through CFD simulations to evaluate flow, pressure, and cooling performance, helping us identify key behaviours in the system. One of the main identified areas was the initial pipe-split, which was then re-designed to improve flow distribution and cooling performance.
                        </p>
                    </div>
                </div>

                {/* COPYRIGHT / COPY TEXT SECTION */}
                <div className="col-span-1 md:col-span-3 pb-64 pt-20 flex flex-col gap-4 text-center order-5">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        &copy; {new Date().getFullYear()} Noah Hett, Leila Ali, Rhys Wijeratne, and Eliza-Mae Garvey. All Rights Reserved.
                    </p>
                </div>

            </div>
        </div>
    );
}

