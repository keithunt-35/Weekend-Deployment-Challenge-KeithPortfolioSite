import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Timeline from "@/sections/Timeline";
import Achievements from "@/sections/Achievements";
import ImpossibleList from "@/sections/ImpossibleList";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Achievements />
      <ImpossibleList />
      <Contact />
    </>
  );
}
