
import { Link } from "react-router-dom";
import ProfileTag from "../components/profileTag";
import SkillTag from "../components/skillTag";
import ResponsiveVideo from "../components/responsiveVideo";

import MakeathonHero from "../assets/makeathonHero.png";
import Makeathon1 from "../assets/makeathon1.png";
import Makeathon2 from "../assets/makeathon2.png";
import Makeathon3 from "../assets/makeathon3.png";

export default function Makeathon() {
    return (
        <div className="relative min-h-screen bg-neutral-100 dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-x-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 min-h-screen p-4 md:p-6 gap-4 md:gap-6">

                <button
                    onClick={() => window.history.back()}
                    className="absolute top-6 left-6 flex items-center justify-center w-12 h-12 rounded-full group"
                >
                    <div className="absolute inset-0 bg-white dark:bg-neutral-900 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <span className="relative text-3xl font-light leading-none">
                        ←
                    </span>
                </button>

                {/* LEFT CONTENT AREA spanning 2 cols | Order 1 (Desktop) / Order 1 (Mobile) */}
                <div className="md:col-span-2 pt-20 flex flex-col gap-6 order-1">

                    {/* Header Group */}
                    <div className="flex flex-col gap-4">
                        {/* Title and Profiles Row */}
                        <div className="flex flex-row items-end justify-between gap-4">
                            <h1 className="text-5xl md:text-7xl font-martiusitalic leading-none text-left">
                                Makeathon
                            </h1>

                            <div className="flex items-center gap-0 -space-x-3 lg:gap-3 lg:space-x-0">
                                <ProfileTag initials="Me" bgClass="bg-white dark:bg-black" href="https://www.linkedin.com/in/noahhett" />
                                <ProfileTag initials="LA" bgClass="bg-indigo-300 dark:bg-indigo-600" href="https://leilaali24.myportfolio.com/" />
                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="relative w-[100vw] h-[2px] bg-black dark:bg-white left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]"></div>

                        {/* Skill Tags Row */}
                        <div className="flex flex-wrap gap-2">
                            <SkillTag text="Branding Design" color="text-blue-700 dark:text-[#F2FF00]" />
                            <SkillTag text="Logo Design" color="text-black dark:text-white" />
                            <SkillTag text="Publicity" color="text-black dark:text-white" />
                        </div>
                    </div>

                    {/* Main Content Body */}
                    <main className="flex flex-col gap-6 mt-4">
                        {/* Video */}
                        <img src={MakeathonHero} alt="Makeathon Hero" />

                        {/* Description Text */}
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-sm text-neutral-800 dark:text-neutral-200">
                                Makeathon is the annual hackathon hosted by Imperial's City and Guilds Union, this branding was created for the 2025 (2nd ever) event
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                My main focus for this project was the logo, despite the space exploration theme, the City and Guilds Union wanted a logo that could be adapted and used for future versions of the event.
                                <br />
                                <br />
                                I create a logo from basic geometric shapes, using the overlap to create the A of makeathon. These shapes can then be rearranged to create different forms and reperesentations, for this event, I made general pictures like pencils and spanners as well as space specific images such as a telescope and rocket.
                            </p>
                        </div>
                    </main>
                </div>

                {/* RIGHT COLUMN: PDF Sidebar | Order 2 (Desktop) / Order 3 (Mobile) */}
                <aside className="md:col-span-1 h-[60vh] md:h-auto z-10 order-3 md:order-2 flex flex-col gap-3">
                    <ResponsiveVideo
                        src="/makeathon.mov"
                        autoPlay={true}
                        loop={true}
                        muted={true} />
                </aside>

                {/* FULL WIDTH BOTTOM ROW: Image Grid | Order 3 (Desktop) / Order 2 (Mobile) */}
                <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 pb-20 order-2 md:order-3">
                    <img src={Makeathon1} alt="Makeathon 1" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                    <img src={Makeathon2} alt="Makeathon 2" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                    <img src={Makeathon3} alt="Makeathon 3" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
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
