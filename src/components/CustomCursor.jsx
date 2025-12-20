import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export function CustomCursor() {
    const cursorRef = useRef(null);
    const cursorInnerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [hoverColor, setHoverColor] = useState('#a8e6cf');
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    // GSAP quickTo refs for performance
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

    // Initialize GSAP quickTo
    useEffect(() => {
        if (!isVisible || !cursorRef.current) return;

        xTo.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" });
        yTo.current = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });
    }, [isVisible]);

    // Reset cursor state on route change
    useEffect(() => {
        setIsHovering(false);
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
            if (!target || !target.closest) return;

            const expandElement = target.closest('[data-cursor-expand]');
            if (expandElement) {
                setIsHovering(true);
                const color = expandElement.getAttribute('data-cursor-color');
                if (color) {
                    setHoverColor(color);
                }
            }
        };

        const handleMouseOut = (e) => {
            const target = e.target;
            if (!target || !target.closest) return;

            if (target.closest('[data-cursor-expand]')) {
                setIsHovering(false);
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
                className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ease-out"
                style={{
                    width: isHovering ? '55px' : '20px',
                    height: isHovering ? '55px' : '20px',
                    backgroundColor: isHovering ? hoverColor : '#ffffff',
                    borderColor: isHovering ? '#ffffff' : '#000000',
                }}
            />
        </div>
    );
}

export default CustomCursor;