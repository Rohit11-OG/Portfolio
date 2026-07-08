import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, MapPin, Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      period: "January 2026 – Present",
      title: "AI Engineer",
      organization: "Intuitive Research and Development Pvt Ltd (IRDPL)",
      location: "Pune, India",
      description: "Building and optimizing ML algorithms and computer vision models for production robotic systems.",
      achievements: [
        "Building and optimizing ML algorithms and computer vision models for production systems",
        "Developing deep learning solutions using PyTorch and TensorFlow for automation applications",
        "Implementing Reinforcement Learning algorithms for intelligent decision-making systems",
        "Managing end-to-end Computer Vision projects from data preprocessing to model deployment",
        "Developing real-time object detection solutions (YOLO11/YOLOv8) for industrial automation",
        "Working with advanced neural networks and vision architectures for real-world AI challenges"
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "YOLO11", "YOLOv8", "Computer Vision", "Deep Learning", "Reinforcement Learning", "Robotics"]
    },
    {
      period: "December 2024 – January 2025",
      title: "Intern at Indian Air Force – 11 BRD",
      organization: "Indian Air Force",
      location: "Nashik, India",
      description: "Gained practical experience in managing and integrating aircraft parts data, streamlining inventory tracking, and supporting aviation maintenance operations.",
      achievements: [
        "Gained practical experience in managing and integrating aircraft parts data, streamlining inventory tracking",
        "Supported aviation maintenance operations through optimized data handling",
        "Automated and improved data analysis and reporting using Excel, including advanced coding and formula development",
        "Hands-on exposure to aircraft aggregates, and applied programming logic for real-world problem-solving in defense engineering contexts"
      ],
      technologies: ["Excel", "Python", "Data Analysis", "Data Handling", "Aviation Systems"]
    },
    {
      period: "July – September 2025",
      title: "Data Science Master Virtual Internship",
      organization: "Altair Engineering Inc.",
      location: "Remote",
      description: "Completed a 10-week virtual internship focused on mastering key data science concepts and practices, promoting nation-building through skill development.",
      achievements: [
        "Completed a 10-week virtual internship with Outstanding grade (O: 90-100%)",
        "Applied data preprocessing, analysis, and model-building techniques using Python and industry-standard tools",
        "Gained practical experience with real-world datasets using Pandas, NumPy, and scikit-learn",
        "Implemented data wrangling, feature engineering, and machine learning algorithms"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Science", "Machine Learning"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-rotate-in">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground animate-slide-in-up stagger-1">
            Professional journey in Data science, AI, and Software development
          </p>
        </div>

        <div className="space-y-8 relative">
          {/* Experience timeline */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary hidden md:block opacity-30"></div>
          
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`hover-elevate magnetic-button transition-all duration-700 border-accent/20 bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 animate-slide-in-up stagger-${Math.min(index + 2, 10)} relative`}
              data-testid={`card-experience-${index}`}
            >
              <CardContent className="p-8 relative overflow-hidden">
                {/* Timeline indicator */}
                <div className="absolute -left-1 top-10 w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full border-2 border-background hidden md:block"></div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 animate-slide-in-left stagger-1">
                        <Calendar className="h-4 w-4 text-primary animate-wave" />
                        <Badge variant="outline" className="font-semibold text-xs bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30">
                          {exp.period}
                        </Badge>
                      </div>
                      {exp.location && (
                        <div className="flex items-center space-x-2 animate-slide-in-left stagger-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 space-y-4 relative z-10">
                    <div>
                      <div className="flex items-start space-x-3 mb-2 animate-slide-in-right stagger-2">
                        <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0 animate-float" />
                        <div>
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">{exp.title}</h3>
                          <div className="flex items-center space-x-2 animate-slide-in-right stagger-3">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <p className="text-muted-foreground">{exp.organization}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground animate-slide-in-up stagger-3">{exp.description}</p>
                    
                    <div className="space-y-2 animate-slide-in-left stagger-4">
                      <h4 className="font-medium text-primary">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        {exp.achievements.map((achievement, aIndex) => (
                          <li key={aIndex} className={`animate-slide-in-up stagger-${Math.min(aIndex + 5, 10)}`}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2 animate-slide-in-right stagger-6">
                      <h4 className="font-medium text-accent">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIndex) => (
                          <Badge 
                            key={tIndex} 
                            variant="secondary" 
                            className={`animate-rotate-in magnetic-button hover:bg-accent/20 hover:text-accent transition-all duration-300 stagger-${Math.min(tIndex + 7, 10)}`}
                            data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}