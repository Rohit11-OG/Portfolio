import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, MapPin, Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      period: "Feb 2025 – Present",
      title: "Data Science Intern",
      organization: "TechCorp Analytics",
      location: "Remote",
      description: "Collaborate with U.S. based steel detailing firm to automate ETL workflows and streamline data pipelines for shop drawing projects.",
      achievements: [
        "Built Power BI dashboards reducing report generation time by 60%",
        "Wrote SQL queries to manage drawing metadata and submittals",
        "Developed Python scripts for automated data validation",
        "Supported cross-functional teams with actionable insights"
      ],
      technologies: ["Python", "Power BI", "SQL", "ETL", "Data Pipelines"]
    },
    {
      period: "Aug 2024 – Jan 2025",
      title: "AI Research Assistant",
      organization: "University Research Lab",
      location: "Nashik",
      description: "Conducted research on machine learning applications in predictive analytics and developed AI-powered tools for data visualization.",
      achievements: [
        "Implemented Random Forest models for fitness recommendation systems",
        "Created 3D mind mapping tools using NLP for video transcript analysis",
        "Developed customer segmentation models using unsupervised learning",
        "Published research on facial recognition for disaster response"
      ],
      technologies: ["Python", "TensorFlow", "scikit-learn", "NLP", "Computer Vision"]
    },
    {
      period: "Jun 2024 – Aug 2024",
      title: "Software Development Intern",
      organization: "InnovateTech Solutions",
      location: "Mumbai",
      description: "Developed full-stack web applications and contributed to machine learning projects for client solutions.",
      achievements: [
        "Built resume classification system using NLP techniques",
        "Developed ATM cash prediction model using time series analysis",
        "Created responsive web interfaces using React and Node.js",
        "Collaborated with senior developers on production deployments"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Machine Learning", "NLP"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">
            Professional journey in data science, AI, and software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-experience-${index}`}>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <Badge variant="outline" className="font-semibold text-xs">
                          {exp.period}
                        </Badge>
                      </div>
                      {exp.location && (
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <div className="flex items-start space-x-3 mb-2">
                        <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <div className="flex items-center space-x-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <p className="text-muted-foreground">{exp.organization}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        {exp.achievements.map((achievement, aIndex) => (
                          <li key={aIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIndex) => (
                          <Badge key={tIndex} variant="secondary" data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}>
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