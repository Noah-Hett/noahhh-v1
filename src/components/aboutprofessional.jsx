import { useRef } from "react";
import { Link } from "react-router-dom";
import SkillsMarquee from "./SkillsMarquee.jsx";
import ImperialLogo from "../assets/ImperialLogo.svg?react";
import useCircleHover from "../animations/useCircleHover";
import { usePageTransition } from "../animations/circlePageTransition";


import HomeTop from "../assets/aboutProfessionalHomeTop.svg?react";
import HomeTopDark from "../assets/aboutProfessionalHomeTopDark.svg?react";
import HomeBottom from "../assets/aboutProfessionalHomeBottom.svg?react";


export default function About({ isDarkMode }) {
    return (
        <section className="relative flex items-center justify-between h-[130vh] overflow-hidden bg-[linear-gradient(to_bottom,#979797_0%,#F5F5F5_100%)] dark:bg-none dark:bg-black transition-colors duration-300">
            <div className="absolute -top-[2vw] -left-[0.5vw] w-full ">
                <p className="font-display text-[34vw] sm:text-[25vw] md:text-[17.8vw] leading-none whitespace-normal md:whitespace-nowrap text-left md:text-center text-white dark:text-[#979797] transition-colors duration-300">
                    NOAH HETT
                </p>
            </div>

            <div className="absolute top-[35vh] left-[6vw] md:left-[10vw] max-w-[50vw] md:max-w-[40vw] flex flex-col gap-6 z-20">
                <div className="flex flex-col gap-1">
                    <p className="font-sans text-base md:text-2xl font-light text-black dark:text-white leading-tight">
                        <ImperialLogo className="inline-block h-[0.65em] w-auto mr-3 mb-1 fill-current" />
                        Design Engineer, sharpening my skills in all kinds of creative work.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="font-sans text-base md:text-2xl font-light text-black dark:text-white leading-tight">
                        I've got a love for user centred projects specifically through the lenses of branding, UI/UX and product design.
                        <Link
                            to="/allprojects"
                            className="inline-flex items-center gap-1.5 align-middle ml-2 md:ml-3 px-3 py-0.5 md:py-1 border border-white text-white dark:border-[#979797] dark:text-[#979797] rounded-full text-[10px] md:text-sm hover:bg-white hover:text-[#979797] dark:hover:bg-[#979797] dark:hover:text-black transition-all duration-300 whitespace-nowrap"
                        >
                            <GridIcon className="w-2.5 h-2.5 md:w-4 md:h-4 fill-current align-middle" />
                            See All
                        </Link>
                    </p>
                </div>
            </div>

            <NavButton
                to="/"
                TopIcon={isDarkMode ? HomeTopDark : HomeTop}
                BottomIcon={HomeBottom}
                className="group absolute right-[-9vh] md:right-[-10.5vh] top-[50vh] -translate-y-1/2 w-[22vh] md:w-[30vh]"
                data-speed="1.5"
                transitionColor="#000"
                transitionDarkColor="#979797"
            />

            {/* New "Grab my" section - Centered and positioned at the bottom */}
            <div className="absolute top-[60vh] left-1/2 -translate-x-1/2 z-20 inline-flex items-center md:gap-6 gap-4 rounded-full bg-white px-7 py-5 transition-colors dark:bg-neutral-500 whitespace-nowrap">
                <span className="font-geist text-base md:text-2xl font-light text-black dark:text-white">
                    Grab my
                </span>

                <div className="flex items-center gap-3">
                    <a
                        href="/Noah Hett - cv.pdf"
                        download
                        className="group flex items-center justify-center rounded-full bg-black px-5 py-2.5 font-geist text-base md:text-2xl font-medium text-white ring-2 ring-inset ring-neutral-400 transition-all duration-500 hover:bg-white hover:text-black hover:ring-black dark:bg-white dark:text-black dark:ring-neutral-500 dark:hover:bg-black dark:hover:text-white dark:hover:ring-white"
                    >
                        CV
                    </a>

                    <a
                        href="/Noah Hett - portfolio.pdf"
                        download
                        className="group flex items-center justify-center rounded-full bg-black px-5 py-2.5 font-geist text-base md:text-2xl font-medium text-white ring-2 ring-inset ring-neutral-400 transition-all duration-500 hover:bg-white hover:text-black hover:ring-black dark:bg-white dark:text-black dark:ring-neutral-500 dark:hover:bg-black dark:hover:text-white dark:hover:ring-white"
                    >
                        Portfolio
                    </a>
                </div>
            </div>


            <SkillsMarquee />


        </section>
    );
}

function GridIcon({ className }) {
    return (
        <svg viewBox="0 0 8 8" className={className} xmlns="http://www.w3.org/2000/svg">
            <circle cx="1.5" cy="1.5" r="1" />
            <circle cx="4" cy="1.5" r="1" />
            <circle cx="6.5" cy="1.5" r="1" />
            <circle cx="1.5" cy="4" r="1" />
            <circle cx="4" cy="4" r="1" />
            <circle cx="6.5" cy="4" r="1" />
            <circle cx="1.5" cy="6.5" r="1" />
            <circle cx="4" cy="6.5" r="1" />
            <circle cx="6.5" cy="6.5" r="1" />
        </svg>
    );
}

function NavButton({ to, TopIcon, BottomIcon, className, transitionColor, transitionDarkColor, options = {}, ...props }) {
    const containerRef = useRef(null);
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const { transitionTo } = usePageTransition();

    const TopIconComp = TopIcon;
    const BottomIconComp = BottomIcon;

    useCircleHover(containerRef, topRef, bottomRef, options, [TopIconComp, BottomIconComp]);

    const handleClick = (e) => {
        e.preventDefault();
        transitionTo(to, e, { light: transitionColor, dark: transitionDarkColor });
    };

    return (
        <a
            href={to}
            onClick={handleClick}
            ref={containerRef}
            className={className}
            {...props}
        >
            <div className="relative text-black dark:text-white transition-colors duration-300">
                <BottomIconComp ref={bottomRef} className="absolute inset-0 w-full h-full z-0 fill-current" />
                <TopIconComp ref={topRef} className="relative w-full h-auto z-10 fill-current" />
            </div>
        </a>
    );
}