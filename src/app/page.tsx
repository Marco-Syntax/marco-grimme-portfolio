import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import TechTicker from "@/components/ui/TechTicker";
import SectionDivider from "@/components/ui/SectionDivider";
import Hero from "@/components/sections/Hero";
import PhoneBuilder from "@/components/sections/PhoneBuilder";
import WebBuilder from "@/components/sections/WebBuilder";
import Anatomy from "@/components/sections/Anatomy";
import FeatureSection from "@/components/sections/FeatureSection";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { features } from "@/lib/data";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main>
        {/* 1. Hero — full viewport, dark, animated ring + text reveal + stat counters */}
        <Hero />

        {/* Tech ticker — infinite horizontal scroll strip */}
        <TechTicker />

        {/* 2. PhoneBuilder — dark #0f0e0c, 400vh sticky, phone assembles part by part */}
        <PhoneBuilder />

        {/* 3. WebBuilder — dark #0a0f18, 400vh sticky, browser window assembles */}
        <WebBuilder />

        {/* Transition: dark → light */}
        <SectionDivider variant="dark-to-light" />

        {/* 4. Anatomy — light bg, sticky scroll, exploded architecture diagram */}
        <Anatomy />

        {/* Transition: light → dark */}
        <SectionDivider variant="light-to-dark" />

        {/* 5. Feature sections — dark, left-text / right-code, 4 panels */}
        {features.map((feature, index) => (
          <FeatureSection
            key={feature.id}
            id={feature.id}
            accent={feature.accent}
            title={feature.title}
            subtitle={feature.subtitle}
            description={feature.description}
            bullets={feature.bullets}
            code={feature.code}
            filename={feature.filename}
            index={index}
          />
        ))}

        {/* 7. Projects — dark, featured + grid */}
        <Projects />

        {/* Transition: dark → light */}
        <SectionDivider variant="dark-to-light" />

        {/* 7. Stack — light bg, skill clusters */}
        <Stack />

        {/* Transition: light → dark */}
        <SectionDivider variant="light-to-dark" />

        {/* 8. Experience / Why Marco */}
        <Experience />

        {/* 9. Contact — final CTA with navigation grid */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
