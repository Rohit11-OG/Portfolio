import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Fitness & Nutrition Recommender",
      description: "Web app generating personalized diet and workout plans via Random Forest algorithm, helping users achieve their health goals through data-driven recommendations.",
      technologies: ["Python", "Random Forest", "Flask", "React", "SQLite"],
      category: "Machine Learning",
      features: ["Personalized meal plans", "Workout recommendations", "Progress tracking", "Nutritional analysis"]
    },
    {
      title: "YouTube to 3D Mind Map",
      description: "AI-powered tool to visualize video transcripts as interactive 3D mind maps, making complex content more digestible and memorable.",
      technologies: ["Python", "NLP", "Three.js", "OpenAI API", "React"],
      category: "AI & Visualization",
      features: ["Video transcript extraction", "3D visualization", "Interactive navigation", "Content summarization"]
    },
    {
      title: "Customer Segmentation Marketing Analysis",
      description: "Performs customer segmentation using unsupervised machine learning to identify distinct customer groups for targeted marketing strategies.",
      technologies: ["Python", "K-Means", "scikit-learn", "Pandas", "Matplotlib"],
      category: "Data Analytics",
      features: ["RFM analysis", "Clustering algorithms", "Visual insights", "Marketing recommendations"]
    },
    {
      title: "Missing Person Matcher",
      description: "Facial recognition tool for identifying missing persons in disaster response scenarios, using computer vision to match faces against databases.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Face Recognition", "Flask"],
      category: "Computer Vision",
      features: ["Real-time face detection", "Database matching", "Confidence scoring", "Alert system"]
    },
    {
      title: "Job Resume Classifier",
      description: "ML app to classify resumes into job roles using NLP techniques, helping HR departments automate initial screening processes.",
      technologies: ["Python", "NLP", "scikit-learn", "NLTK", "Streamlit"],
      category: "Natural Language Processing",
      features: ["Text preprocessing", "Feature extraction", "Multi-class classification", "Confidence metrics"]
    },
    {
      title: "ATM Cash Predictor",
      description: "Predicts cash shortages using historical data for proactive bank alerts, optimizing cash management and reducing customer inconvenience.",
      technologies: ["Python", "Time Series", "Prophet", "Pandas", "Plotly"],
      category: "Predictive Analytics",
      features: ["Time series forecasting", "Anomaly detection", "Alert system", "Dashboard visualization"]
    }
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
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Showcase of data science, machine learning, and AI projects solving real-world problems
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative mb-12">
          <Card className="hover-elevate" data-testid={`card-project-${currentProject}`}>
            <CardHeader className="text-center">
              <Badge variant="outline" className="w-fit mx-auto mb-2">
                {projects[currentProject].category}
              </Badge>
              <CardTitle className="text-2xl">{projects[currentProject].title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                {projects[currentProject].description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    {projects[currentProject].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {projects[currentProject].technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" data-testid={`badge-project-tech-${tech.toLowerCase()}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="sm" data-testid="button-view-code">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
                <Button variant="outline" size="sm" data-testid="button-live-demo">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            size="icon"
            variant="outline"
            className="absolute left-4 top-1/2 -translate-y-1/2"
            onClick={prevProject}
            data-testid="button-prev-project"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onClick={nextProject}
            data-testid="button-next-project"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentProject ? 'bg-primary' : 'bg-muted-foreground/30'
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
              className={`hover-elevate cursor-pointer transition-all ${
                index === currentProject ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setCurrentProject(index)}
              data-testid={`card-project-grid-${index}`}
            >
              <CardHeader className="pb-3">
                <Badge variant="outline" className="w-fit mb-2">
                  {project.category}
                </Badge>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" data-testid="button-view-all-projects">
            <Github className="h-4 w-4 mr-2" />
            Explore All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}