import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import FlipCard from "./components/FlipCard";
//import ProjectsSection from "./components/ProjectsSection";
import Blessings from "./components/blessings";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { Heebo } from "@next/font/google"

const heebo = Heebo({
  subsets: ['latin'],
  //weight: ['400', '700']
});

// import LocalFont from '@next/font/local';
const PapillonFont = '/Papillon_PersonalUse.woff';
const PetelBoldFont = '/PetelBold.ttf';


export default function startPage2() {
  return (
    <main className="flex min-h-screen flex-col bg-custom-bg bg-cover bg-center">
      <Navbar className={PapillonFont}/>
      <div className="container mt-1 mx-auto px-12 py-4">
        <HeroSection className={PapillonFont}/>
        <AchievementsSection className={heebo.className}/>
        <AboutSection  className={heebo.className}/>
        <FlipCard className={heebo.className}/>
        <Blessings className={heebo.className}/>
        <EmailSection  className={heebo.className}/>
      </div>
      <Footer />
    </main>
  );
}
