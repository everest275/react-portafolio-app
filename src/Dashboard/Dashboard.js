import "./dashboard.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import AboutMe from './AboutMe/AboutMe'
import Projects from "./Proyects/Proyects";
import Contact from "./Contact/Contact";
import FadeInOut from "../FadeOutOnExit/FadeOutOnExit";

export const Dashboard = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <>
      <progress max="100" value="0"></progress>
      <nav>
      <h1 class="text-4xl font-bold text-center text-black">Portfolio</h1>
      </nav>
      <div class="container">
        <section>
          <AboutMe/>
        </section>

        
        
        <section>
        <FadeInOut>
          <Projects/>
          </FadeInOut>
        </section>

        <section>
          <FadeInOut>
          <Contact/>
          </FadeInOut>
        </section>
      </div>
    </>
  );
};