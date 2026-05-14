import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "CivicMate - AI Civic Assistant",
      description: "Flask backend with Groq + Llama Vision for legal document simplification. Multi-modal AI, Hindi/English support, privacy-first with zero data storage.",
      technologies: ["Python", "Flask", "Groq API", "Llama 4 Scout Vision", "NLP"],
      category: "AI / NLP / Legal Tech",
      githubUrl: "https://github.com/Rohit11-OG/Civic-AI-Copilot",
      liveUrl: "https://civic-ai-copilot.vercel.app/",
      features: [
        "Legal Document Analyzer with Llama 4 Scout 17B Vision (Hindi/English PDFs + images)",
        "3-tier risk classification (HIGH/MEDIUM/LOW) for legal severity",
        "Auto-generated reply drafts and RTI application templates",
        "Sustainability module with carbon footprint calculator"
      ]
    },
    {
      title: "STL-Based YOLOv8 Detection System",
      description: "YOLOv8 object detection for robotic arm painting on Dobot Nova5. 97.7% mAP50, 100% precision, 97.8% recall with full ROS 2 Humble integration.",
      technologies: ["Python", "YOLOv8", "ROS 2", "Intel RealSense D435i", "PyTorch"],
      category: "Computer Vision / Robotics",
      githubUrl: "https://github.com/Rohit11-OG/Object-Detection-Using-STL-FIle",
      features: [
        "97.7% mAP50 / 100% precision / 97.8% recall at 30+ FPS real-time",
        "Synthetic training pipeline from STL/OBJ 3D models + real camera data",
        "ROS 2 Humble package with custom messages for detection publishing",
        "Industrial features: auto-reconnect, hot reload, graceful shutdown"
      ]
    },
    {
      title: "STL Vision PathPlanner",
      description: "End-to-end pipeline: 3D STL model → synthetic training → YOLOv8 detection → robot motion path. Six path strategies for inspection, painting, polishing, pick-and-place.",
      technologies: ["Python", "YOLOv8", "OpenCV", "ROS 2", "Open3D"],
      category: "Computer Vision / Robotics",
      githubUrl: "https://github.com/Rohit11-OG/STL-Vision-Pathplanner",
      features: [
        "Zero manual labeling — auto-generates 500+ synthetic images from STL",
        "6 path strategies: Contour, Spiral, Zigzag, Surface, Grid, Approach",
        "Real-time visualization with depth-aware path planning",
        "ROS 2-ready output for direct robotic arm execution"
      ]
    },
    {
      title: "Vidgo.AI - AI Reel Generator",
      description: "Upload photos, get AI-narrated reels. Gemini writes scripts, ElevenLabs synthesizes voice, FFmpeg renders cinematic transitions and Ken Burns effects.",
      technologies: ["Python", "Flask", "Gemini AI", "ElevenLabs", "FFmpeg"],
      category: "AI / Multimedia",
      githubUrl: "https://github.com/Rohit11-OG/Vidgo.AI",
      features: [
        "Gemini AI auto-writes narration scripts from uploaded photos",
        "12 free voices + ElevenLabs premium voice synthesis",
        "13 cinematic transitions and Ken Burns effects via FFmpeg",
        "Background music mixing and end-to-end automated rendering"
      ]
    },
    {
      title: "Nexus.AI - Hybrid Chatbot Engine",
      description: "Flask chatbot fusing deterministic AIML rule engine with LLM fallback. Mini-games, analytics dashboard, session memory, and web UI in one architecture.",
      technologies: ["Python", "Flask", "AIML", "LLM Fallback", "REST API"],
      category: "AI / NLP",
      githubUrl: "https://github.com/Rohit11-OG/Nexus.AI",
      liveUrl: "https://nexus-ai-chi-two.vercel.app/",
      features: [
        "Classic AIML rule engine + generative LLM fallback in single pipeline",
        "Wide topic spread: greetings, jokes, science, riddles, emotions, philosophy",
        "Built-in analytics dashboard for usage visibility",
        "Centralized config loading and Flask REST endpoints"
      ]
    },
    {
      title: "VisionGuard - CV Bug Detection Agent",
      description: "Static + runtime bug detection CLI tuned for Python computer vision projects. Targets YOLO, Intel RealSense, MegaPose, OpenCV, PyTorch, and PyQt5 codebases.",
      technologies: ["Python", "Static Analysis", "libcst", "ruff", "OpenTelemetry"],
      category: "Developer Tools / CV",
      githubUrl: "https://github.com/Rohit11-OG/VisionGuard",
      features: [
        "One-line install on Windows/Linux/macOS via PowerShell or curl",
        "Watch mode auto-scans on every file save",
        "CV-aware checks for YOLO, RealSense, MegaPose, OpenCV, PyTorch, PyQt5",
        "Numbered markdown reports written to .agent/reports/"
      ]
    },
    {
      title: "Lid-Logic - Eye Blink Detection",
      description: "Real-time eye blink detection and session analytics using OpenCV + dlib facial landmarks. Modular Python package with CLI, configurable thresholds, unit tests.",
      technologies: ["Python", "OpenCV", "dlib", "pyproject.toml", "pytest"],
      category: "Computer Vision / Safety",
      githubUrl: "https://github.com/Rohit11-OG/Lid-Logic",
      features: [
        "68-point facial landmark detection with Eye Aspect Ratio (EAR) computation",
        "Configurable CLI: camera index, EAR threshold, frame width, output dir",
        "Per-blink CSV logging plus session summary writer",
        "Modular package with unit-tested BlinkTracker core logic"
      ]
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-bounce-in">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground animate-slide-in-up stagger-1">
            Showcase of Data science, Machine learning, and AI projects solving real-world problems
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative mb-12">
          <Card className="hover-elevate magnetic-button transition-all duration-700 border-primary/20 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-scale" data-testid={`card-project-${currentProject}`}>
            <CardHeader className="text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-50"></div>
              <Badge variant="outline" className="w-fit mx-auto mb-2 relative z-10 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 animate-pulse-glow">
                {projects[currentProject].category}
              </Badge>
              <CardTitle className="text-2xl relative z-10 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent animate-slide-in-up">{projects[currentProject].title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <p className="text-muted-foreground text-center max-w-3xl mx-auto animate-slide-in-up stagger-1">
                {projects[currentProject].description}
              </p>
              
              <div className="space-y-4">
                <div className="animate-slide-in-left stagger-2">
                  <h4 className="font-medium mb-2 text-primary">Key Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    {projects[currentProject].features.map((feature, index) => (
                      <li key={index} className={`flex items-center space-x-2 animate-slide-in-right stagger-${Math.min(index + 3, 10)}`}>
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="animate-slide-in-right stagger-3">
                  <h4 className="font-medium mb-2 text-accent">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {projects[currentProject].technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className={`animate-flip-in-y magnetic-button hover:bg-accent/20 hover:text-accent transition-all duration-300 stagger-${Math.min(index + 1, 10)}`}
                        data-testid={`badge-project-tech-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4 animate-slide-in-up stagger-4">
                {projects[currentProject].githubUrl && (
                  <a
                    href={projects[currentProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="magnetic-button button-ripple border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      data-testid="button-view-code"
                    >
                      <Github className="h-4 w-4 mr-2 animate-pulse" />
                      View Code
                    </Button>
                  </a>
                )}
                {(projects[currentProject] as any).liveUrl && (
                  <a
                    href={(projects[currentProject] as any).liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="magnetic-button button-ripple bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300"
                      data-testid="button-live-demo"
                    >
                      <ExternalLink className="h-4 w-4 mr-2 animate-pulse" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            size="icon"
            variant="outline"
            className="absolute left-4 top-1/2 -translate-y-1/2 magnetic-button hover:bg-primary/10 border-primary/30 hover:border-primary transition-all duration-300 animate-float"
            onClick={prevProject}
            data-testid="button-prev-project"
          >
            <ChevronLeft className="h-4 w-4 text-primary" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="absolute right-4 top-1/2 -translate-y-1/2 magnetic-button hover:bg-primary/10 border-primary/30 hover:border-primary transition-all duration-300 animate-float"
            onClick={nextProject}
            data-testid="button-next-project"
          >
            <ChevronRight className="h-4 w-4 text-primary" />
          </Button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center space-x-2 mb-8 animate-slide-in-up stagger-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 magnetic-button hover:scale-125 ${
                index === currentProject 
                  ? 'bg-gradient-to-r from-primary to-accent animate-pulse-glow' 
                  : 'bg-muted-foreground/30 hover:bg-primary/50'
              }`}
              data-testid={`button-project-indicator-${index}`}
            />
          ))}
        </div>

        {/* All Projects Grid with 3D Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" style={{ perspective: '1000px' }}>
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card 
                className={`hover-elevate cursor-pointer magnetic-button transition-all duration-500 border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 animate-zoom-in stagger-${Math.min(index + 3, 10)} relative overflow-hidden group-hover:scale-105 ${
                  index === currentProject ? 'ring-2 ring-primary animate-pulse-glow' : ''
                }`}
                onClick={() => setCurrentProject(index)}
                data-testid={`card-project-grid-${index}`}
                style={{
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  transformStyle: 'preserve-3d',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotateY(5deg) rotateX(-3deg) translateZ(20px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(139, 92, 246, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="pb-3 relative z-10">
                <Badge variant="outline" className="w-fit mb-2 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
                  {project.category}
                </Badge>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-300">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-300">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center animate-slide-in-up stagger-5">
          <a href="https://github.com/Rohit11-OG" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              size="lg" 
              className="magnetic-button button-ripple border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-500 animate-glow"
              data-testid="button-view-all-projects"
            >
              <Github className="h-4 w-4 mr-2 animate-pulse" />
              Explore All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}