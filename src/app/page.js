import { PUBLIC_KEY, TEMPLATE_ID, SERVICE_ID } from "@/lib/constant";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import EducationExperienceSection from "./components/EducationExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import ServiceSection from "./components/ServiceSection";
import SkillSection from "./components/SkillSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <ProjectSection />
      <EducationExperienceSection />
      <SkillSection />
      <ContactSection
        PUBLIC_KEY={PUBLIC_KEY}
        TEMPLATE_ID={TEMPLATE_ID}
        SERVICE_ID={SERVICE_ID}
      />
    </div>
  );
}
