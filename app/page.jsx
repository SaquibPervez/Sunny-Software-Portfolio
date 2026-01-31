import HeroModern from "@/app/components/HeroSection";
import Marquee from "@/app/components/Marquee";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import OurProcess from "@/app/components/OurProcess";
import Testimonials from "@/app/components/Testimonials";

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
