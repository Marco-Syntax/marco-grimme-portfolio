import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
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
        {/* 1. Hero — full viewport, dark, animated ring + text reveal */}
        <Hero />

        {/* 2. PhoneBuilder — dark #0f0e0c, 400vh sticky, phone assembles part by part */}
        <PhoneBuilder />

        {/* 3. WebBuilder — dark #0a0f18, 400vh sticky, browser window assembles */}
        <WebBuilder />

        {/* 4. Anatomy — light bg, sticky scroll, exploded architecture diagram */}
        <Anatomy />

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
            index={index}
          />
        ))}

        {/* 4. Projects — dark, featured + grid */}
        <Projects />

        {/* 5. Stack — light bg, skill clusters */}
        <Stack />

        {/* 6. Experience / Why Marco */}
        <Experience />

        {/* 7. Contact — final CTA */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
