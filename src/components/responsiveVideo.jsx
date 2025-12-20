import { useRef } from "react";

const ResponsiveVideo = ({ src, autoPlay = false, loop = false, muted = true }) => {
    const videoRef = useRef(null);

    const showControls = () => {
        if (videoRef.current) videoRef.current.controls = true;
    };

    const hideControls = () => {
        if (videoRef.current) videoRef.current.controls = false;
    };

    return (
        <div
            className="relative w-full max-w-4xl mx-auto overflow-hidden"
            onMouseEnter={showControls}
            onMouseLeave={hideControls}
        >
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={src}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                playsInline
            />
        </div>
    );
};

export default ResponsiveVideo;
