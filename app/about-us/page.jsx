import WhatWeDo from "../components/(About)/AboutStory";
import HeroManifesto from "../components/(About)/HeroSection";
import HowWeWork from "../components/(About)/HowWeWork";
import Industries from "../components/(About)/Industries";
import Innovation from "../components/(About)/Innovation";
import Team from "../components/(About)/Team";
import Vision from "../components/(About)/Vision";

export default function Home() {
  return (
   <div>
    <HeroManifesto />
    <WhatWeDo />
    <HowWeWork />
    <Innovation />
    <Industries />
    <Team />
    <Vision />
   </div>
  );
}
