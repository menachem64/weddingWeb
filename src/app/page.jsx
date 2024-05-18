import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Invitation from "./components/Invitation";
//import ProjectsSection from "./components/ProjectsSection";
import Blessings from "./components/Blessings";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { Heebo } from "@next/font/google"

const heebo = Heebo({
  subsets: ['latin'],
  //weight: ['400', '700']
});

export default function startPage2() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-1 mx-auto px-12 py-4">
        <HeroSection className={heebo.className}/>
        <AchievementsSection className={heebo.className}/>
        <Invitation className={heebo.className}/>
        <AboutSection  className={heebo.className}/>
        <Blessings className={heebo.className}/>
        <EmailSection  className={heebo.className}/>
      </div>
      <Footer />
    </main>
  );
}
