import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Vidgo.AI - AI Reel Generator",
      description: "Created a scalable and efficient platform that automates video reel generation through AI-powered voice synthesis, multimedia processing, and streamlined backend infrastructure.",
      technologies: ["Python", "ElevenLabs", "Flask", "ffmpeg,", "SQLite"],
      category: "Artificial Intelligence (AI) Integration",
      features: ["Automated Multimedia Processing", "Advanced Text-to-Speech", "User-Uploaded Media Support", "Automated Audio Integration"]
    },
    {
      title: "YouTube to 3D Mind Map",
      description: "AI-powered tool to visualize video transcripts as interactive 3D mind maps, making complex content more digestible and memorable.",
      technologies: ["Python", "NLP", "Three.js", "OpenAI API", "React"],
      category: "AI & Visualization",
      features: ["Video transcript extraction", "3D visualization", "Interactive navigation", "Content summarization"]
    },
    {
      title: "Automated Image Caption Generator",
      description: "Automatically generates descriptive captions for images using deep learning, combining computer vision and natural language processing.",
      technologies: ["Python", "Flask", "TensorFlow", "OpenCV", "Rest API"],
      category: "AI / Computer Vision / NLP",
      features: ["Image Upload Interface", "Batch Processing", "Download/Share Options", "RESTful API Integration"]
    },
    {
      title: "Dynamic Price Prediction for e-Commerce",
      description: "Built an ML-based application that predicts future e-commerce prices using historical trends and market factors, helping users optimize buying and selling decisions through dynamic pricing insights.",
      technologies: ["Python", "Scikit-learn", "Flask", "BeautifulSoup", "Matplotlib", "Pandas"],
      category: "Machine Learning",
      features: ["Historical Data Scraping", "Price Prediction Engine", "API Access", "User Alerts & Recommendations"]
    },
    {
      title: "Job Resume Classifier",
      description: "ML app to classify resumes into job roles using NLP techniques, helping HR departments automate initial screening processes.",
      technologies: ["Python", "NLP", "scikit-learn", "NLTK", "Streamlit"],
      category: "Natural Language Processing",
      features: ["Text preprocessing", "Feature extraction", "Multi-class classification", "Confidence metrics"]
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
                      <li key={index} className={`flex items-center space-x-2 animate-slide-in-right stagger-${index + 3}`}>
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
                        className={`animate-flip-in-y magnetic-button hover:bg-accent/20 hover:text-accent transition-all duration-300 stagger-${index + 1}`}
                        data-testid={`badge-project-tech-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4 animate-slide-in-up stagger-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="magnetic-button button-ripple border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  data-testid="button-view-code"
                >
                  <Github className="h-4 w-4 mr-2 animate-pulse" />
                  View Code
                </Button>
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

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`hover-elevate cursor-pointer magnetic-button transition-all duration-500 border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 animate-zoom-in stagger-${index + 3} relative overflow-hidden group ${
                index === currentProject ? 'ring-2 ring-primary animate-pulse-glow' : ''
              }`}
              onClick={() => setCurrentProject(index)}
              data-testid={`card-project-grid-${index}`}
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