import { WorkCard } from "./workcard";
import BuskHero from "../assets/BuskRadioHero.avif";
import GizmophoneHero from "../assets/GizmophoneHero.jpeg";
import ICRSHero from "../assets/icrsHero.avif";
import noahhhcomHero from "../assets/noahhhcomHero.avif";
import bisoleHero from "../assets/bisoleHero.png";
import makeathonHero from "../assets/makeathon4.png";
import sdeHero from "../assets/sdeHero.png";
import DesireBadge from "../assets/desireBadge.svg";
import thermofluidsHero from "../assets/thermofluidsHero.avif";
import ich26Hero from "../assets/ich26Hero.avif";


function WorkGrid({ columns = 1 }) {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-8`}>

            <WorkCard
                titleSize="md:text-4xl text-2xl"
                title="Thermo-Fluids"
                titleFont="font-semibold"
                image={thermofluidsHero}
                descriptionItalic="Automotive + Battery fluid dynamics"
                hoverColor="#F53B66"
                projectUrl="/thermofluids"
                tags={[
                    { text: "Aerodynamics + Fluidics", color: "text-[#F53B66] dark:text-[#F53B66]" }
                ]}
            />


            <WorkCard
                titleSize="md:text-4xl text-2xl"
                title="IC Hack 26"
                titleFont="font-junicodebold"
                image={ich26Hero}
                descriptionItalic="UK's largest student-run hackathon"
                hoverColor="#A337A5"
                projectUrl="/ich26"
                tags={[
                    { text: "Branding Design", color: "text-blue-700 dark:text-[#F2FF00]" }
                ]}
            />


            <WorkCard
                titleSize="md:text-4xl text-2xl"
                title="GIZMOPHONE"
                titleFont="font-synemono"
                image={GizmophoneHero}
                descriptionItalic="'Rhythm as Rotation'"
                hoverColor="#3585FD"
                projectUrl="/gizmophone"
                tags={[
                    { text: "Interaction Design", color: "text-[#3585FD] dark:text-blue-400" }
                ]}
            />

            <WorkCard
                titleSize="md:text-4xl text-2xl"
                title="Airline Seating"
                titleFont="font-bold"
                image={sdeHero}
                descriptionItalic="Sustainable Design Engineering"
                hoverColor="red"
                projectUrl="/sde"
                tags={[
                    { text: "Systems Design", color: "text-red-600 dark:text-red-500" }
                ]}
            />

            <WorkCard
                titleSize="md:text-4xl text-2xl"
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
                titleSize="md:text-4xl text-2xl"
                title="ICRS"
                titleFont="font-londonunderground"
                image={ICRSHero}
                descriptionItalic="Imperial College Robotics Society Rebrand"
                hoverColor="blue"
                projectUrl="/icrs"
                tags={[
                    { text: "Branding Design", color: "text-blue-700 dark:text-[#F2FF00]" }
                ]}
            />
            <WorkCard
                titleSize="md:text-4xl text-2xl"
                title="BUSK RADIO"
                titleFont="font-londrina"
                image={BuskHero}
                badge={DesireBadge}
                badgeUrl="https://www.imperial.ac.uk/design-engineering/study/meng/student-prizes/desire-awards/"
                descriptionItalic="'On Air, Anywhere'"
                hoverColor="#FC4E6D"
                projectUrl="/buskradio"
                tags={[
                    { text: "UI/UX Design", color: "text-[#FC4E6D] dark:text-[#FC4E6D]" }
                ]}
            />

            <WorkCard
                titleSize="md:text-4xl text-2xl"
                title="Makeathon"
                titleFont="font-martiusitalic"
                image={makeathonHero}
                descriptionItalic="Logo, Branding for 'Makeathon' Hackathon"
                projectUrl="/makeathon"
                tags={[
                    { text: "Branding Design", color: "text-blue-700 dark:text-[#F2FF00]" }
                ]}
            />

            <WorkCard
                titleSize="md:text-4xl text-2xl"
                title="BiSole"
                titleFont="font-bold"
                image={bisoleHero}
                descriptionItalic="'Flippaple' Footwear"
                hoverColor="#FF8505"
                projectUrl="/bisole"
                tags={[
                    { text: "Product Design", color: "text-[#FF8505] dark:text-[#FF8505]" }
                ]}
            />









            {/* <WorkCard
                titleSize="md:text-4xl text-2xl"
                title="PDE"
                titleFont="font-bold"
                image={thermofluidsHero}
                descriptionItalic="Product Design Engineering"
                hoverColor="#FF8505"
                projectUrl="/pde"
                tags={[
                    { text: "User Research", color: "text-[#FF8505] dark:text-[#FF8505]" }
                ]}
            />

            <WorkCard
                titleSize="md:text-4xl text-2xl"
                title="PANEL Cal"
                titleFont="font-semibold"
                image={noahhhcomHero}
                descriptionItalic="Task Management Web App"
                hoverColor="#3585FD"
                projectUrl="/panelcalendar"
                tags={[
                    { text: "App Design", color: "text-[#3585FD] dark:text-blue-400" }
                ]}
            /> */}

        </div>
    );
}

export default WorkGrid;
