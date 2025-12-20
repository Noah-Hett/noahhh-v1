import { useEffect } from "react";
import { gsap } from "gsap";

export default function useContactExpand(ref) {
  useEffect(() => {
    if (!ref.current) return;

    const underline = ref.current.querySelector(".underline");
    const label = ref.current.querySelector(".label");
    const input = ref.current.querySelector("input");

    const tl = gsap.timeline({ paused: true });

    tl.to(underline, {
      scaleY: 32,
      duration: 0.4,
      ease: "power2.out",
    }, 0)
      .to(label, {
        fontSize: "0.75rem",
        color: "#666666",
        x: 8,
        y: -37,// Adjusted slightly to clear the taller underline
        duration: 0.3,
        ease: "power2.out",
        fontWeight: "medium"
      }, 0);

    const play = () => tl.play();
    const reverse = () => {
      // Only reverse if there's no text and no active focus
      if (input.value.trim() === "" && document.activeElement !== input) {
        tl.reverse();
      }
    };

    const onEnter = () => play();
    const onLeave = () => reverse();
    const onFocus = () => {
      play();
      input.style.opacity = "1"; // Ensure input text is visible when typing
    };
    const onBlur = () => {
      if (input.value.trim() === "") {
        input.style.opacity = "0";
      }
      reverse();
    };

    const node = ref.current;
    node.addEventListener("mouseenter", onEnter);
    node.addEventListener("mouseleave", onLeave);
    input.addEventListener("focus", onFocus);
    input.addEventListener("blur", onBlur);
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") play();
    });

    return () => {
      node.removeEventListener("mouseenter", onEnter);
      node.removeEventListener("mouseleave", onLeave);
      input.removeEventListener("focus", onFocus);
      input.removeEventListener("blur", onBlur);
      tl.kill();
    };
  }, [ref]);
}