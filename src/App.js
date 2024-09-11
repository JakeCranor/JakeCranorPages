import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePageSection from "./pages/HomePageSection";
import CoxProjects from "./pages/CoxProjects";
import GaTechProjects from "./pages/GeorgiaTechProjects";
import PersonalProjects from "./pages/PersonalProjects";
import Resume from "./pages/Resume";

function App() {
  const action = useNavigationType();
  const { pathname } = useLocation();

  useEffect(() => {
    if (action !== "POP") window.scrollTo(0, 0);

    const titles = {
      "/": "Jake Cranor",
      "/personal-life-section": "Personal Life",
      "/resume": "Resume",
    };

    const descriptions = {
      "/": "Welcome to the Home page",
      "/personal-life-section": "Learn more about personal life",
      "/resume": "My resume",
    };

    document.title = titles[pathname] || "Jake Cranor";
    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.content =
        descriptions[pathname] || "Welcome to my website";
    }
  }, [action, pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/JakeCranorPages" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePageSection />} />
        <Route path="/coxprojects" element={<CoxProjects />} />
        <Route path="/georgiatechprojects" element={<GaTechProjects />} />
        <Route path="/personalprojects" element={<PersonalProjects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
