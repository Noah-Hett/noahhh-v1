import AboutPersonal from "../components/aboutpersonal";
import Contact from "../components/contact";
import WorkSection from "../components/workSection";
import PersonalGrid from "../components/personalGrid";
import ProfileTag from "../components/profileTag";

function Personal({ isDarkMode }) {
    return (
        <>
            <div className={isDarkMode ? "dark" : ""}>
                <section id="about" className="bg-[#94BEA3] dark:bg-black dark:text-white transition-colors duration-300">
                    <AboutPersonal isDarkMode={isDarkMode} />
                </section>
                <section id="work" className="transition-colors duration-300">
                    <PersonalGrid />
                </section>
                <section id="contact" >
                    <Contact />
                </section>
            </div>
        </>
    );
}

export default Personal;