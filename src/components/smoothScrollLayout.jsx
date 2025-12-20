import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function SmoothScrollLayout({ children }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const smootherRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // 1️⃣ Create ScrollSmoother instance
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1,
      effects: true,
      smoothTouch: 0,
    });

    smootherRef.current = smoother;

    // 2️⃣ Handle Hash Scrolling on Mount / Location Change
    if (location.hash) {
      const targetEl = document.querySelector(location.hash);
      if (targetEl) {
        // Slight delay to ensure layout is ready
        setTimeout(() => {
          smoother.scrollTo(targetEl, true);
          // Refresh ScrollTrigger after scroll position is set
          ScrollTrigger.refresh();
        }, 100);
      }
    } else {
      // Force scroll to top if no hash
      smoother.scrollTop(0);
      // Refresh ScrollTrigger after scroll position is set
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }

    // 3️⃣ Add global click handler for internal links
    const handleLinkClick = (e) => {
      // Check for generic anchor links
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Handle generic hash links "#about"
      if (href.startsWith('#')) {
        e.preventDefault();
        smoother.scrollTo(href, true);
        return;
      }

      // Handle absolute hash links "/#about" IF we are on the home page "/"
      if (href.startsWith('/#') && location.pathname === '/') {
        e.preventDefault();
        const hash = href.substring(1); // remove leading slash, keep #
        smoother.scrollTo(hash, true);
        // Optional: Update URL without reload
        window.history.pushState(null, '', href);
      }
    };

    document.addEventListener('click', handleLinkClick);

    // 4️⃣ Cleanup when component unmounts
    return () => {
      document.removeEventListener('click', handleLinkClick);
      smoother.kill();
    };
  }, [location.pathname, location.hash]); // Re-run if path/hash changes

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}

export default SmoothScrollLayout;

