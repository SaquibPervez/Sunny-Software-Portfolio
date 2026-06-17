import HeroModern from "./components/HeroSection";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Projects from "./components/Projects";
import OurProcess from "./components/OurProcess";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
   <div>
     <HeroModern />
     <Marquee />
     <Services />
     <Projects />
     <OurProcess />
     <Testimonials />
   </div>
  );
}
