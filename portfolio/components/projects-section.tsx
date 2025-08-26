"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "BirdSense",
    description:
      "I built BirdSense, a bird-feeder camera that spots and identifies birds and their species in real time. It runs YOLO for detection and a PyTorch ViT for classification I trained, (\~92% on 200+ species), piping results through AWS (Lambda, S3, MongoDB) to a web app to display the results.",
    image: "/home-page.png",
    technologies: ["Python", "Next.js", "MongoDB", "AWS", "PyTorch", "YOLO", "TypeScript"],
    githubUrl: "https://github.com/FelixjGrimm118/BirdSense",
    liveUrl: "https://birdsense.vercel.app/",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/task-management-app.png",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current conditions and forecasts using external APIs. Features location-based weather and interactive charts.",
    image: "/weather-dashboard-interface.png",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Machine Learning Classifier",
    description:
      "A machine learning project that classifies images using TensorFlow. Includes data preprocessing, model training, and a web interface for predictions.",
    image: "/machine-learning-interface.png",
    technologies: ["Python", "TensorFlow", "Flask", "scikit-learn"],
    githubUrl: "https://github.com",
    liveUrl: null,
  },
]

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-lg transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
