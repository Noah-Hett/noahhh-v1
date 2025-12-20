import { useEffect, useState, useRef } from "react";
import { Disc3 } from "lucide-react";

export default function MusicPill() {
    const [data, setData] = useState(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    const containerRef = useRef(null);
    const textRef = useRef(null);

    // Toggle to false when ready for real API
    const isMock = false;

    useEffect(() => {
        if (isMock) {
            setTimeout(() => {
                setData({
                    title: "Long Song Title ",
                    artist: "Music Artist",
                    link: "https://spotify.com",
                    isPlaying: true
                });
            }, 500);
        } else {
            fetch("/api/spotify")
                .then(res => res.json())
                .then(setData)
                .catch(err => console.error("Spotify API Error:", err));
        }
    }, [isMock]);

    // Detect overflow properly
    useEffect(() => {
        const checkOverflow = () => {
            if (containerRef.current && textRef.current) {
                setIsOverflowing(
                    textRef.current.scrollWidth >
                    containerRef.current.offsetWidth
                );
            }
        };

        checkOverflow();
        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, [data]);

    if (!data) return null;

    const fullText = `${data.title} — ${data.artist}`;

    return (
        <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[45%] right-[15%] z-30 flex items-center px-3 pr-5 py-2 md:py-3 bg-white dark:bg-pink-500 border-[3px] border-black dark:border-white rounded-full shadow-[5px_5px_0px_black] dark:shadow-[5px_5px_0px_white] hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none transition-all duration-200 group no-underline"
        >
            <Disc3
                className={`w-7 h-7 md:w-10 md:h-10 flex-shrink-0 text-black dark:text-white bg-white dark:bg-pink-500 z-10
                    ${data.isPlaying
                        ? "animate-spin [animation-duration:3s]"
                        : "opacity-70"
                    }`}
                strokeWidth={1.3}
            />

            <div
                ref={containerRef}
                className="overflow-hidden ml-2 md:ml-3 max-w-[30vw] relative"
                style={{
                    maskImage: isOverflowing
                        ? "linear-gradient(to right, black 80%, transparent 100%)"
                        : "none",
                    WebkitMaskImage: isOverflowing
                        ? "linear-gradient(to right, black 80%, transparent 100%)"
                        : "none"
                }}
            >
                <div
                    ref={textRef}
                    className={`inline-flex items-center whitespace-nowrap font-display text-lg md:text-2xl text-black dark:text-white
                        ${isOverflowing ? "animate-marquee" : ""}
                    `}
                >
                    <span className="px-1">{fullText}</span>

                    {isOverflowing && (
                        <span className="px-12">{fullText}</span>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    animation: marquee 12s linear infinite;
                }
            `}</style>
        </a>
    );
}
