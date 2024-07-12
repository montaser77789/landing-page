import AboutSection from "./components/AboutSection";
import Navbar from "./components/Appbar";
import BuyWidget from "./components/JupiterTerminalComponent.jsx";
import Footer from "./components/Footer";
import HistoryComponent from "./components/HistoryComponent ";
import HomeSection from "./components/HomeSection";
import RoadmapSection from "./components/RoadmapSection";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <RoadmapSection />
      <HistoryComponent />
      <Footer />
    </>
  );
}

export default App;
