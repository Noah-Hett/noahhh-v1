import { WorkCard } from "./workcard";
import { Link } from "react-router-dom";

import BuskHero from "../assets/BuskRadioHero.avif";
import GizmophoneHero from "../assets/GizmophoneHero.jpeg";
import ICRSHero from "../assets/icrsHero.avif";
import noahhhcomHero from "../assets/noahhhcomHero.avif";
import DesireBadge from "../assets/desireBadge.svg";

function WorkSection({ columns = 1 }) {
  return (
    <div className="flex flex-col gap-12 px-4 py-8 bg-neutral-100 dark:bg-black">
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
        <WorkCard
          title="GIZMOPHONE"
          titleFont="font-synemono"
          image={GizmophoneHero}
          descriptionItalic="'Rhythm as Rotation'"
          descriptionRegular="Motion and colour based drum machine designed to challenge traditional musical notation."
          hoverColor="#3585FD"
          projectUrl="/gizmophone"
          tags={[
            { text: "Interaction Design", color: "text-[#3585FD] dark:text-blue-400" },
            { text: "Mechatronics", color: "text-black dark:text-white" },
            { text: "C++", color: "text-black dark:text-white" },
          ]}
        />

        <WorkCard
          title="BUSK RADIO"
          titleFont="font-londrina"
          image={BuskHero}
          badge={DesireBadge}
          badgeUrl="https://www.imperial.ac.uk/design-engineering/study/meng/student-prizes/desire-awards/"
          descriptionItalic="'On Air, Anywhere'"
          descriptionRegular="Live music streaming and digital donation service and interface for buskers."
          hoverColor="#FC4E6D"
          projectUrl="/buskradio"
          tags={[
            { text: "UI/UX Design", color: "text-[#FC4E6D] dark:text-[#FC4E6D]" },
            { text: "User Research", color: "text-black dark:text-white" },
            { text: "Figma", color: "text-black dark:text-white" },
          ]}
        />

        <WorkCard
          title="ICRS"
          titleFont="font-londonunderground"
          image={ICRSHero}
          descriptionItalic="Imperial College Robotics Society - Rebrand"
          descriptionRegular="Full refresh of brand identity for 2025/26 academic year, publicity coordination."
          hoverColor="blue"
          projectUrl="/icrs"
          tags={[
            { text: "Branding Design", color: "text-blue-700 dark:text-[#F2FF00]" },
            { text: "Social Media", color: "text-black dark:text-white" },
            { text: "Publicity", color: "text-black dark:text-white" },
          ]}
        />

        <WorkCard
          title="noahhh.com"
          titleFont="font-extralight"
          image={noahhhcomHero}
          descriptionItalic="Personal Website"
          descriptionRegular="Personal website built with React, Tailwind, Vite, and GSAP."
          hoverColor="#046828"
          projectUrl="/noahhh"
          tags={[
            { text: "Web Design", color: "text-green-700 dark:text-green-400" },
            { text: "React", color: "text-black dark:text-white" },
            { text: "Tailwind", color: "text-black dark:text-white" },
            { text: "GSAP", color: "text-black dark:text-white" },
          ]}
        />
      </div>

      <div className="flex justify-center mt-4">
        <Link
          to="/allprojects"
          className="group flex items-center gap-3 px-8 py-4 border-2 border-black dark:border-white rounded-full transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          <div className="grid grid-cols-3 gap-0.5">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-current rounded-sm transition-transform duration-300 group-hover:scale-110" />
            ))}
          </div>
          <span className="text-base md:text-xl ">See All Work</span>
        </Link>
      </div>
    </div>
  );
}

export default WorkSection;