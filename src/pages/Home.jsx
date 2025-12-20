import About from "../components/about";
import Contact from "../components/contact";
import WorkSection from "../components/workSection";
import ProfileTag from "../components/profileTag";

function Home({ isDarkMode }) {
    return (
        <>
            <div className={isDarkMode ? "dark" : ""}>
                <section id="about" className="transition-colors duration-300">
                    <About isDarkMode={isDarkMode} />
                </section>
                <section id="work" className="bg-neutral-100 dark:bg-black dark:text-white transition-colors duration-300 overflow-x-hidden">
                    <WorkSection />
                </section>
                <section id="contact" >
                    <Contact />
                </section>
            </div>
        </>
    );
}

export default Home;
