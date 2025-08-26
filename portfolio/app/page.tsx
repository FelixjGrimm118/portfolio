import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Felix Grimm",
  jobTitle: "Software Engineer",
  description: "Personal portfolio showcasing projects, experience, and education in software development.",
  url: typeof window !== "undefined" ? window.location.origin : "",
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <main role="main" aria-label="Portfolio content">
          <HeroSection />
          <EducationSection />
          <ProjectsSection />
          <ExperienceSection />
        </main>
      </div>
    </>
  )
}
