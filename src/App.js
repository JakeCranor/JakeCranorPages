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
        <Route path="/home" element={<Navigate to="/JakeCranorPages/home" />} />
        <Route
          path="/coxprojects"
          element={<Navigate to="/JakeCranorPages/coxprojects" />}
        />
        <Route
          path="/georgiatechprojects"
          element={<Navigate to="/JakeCranorPages/georgiatechprojects" />}
        />
        <Route
          path="/personalprojects"
          element={<Navigate to="/JakeCranorPages/personalprojects" />}
        />
        <Route
          path="/resume"
          element={<Navigate to="/JakeCranorPages/resume" />}
        />

        <Route path="/" element={<Navigate to="/JakeCranorPages/home" />} />
        <Route
          path="/JakeCranorPages"
          element={<Navigate to="/JakeCranorPages/home" />}
        />
        <Route path="/JakeCranorPages/home" element={<HomePageSection />} />
        <Route path="/JakeCranorPages/coxprojects" element={<CoxProjects />} />
        <Route
          path="/JakeCranorPages/georgiatechprojects"
          element={<GaTechProjects />}
        />
        <Route
          path="/JakeCranorPages/personalprojects"
          element={<PersonalProjects />}
        />
        <Route path="/JakeCranorPages/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
