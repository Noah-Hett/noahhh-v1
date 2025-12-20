import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function useCircleHover(containerRef, topRef, bottomRef, options = {}, deps = []) {
  const animationsRef = useRef({ play: () => { }, reverse: () => { } });

  const {
    rotateTop = 180,
    rotateBottom = -180,
    scaleBottom = 1.5,
    scaleTop = 0.8
  } = options;

  useEffect(() => {
    if (!containerRef.current || !topRef.current || !bottomRef.current) return;

    const container = containerRef.current;
    const bottom = bottomRef.current;
    const top = topRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      tl.to(bottom, {
        scale: scaleBottom,
        rotation: rotateBottom,
        duration: 0.7,
        ease: "back.out(0.6)",
      }).to(
        top,
        {
          scale: scaleTop,
          rotation: rotateTop,
          duration: 0.7,
          ease: "back.out(0.6)",
        },
        "<"
      );

      animationsRef.current = {
        play: () => tl.play(),
        reverse: () => tl.reverse()
      };

      const onFocus = () => tl.play();
      const onBlur = () => tl.reverse();

      container.addEventListener("mouseenter", animationsRef.current.play);
      container.addEventListener("mouseleave", animationsRef.current.reverse);
      container.addEventListener("focus", onFocus);
      container.addEventListener("blur", onBlur);

      return () => {
        container.removeEventListener("mouseenter", animationsRef.current.play);
        container.removeEventListener("mouseleave", animationsRef.current.reverse);
        container.removeEventListener("focus", onFocus);
        container.removeEventListener("blur", onBlur);
      };
    }, container);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    containerRef,
    topRef,
    bottomRef,
    rotateTop,
    rotateBottom,
    scaleBottom,
    scaleTop,
    ...deps
  ]);

  return {
    play: () => animationsRef.current.play(),
    reverse: () => animationsRef.current.reverse()
  };
}