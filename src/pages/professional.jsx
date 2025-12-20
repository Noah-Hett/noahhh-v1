import AboutProfessional from "../components/aboutprofessional";
import Contact from "../components/contact";
import WorkSection from "../components/workSection";
import ProfileTag from "../components/profileTag";

function Professional({ isDarkMode }) {
    return (
        <>
            <div className={isDarkMode ? "dark" : ""}>
                <section id="about" className="bg-[#979797] dark:bg-black dark:text-white transition-colors duration-300">
                    <AboutProfessional isDarkMode={isDarkMode} />
                </section>
                <section id="work" className="bg-[#979797] dark:bg-black dark:text-white transition-colors duration-300 overflow-x-hidden">
                </section>
                <section id="contact" >
                    <Contact />
                </section>
            </div>
        </>
    );
}

export default Professional;