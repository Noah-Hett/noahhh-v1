import { useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import { Link } from "react-router-dom";
import useCircleHover from "../animations/useCircleHover";
import { usePageTransition } from "../animations/circlePageTransition";
import NavTag from "./navTag";


import PersonalTop from "../assets/aboutPersonalTop.svg?react";
import PersonalBottom from "../assets/aboutPersonalBottom.svg?react";
import ProfessionalTop from "../assets/aboutProfessionalTop.svg?react";
import ProfessionalTopDark from "../assets/aboutProfessionalTopDark.svg?react";
import ProfessionalBottom from "../assets/aboutProfessionalBottom.svg?react";


export default function About({ isDarkMode }) {
  const proRef = useRef(null);
  const personalRef = useRef(null);
  const timerRef = useRef(null);

  const handleTrigger = (ref) => {
    if (!ref.current) return;

    if (timerRef.current) clearTimeout(timerRef.current);

    ref.current.play();

    timerRef.current = setTimeout(() => {
      ref.current?.reverse();
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section className="relative flex items-center justify-between h-screen overflow-hidden bg-[linear-gradient(to_bottom,#EBE6E6_75%,#F5F5F5_100%)] dark:bg-[linear-gradient(to_bottom,#1A1919_75%,#000000_100%)] transition-colors duration-300 z-10">
      <div className="absolute -top-[2vw] -left-[0.5vw] w-full z-20 pointer-events-none">
        <p className="font-display text-[34vw] sm:text-[25vw] md:text-[17.8vw] leading-none whitespace-normal md:whitespace-nowrap text-left md:text-center text-black dark:text-white transition-colors duration-300">
          NOAH HETT
        </p>
      </div>

      <div className="absolute top-0 right-0 md:right-[19vw] w-[52vw] md:w-[40vw] h-[62vh] md:h-[58vh] bg-white dark:bg-black rounded-bl-[25vw] md:rounded-b-[15vw] flex items-end justify-end md:justify-center pb-12 md:pb-[8vh] text-black dark:text-white transition-colors duration-300 z-10"
      >
        <p className="text-right md:text-center text-base md:text-2xl font-sans font-light px-8 leading-tight">
          Hey, I'm Noah, a <span className="font-bold">London based</span><br />
          <span className="italic font-light">Design Engineer</span><br />
          and visual communication<br />
          obsessive
        </p>
      </div>

      <div className="absolute bottom-[15vh] md:bottom-[20vh] left-[10vw] md:left-[22vw] flex flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-2">
          <NavTag
            text="Go Pro   ←"
            bgColor="bg-white dark:bg-black"
            textColor="text-black dark:text-white"
            onClick={() => handleTrigger(proRef)}
            onFocus={() => handleTrigger(proRef)}
            onBlur={() => proRef.current?.reverse()}
          />
          <NavTag
            text="Get Personal   →"
            bgColor="bg-[#046828]"
            textColor="text-white"
            onClick={() => handleTrigger(personalRef)}
            onFocus={() => handleTrigger(personalRef)}
            onBlur={() => personalRef.current?.reverse()}
          />
        </div>
        <p className="text-black dark:text-white font-sans font-light text-base md:text-2xl pl-2">
          Or go click on some<br />of my projects below
        </p>
      </div>

      <NavButton
        ref={proRef}
        to="/professional"
        TopIcon={isDarkMode ? ProfessionalTopDark : ProfessionalTop}
        BottomIcon={ProfessionalBottom}
        className="group absolute left-[-9vh] md:left-[-10.5vh] top-[46%] md:top-[53%] -translate-y-1/2 w-[22vh] md:w-[30vh] z-30"
        data-speed="1.5"
        options={{ rotateTop: -180, rotateBottom: 180 }}
        transitionColor="#000"
        transitionDarkColor="#fff"
      />

      <NavButton
        ref={personalRef}
        to="/personal"
        TopIcon={PersonalTop}
        BottomIcon={PersonalBottom}
        className="group absolute right-[-9vh] md:right-[-10.5vh] top-[65%] md:top-[53%] -translate-y-1/2 w-[22vh] md:w-[30vh] z-30"
        textColor="text-[#046828]"
        data-speed="1.5"
        transitionColor="#046828"
        transitionDarkColor="#046828"
      />
    </section>
  );
}

const NavButton = forwardRef(({ to, TopIcon, BottomIcon, className, textColor, transitionColor, transitionDarkColor, options = {}, ...props }, ref) => {
  const containerRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const { transitionTo } = usePageTransition();

  const TopIconComp = TopIcon;
  const BottomIconComp = BottomIcon;

  const { play, reverse } = useCircleHover(containerRef, topRef, bottomRef, options, [TopIconComp, BottomIconComp]);

  useImperativeHandle(ref, () => ({
    play,
    reverse
  }));

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
      <div className={`relative ${textColor || 'text-black dark:text-white'} transition-colors duration-300`}>
        <BottomIconComp ref={bottomRef} className="absolute inset-0 w-full h-full z-0 fill-current" />
        <TopIconComp ref={topRef} className="relative w-full h-auto z-10 fill-current" />
      </div>
    </a>
  );
});

NavButton.displayName = "NavButton";