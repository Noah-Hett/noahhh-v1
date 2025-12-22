
import { Link } from "react-router-dom";
import ProfileTag from "../components/profileTag";
import SkillTag from "../components/skillTag";
import ResponsiveVideo from "../components/responsiveVideo";

import NOAHHH1 from "../assets/noahhhcom1.png";
import noahhhcomhero from "../assets/noahhhcomHero.png";
import NOAHHH2 from "../assets/noahhhcom2.png";


export default function Noahhh() {
    return (
        <div className="relative min-h-screen bg-neutral-100 dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-x-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 min-h-screen p-4 md:p-6 gap-4 md:gap-6">

                {/* LEFT CONTENT AREA spanning 2 cols | Order 1 (Desktop) / Order 1 (Mobile) */}
                <div className="md:col-span-3 pt-20 flex flex-col gap-6 order-1">

                    {/* Header Group */}
                    <div className="flex flex-col gap-4">
                        {/* Title and Profiles Row */}
                        <div className="flex flex-row items-end justify-between gap-4">
                            <h1 className="text-5xl md:text-7xl font-extralight leading-none text-left">
                                noahhh.com
                            </h1>

                            <div className="flex items-center gap-0 -space-x-3 lg:gap-3 lg:space-x-0">
                                <ProfileTag initials="Me" bgClass="bg-white dark:bg-black" href="https://www.linkedin.com/in/noahhett" />
                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="relative w-[100vw] h-[2px] bg-black dark:bg-white left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]"></div>

                        {/* Skill Tags Row */}
                        <div className="flex flex-wrap gap-2">
                            <SkillTag text="Web Design" color="text-green-700 dark:text-green-400" />
                            <SkillTag text="React" color="text-black dark:text-white" />
                            <SkillTag text="Tailwind" color="text-black dark:text-white" />
                            <SkillTag text="GSAP" color="text-black dark:text-white" />
                        </div>
                    </div>

                    {/* Main Content Body */}
                    <main className="flex flex-col gap-6 mt-4">
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-sm text-neutral-800 dark:text-neutral-200">
                                You're looking at it, my portfolio website built with React, Tailwind CSS, and GSAP.
                            </p>
                        </div>
                        <ResponsiveVideo
                            src="/noahhhcom.mp4"
                            muted={true}
                            autoPlay={true}
                            loop={false}
                            className="w-full h-auto"

                        />

                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                My first web project, and introduction to using both conventional HTML and CSS, as well as the power of React and Tailwind. Working on this site has been a great way to dive in to web development and has let me explore loads of different tools such as GSAP, which I used across the site for animation.
                                <br />
                                <br /> The site uses a 3 page structure: PROFESSIONAL, HOME, and PERSONAL. This is something I prototyped early, it allows me to seperate my work, and hopefully target different users. It also provided a fun development challenge and the integration of the spinning navigation buttons is something I'm really happy with.
                                <br />
                                <br /> The pages were fully designed and prototyped in Figma before I moved to code. Leveraging react, many of the work and about sections are repeatable and easy to update when I need to make changes.

                            </p>
                        </div>

                    </main>
                </div>


                {/* FULL WIDTH BOTTOM ROW: Image Grid | Order 3 (Desktop) / Order 2 (Mobile) */}
                <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 pb-20 order-2 md:order-3">
                    <img src={NOAHHH1} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                    <img src={noahhhcomhero} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                    <img src={NOAHHH2} alt="" className="w-full h-auto bg-neutral-200 dark:bg-neutral-800" />
                </div>

                {/* COPYRIGHT / COPY TEXT SECTION */}
                <div className="col-span-1 md:col-span-3 pb-64 pt-20 flex flex-col gap-4 text-center order-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        &copy; {new Date().getFullYear()} Noah Hett, Dermot Mooney. All Rights Reserved.
                    </p>
                </div>

            </div>
        </div>
    );
}
