import { WorkCard } from "./workcard";
import BuskHero from "../assets/BuskRadioHero.png";
import GizmophoneHero from "../assets/GizmophoneHero.jpeg";
import ICRSHero from "../assets/icrsHero.png";
import noahhhcomHero from "../assets/noahhhcomHero.png";
import bisoleHero from "../assets/bisoleHero.png";
import makeathonHero from "../assets/makeathon4.png";
import sdeHero from "../assets/sdeHero.png";
import DesireBadge from "../assets/desireBadge.svg";

function WorkGrid({ columns = 1 }) {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-8`}>
            <WorkCard
                title="GIZMOPHONE"
                titleFont="font-synemono"
                image={GizmophoneHero}
                descriptionItalic="'Rhythm as Rotation'"
                hoverColor="green"
                projectUrl="/gizmophone"
                tags={[
                    { text: "Interaction Design", color: "text-green-700 dark:text-green-400" }
                ]}
            />

            <WorkCard
                title="BUSK RADIO"
                titleFont="font-londrina"
                image={BuskHero}
                badge={DesireBadge}
                badgeUrl="https://www.imperial.ac.uk/design-engineering/study/meng/student-prizes/desire-awards/"
                descriptionItalic="'On Air, Anywhere'"
                hoverColor="pink"
                projectUrl="/buskradio"
                tags={[
                    { text: "UI/UX Design", color: "text-pink-600 dark:text-pink-400" }
                ]}
            />

            <WorkCard
                title="ICRS"
                titleFont="font-londonunderground"
                image={ICRSHero}
                descriptionItalic="Imperial College Robotics Society - Rebrand"
                hoverColor="blue"
                projectUrl="/icrs"
                tags={[
                    { text: "Branding Design", color: "text-blue-700 dark:text-blue-400" }
                ]}
            />

            <WorkCard
                title="noahhh.com"
                titleFont="font-extralight"
                image={noahhhcomHero}
                descriptionItalic="Personal Website"
                hoverColor="#046828"
                projectUrl="/noahhh"
                tags={[
                    { text: "Web Design", color: "text-green-700 dark:text-green-400" },
                ]}
            />

            <WorkCard
                title="BiSole"
                titleFont="font-bold"
                image={bisoleHero}
                descriptionItalic="'Flippaple' Footwear"
                hoverColor="orange"
                projectUrl="/bisole"
                tags={[
                    { text: "Product Design", color: "text-orange-700 dark:text-orange-400" }
                ]}
            />

            <WorkCard
                title={<span className="font-light"><b>S</b>DE</span>}
                titleFont="font-bold"
                image={sdeHero}
                descriptionItalic="Sustainable Airline Seating"
                hoverColor="red"
                projectUrl="/sde"
                tags={[
                    { text: "Systems Design", color: "text-red-600 dark:text-red-400" }
                ]}
            />

            <WorkCard
                title="Makeathon"
                titleFont="font-martiusitalic"
                image={makeathonHero}
                descriptionItalic="Sustainable Airline Seating"
                projectUrl="/makeathon"
                tags={[
                    { text: "Branding Design", color: "text-blue-700 dark:text-blue-400" }
                ]}
            />


        </div>
    );
}

export default WorkGrid;
