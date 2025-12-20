import { useRef, useEffect, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Github, Mail, Instagram, Check } from 'lucide-react';
import useContactExpand from "../animations/useContactExpand";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);
  const maskRef = useRef(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('noahhett@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  useEffect(() => {
    const mask = maskRef.current;
    const section = sectionRef.current;

    // Check if navigating directly to #contact
    const isDirectNavigation = window.location.hash === '#contact';

    const animation = gsap.fromTo(mask,
      { scaleY: isDirectNavigation ? 0 : 1 }, // Start revealed if direct navigation
      {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        }
      }
    );

    // If directly navigating to contact, ensure ScrollTrigger refreshes
    if (isDirectNavigation) {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => {
        clearTimeout(timer);
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    }

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <section className="absolute inset-0 text-white py-8 md:py-16 px-6 md:px-16 bg-neutral-700 overflow-y-auto md:overflow-visible flex flex-col justify-between items-center">
          <div className="flex-grow flex items-center justify-center w-full">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12 w-full">

              {/* Left Column - Contact Info */}
              <div className="flex flex-col gap-0 md:gap-0">
                <h2 className="text-2xl mb-10 md:mb-12">CONTACT</h2>

                {/* Desktop Layout - Vertical, with flex-1 to match right column height */}
                <div className="hidden md:flex flex-col justify-between flex-1">
                  <div className="flex gap-4">
                    <a href="https://linkedin.com/in/noahhett" target="_blank" rel="noopener noreferrer"
                      className="hover:text-neutral-300 transition-colors">
                      <Linkedin size={30} />
                    </a>
                    <a href="https://github.com/Noah-Hett" target="_blank" rel="noopener noreferrer"
                      className="hover:text-neutral-300 transition-colors">
                      <Github size={30} />
                    </a>
                    <a href="https://cosmos.so/noah.hett" target="_blank" rel="noopener noreferrer"
                      className="hover:text-neutral-300 transition-colors">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="12" cy="5" r="1.5" />
                        <circle cx="12" cy="19" r="1.5" />
                        <circle cx="5" cy="12" r="1.5" />
                        <circle cx="19" cy="12" r="1.5" />
                      </svg>
                    </a>
                  </div>
                  <a href="https://ig.me/m/nh_portfolio_" target="_blank" rel="noopener noreferrer"
                    className="text-lg hover:text-neutral-300 transition-colors">
                    ig.me/m/nh_portfolio_
                  </a>
                  <button
                    onClick={handleEmailClick}
                    className="text-lg hover:text-neutral-300 transition-colors text-left flex items-center transition-fade gap-2">
                    {emailCopied ? (
                      <>
                        Copied
                        <Check size={18} />
                      </>
                    ) : (
                      'noahhett@gmail.com'
                    )}
                  </button>
                </div>

                {/* Mobile Layout - Single Row, email and instagram first */}
                <div className="flex md:hidden gap-4 items-center pb-16 md:pb-0">
                  <a
                    href="mailto:noahhett@gmail.com"
                    className="hover:text-neutral-300 transition-colors">
                    <Mail size={30} />
                  </a>
                  <a href="https://ig.me/m/nh_portfolio_" target="_blank" rel="noopener noreferrer"
                    className="hover:text-neutral-300 transition-colors">
                    <Instagram size={30} />
                  </a>
                  <a href="https://linkedin.com/in/noahhett" target="_blank" rel="noopener noreferrer"
                    className="hover:text-neutral-300 transition-colors">
                    <Linkedin size={30} />
                  </a>
                  <a href="https://github.com/Noah-Hett" target="_blank" rel="noopener noreferrer"
                    className="hover:text-neutral-300 transition-colors">
                    <Github size={30} />
                  </a>
                  <a href="https://cosmos.so/noah.hett" target="_blank" rel="noopener noreferrer"
                    className="hover:text-neutral-300 transition-colors">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="12" cy="5" r="1.5" />
                      <circle cx="12" cy="19" r="1.5" />
                      <circle cx="5" cy="12" r="1.5" />
                      <circle cx="19" cy="12" r="1.5" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="flex flex-col gap-8 md:gap-16 w-full">
                <h2 className="text-2xl">REACH OUT</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField label="NAME" type="text" />
                  <InputField label="EMAIL" type="email" />
                </div>
                <InputField label="MESSAGE" type="text" fullWidth />
              </div>

            </div>
          </div>

          <div className="w-full pt-20 pb-12 text-center">
            <p className="text-xs text-neutral-400">
              Built with React, Tailwind, Vite, and GSAP |
              &copy; {new Date().getFullYear()} Noah Hett. All Rights Reserved.
            </p>
          </div>
        </section>

        <div
          ref={maskRef}
          className="absolute inset-0 z-50 pointer-events-none bg-neutral-100 dark:bg-black"
          style={{ transformOrigin: 'top' }}
        ></div>
      </div>
    </div>
  );
}

function InputField({ label, type, fullWidth }) {
  const fieldRef = useRef(null);
  useContactExpand(fieldRef);

  return (
    <div
      ref={fieldRef}
      className={`relative flex flex-col justify-end ${fullWidth ? "md:col-span-2" : ""}`}
      style={{ height: "4rem" }}
    >
      <span className="label absolute left-0 bottom-0 text-white text-lg z-20 pointer-events-none transition-colors">
        {label}
      </span>
      <input
        type={type}
        className="
          w-full h-10
          bg-transparent 
          text-black
          text-lg
          focus:outline-none
          relative z-30 px-0 pb-1 pl-2
          opacity-0 focus:opacity-100
        "
        placeholder=""
      />
      <div
        className="underline absolute left-0 bottom-0 h-[2px] w-full bg-white z-10"
        style={{ transformOrigin: "bottom" }}
      ></div>
    </div>
  );
}

export default Contact;