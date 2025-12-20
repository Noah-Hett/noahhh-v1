import { useRef } from "react";
import { Link } from "react-router-dom";
import useCircleHover from "../animations/useCircleHover";
import { usePageTransition } from "../animations/circlePageTransition";


import HomeTop from "../assets/aboutPersonalHomeTop.svg?react";
import HomeTopDark from "../assets/aboutPersonalHomeTopDark.svg?react";
import HomeBottom from "../assets/aboutPersonalHomeBottom.svg?react";
import MusicPill from "./musicpill";


export default function About({ isDarkMode }) {
    return (
        <section className="relative flex items-center justify-between h-[70vh] overflow-visible z-10">
            <div className="absolute -top-[2vw] -left-[0.5vw] w-full overflow-hidden">
                <p className="font-display text-[34vw] sm:text-[25vw] md:text-[17.8vw] leading-none whitespace-normal md:whitespace-nowrap text-left md:text-center text-white dark:text-[#94BEA3] transition-colors duration-300">
                    NOAH HETT
                </p>
            </div>

            {/* Post-it Note */}
            <div className="absolute top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] z-30 group">
                <div className="bg-[#FFFF88] p-5 md:p-8 aspect-square w-fit min-w-[20vw] shadow-xl flex flex-col justify-center items-center transition-transform hover:scale-105 duration-300">
                    <p className="italic text-base md:text-2xl leading-tight text-black text-center whitespace-pre-line opacity-90">
                        Dark mode sucks{"\n"}fight me :){"\n\n"}
                        <span className="text-xs font-sans">or try it out it took me ages</span>
                    </p>
                </div>
            </div>

            {/* Spotify Display */}
            <div className="absolute right-[4vw] top-[50vh] z-20 rotate-[4deg]">
                <MusicPill isMock={false} />
            </div>

            <NavButton
                to="/"
                TopIcon={isDarkMode ? HomeTopDark : HomeTop}
                BottomIcon={HomeBottom}
                className="group absolute left-[-9vh] md:left-[-10.5vh] top-[55vh] md:top-[55vh] -translate-y-1/2 w-[22vh] md:w-[30vh] z-20"
                data-speed="1.5"
                options={{ rotateTop: -180, rotateBottom: 180 }}
                transitionColor="#046828"
                transitionDarkColor="#94BEA3"
            />
        </section >
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