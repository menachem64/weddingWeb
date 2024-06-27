import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import FlipCard from "./components/FlipCard";
//import ProjectsSection from "./components/ProjectsSection";
import BlessingsPage from "./components/Blessings";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import TimerSection from "./components/TimerSection";
import { Heebo } from "@next/font/google"


export const metadata = {
  title: 'החתונה',
  description: 'החתונה של מענדי וחני',
  icons: {
    icon: '/w.ico'
  }
}

const heebo = Heebo({
  subsets: ['latin'],
  //weight: ['400', '700']
});

// import LocalFont from '@next/font/local';
const PapillonFont = '/Papillon_PersonalUse.woff';
const PetelBoldFont = '/PetelBold.ttf';


export default function startPage2() {
  return (
    <main className="flex min-h-screen flex-col bg-custom-bg bg-cover bg-center bg-[#F0E4DB]">
      <Navbar className={PapillonFont}/>
      <div className="container mt-1 mx-auto px-12 py-4">
        <HeroSection className={PapillonFont}/>
        <TimerSection className={heebo.className}/>
        <AboutSection  className={heebo.className}/>
        <FlipCard className={heebo.className}/>
        <BlessingsPage className={heebo.className}/>
        <EmailSection  className={heebo.className}/>
      </div>
      <Footer />
    </main>
  );
}
