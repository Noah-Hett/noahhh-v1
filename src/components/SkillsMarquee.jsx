import NavTag from "./navTag";

const SkillsMarquee = () => {
  const skills = [
    "React",
    "Tailwind",
    "GSAP",
    "Figma",
    "Adobe Suite",
    "Fusion 360",
    "Python",
    "C++",
    "Figma Again",
  ];

  return (
    <div className="absolute left-0 w-full overflow-hidden pointer-events-none top-[80vh]">
      <div className="relative flex gap-4 py-2">
        {/* First set of skills */}
        <div className="flex gap-4 animate-marquee shrink-0 pointer-events-auto">
          {skills.map((skill, index) => (
            <NavTag key={`skill-1-${index}`} text={skill} />
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex gap-4 animate-marquee shrink-0 pointer-events-auto" aria-hidden="true">
          {skills.map((skill, index) => (
            <NavTag key={`skill-2-${index}`} text={skill} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default SkillsMarquee;