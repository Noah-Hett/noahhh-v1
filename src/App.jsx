import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageTransitionProvider } from './animations/circlePageTransition';

import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Gizmophone from "./pages/gizmophone";
import BuskRadio from "./pages/buskradio";
import SmoothScrollLayout from "./components/smoothScrollLayout";
import CustomCursor from "./components/CustomCursor";
import Personal from "./pages/personal";
import Professional from "./pages/professional";
import ICRS from "./pages/icrs";
import AllProjects from "./pages/AllProjects";
import Noahhh from "./pages/noahhh";
import Bisole from "./pages/bisole";
import Makeathon from "./pages/makeathon";
import SDE from "./pages/sde";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <BrowserRouter>
      <PageTransitionProvider>
        <div>
          <CustomCursor />
          <Navbar isDarkMode={isDarkMode} />
          <SmoothScrollLayout>
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
                <Route path="/gizmophone" element={<Gizmophone />} />
                <Route path="/buskradio" element={<BuskRadio />} />
                <Route path="/icrs" element={<ICRS />} />
                <Route path="/personal" element={<Personal isDarkMode={isDarkMode} />} />
                <Route path="/professional" element={<Professional isDarkMode={isDarkMode} />} />
                <Route path="/allprojects" element={<AllProjects />} />
                <Route path="/noahhh" element={<Noahhh />} />
                <Route path="/bisole" element={<Bisole />} />
                <Route path="/makeathon" element={<Makeathon />} />
                <Route path="/sde" element={<SDE />} />
              </Routes>
            </main>
          </SmoothScrollLayout>
        </div>
      </PageTransitionProvider>
    </BrowserRouter>
  );
}

export default App;
