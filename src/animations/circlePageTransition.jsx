// PageTransition.jsx
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { TransitionContext, usePageTransition } from './usePageTransition';

// Re-export the hook for convenience
export { usePageTransition };

export function PageTransitionProvider({ children, defaultColor = "#000", defaultDarkColor = "#fff" }) {
    const overlayRef = useRef(null);
    const contentRef = useRef(null);
    const navigate = useNavigate();
    const isTransitioning = useRef(false);

    const transitionTo = (path, event, colors) => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;

        const x = event?.clientX ?? window.innerWidth / 2;
        const y = event?.clientY ?? window.innerHeight / 2;

        const maxDistance = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        const tl = gsap.timeline({
            onComplete: () => {
                gsap.set(contentRef.current, { clearProps: "all" });
                gsap.set(overlayRef.current, { clearProps: "all" });
                isTransitioning.current = false;
            }
        });

        // 1. Set the CSS variables for Tailwind to use
        tl.set(overlayRef.current, {
            "--tp-bg": colors?.light || defaultColor,
            "--tp-dark-bg": colors?.dark || defaultDarkColor,
            opacity: 1,
            zIndex: 50,
            clipPath: `circle(0px at ${x}px ${y}px)`,
        })
            // 2. Grow Overlay
            .to(overlayRef.current, {
                clipPath: `circle(${maxDistance}px at ${x}px ${y}px)`,
                duration: 0.5,
                ease: "power2.inOut"
            })
            .call(() => {
                navigate(path);
                gsap.set(contentRef.current, {
                    position: 'relative',
                    zIndex: 60,
                    clipPath: `circle(0px at ${x}px ${y}px)`
                });
            })
            .to({}, { duration: 0.1 })
            // 3. Grow Content
            .to(contentRef.current, {
                clipPath: `circle(${maxDistance}px at ${x}px ${y}px)`,
                duration: 0.6,
                ease: "power2.out"
            });
    };

    return (
        <TransitionContext.Provider value={{ transitionTo }}>
            {/* We use Tailwind arbitrary values to link the 
          background color to our CSS variables 
      */}
            <div
                ref={overlayRef}
                className="fixed inset-0 pointer-events-none bg-[var(--tp-bg)] dark:bg-[var(--tp-dark-bg)]"
                style={{ opacity: 0 }}
            />
            <div ref={contentRef} className="relative w-full">
                {children}
            </div>
        </TransitionContext.Provider>
    );
}

export function TransitionLink({ to, color, darkColor, children, className, ...props }) {
    const { transitionTo } = usePageTransition();

    return (
        <a
            href={to}
            className={className}
            onClick={(e) => {
                e.preventDefault();
                transitionTo(to, e, { light: color, dark: darkColor });
            }}
            {...props}
        >
            {children}
        </a>
    );
}