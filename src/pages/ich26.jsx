import { Link } from "react-router-dom";
import ProfileTag from "../components/profileTag";
import SkillTag from "../components/skillTag";


import ich1 from "../assets/ich1.avif";
import ich2 from "../assets/ich2.png";
import ich3 from "../assets/ich3.png";

export default function ICHack26() {
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
                <div className="md:col-span-3 pt-20 flex flex-col gap-6 order-1">

                    {/* Header Group */}
                    <div className="flex flex-col gap-4">
                        {/* Title and Profiles Row */}
                        <div className="flex flex-row items-end justify-between gap-4">
                            <h1 className="text-5xl md:text-7xl font-junicodebold leading-none text-left">
                                IC Hack 26
                            </h1>

                            <div className="flex items-center gap-0 -space-x-3 lg:gap-3 lg:space-x-0">
                                <ProfileTag initials="Me" bgClass="bg-white dark:bg-black" href="https://www.linkedin.com/in/noahhett" />
                                <ProfileTag initials="LA" bgClass="bg-[#EABDEA] dark:bg-[#560072]" href="https://leilaali24.myportfolio.com/" />
                                <ProfileTag initials="Team" bgClass="bg-[#FFC1C2] dark:bg-[#B53360]" href="https://ichack.org/" />

                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="relative w-[100vw] h-[2px] bg-black dark:bg-white left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]"></div>

                        {/* Skill Tags Row */}
                        <div className="flex flex-wrap gap-2">
                            <SkillTag text="Branding Design" color="text-blue-700 dark:text-[#F2FF00]" />
                            <SkillTag text="Merch Design" color="text-black dark:text-white" />
                            <SkillTag text="Social Media" color="text-black dark:text-white" />
                        </div>
                    </div>

                    {/* Main Content Body */}
                    <main className="flex flex-col gap-6 mt-4">
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-sm text-neutral-800 dark:text-neutral-200">
                                IC Hack is the largest student run hackathon in the UK. Working as a part of the Merch, Branding and Socials team, we were responsible for the digital branding and advertising of the event as well as all physical media and merch.
                            </p>
                        </div>
                        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src={ich1} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                            <img src={ich3} alt="" className="w-full h-auto" />
                        </div>

                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                I worked on shaping the overall creative direction of IC Hack, collaborating closely with a large team to make sure everything felt cohesive. <br />A big part of this was developing the idea of the three biomes and thinking about how that theme could carry through the entire event experience. From there, I helped translate those concepts into a visual identity, defining things like colour palettes and typography to give the event a distinct feel. I was also involved in deciding what we actually needed to produce to bring that identity to life, both physically and digitally. This included designing assets like lanyards and t-shirts, as well as visuals displayed on screens around the venue. <br /><br />As my first in-person hackathon, it was especially rewarding to see all of this come together in a real space and watch people engage with something I’d helped create.

                            </p>
                        </div>

                        <img src={ich2} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />


                    </main>
                </div>


                {/* FULL WIDTH BOTTOM ROW: Image Grid | Order 3 (Desktop) / Order 2 (Mobile) */}

                {/* COPYRIGHT / COPY TEXT SECTION */}
                <div className="col-span-1 md:col-span-3 pb-64 pt-20 flex flex-col gap-4 text-center order-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        &copy; {new Date().getFullYear()} Noah Hett:    ICH26 Merch, Branding + Socials Team. All Rights Reserved.
                    </p>
                </div>

            </div>
        </div>
    );
}
