import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export function CustomCursor() {
    const cursorRef = useRef(null);
    const cursorInnerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    const xTo = useRef();
    const yTo = useRef();

    // Check for fine pointer (mouse) capability
    useEffect(() => {
        const checkPointer = () => {
            const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
            setIsVisible(isFinePointer);
        };

        checkPointer();
        window.addEventListener('resize', checkPointer);
        return () => window.removeEventListener('resize', checkPointer);
    }, []);

    // Initialize GSAP quickTo for position
    useEffect(() => {
        if (!isVisible || !cursorRef.current) return;

        xTo.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" });
        yTo.current = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });
    }, [isVisible]);

    // Reset cursor state on route change
    useEffect(() => {
        if (!cursorInnerRef.current) return;
        gsap.to(cursorInnerRef.current, {
            width: 20,
            height: 20,
            backgroundColor: '#ffffff',
            borderColor: '#000000',
            duration: 0.3,
            ease: "power2.out"
        });
    }, [location]);

    useEffect(() => {
        if (!isVisible) return;

        const updatePosition = (e) => {
            if (xTo.current && yTo.current) {
                xTo.current(e.clientX);
                yTo.current(e.clientY);
            }
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (!target || !target.closest || !cursorInnerRef.current) return;

            const expandElement = target.closest('[data-cursor-expand]');
            if (expandElement) {
                const color = expandElement.getAttribute('data-cursor-color') || '#a8e6cf';
                gsap.to(cursorInnerRef.current, {
                    width: 55,
                    height: 55,
                    backgroundColor: color,
                    borderColor: '#ffffff',
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        };

        const handleMouseOut = (e) => {
            const target = e.target;
            if (!target || !target.closest || !cursorInnerRef.current) return;

            if (target.closest('[data-cursor-expand]')) {
                gsap.to(cursorInnerRef.current, {
                    width: 20,
                    height: 20,
                    backgroundColor: '#ffffff',
                    borderColor: '#000000',
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        };

        window.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-200 will-change-transform"
            style={{
                // Transform is handled by GSAP for better performance and smoothing
                left: 0,
                top: 0
            }}
        >
            <div
                ref={cursorInnerRef}
                className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border-2 will-change-transform"
                style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#ffffff',
                    borderColor: '#000000',
                }}
            />
        </div>
    );
}

export default CustomCursor;