import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Award, Trophy } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      period: "2022 - 2026",
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Savitribai Phule Pune University (SPPU)",
      achievement: "CGPA: 7.95 / 10.0",
      description: "Deeply involved in AI/ML, Data Science, Computer Vision, and robotics subjects and projects.",
      highlights: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Structures", "Database Systems", "AI & Neural Networks"]
    },
    {
      period: "2021 - 2022",
      degree: "HSC (Class 12)",
      institution: "H.P.T. ARTS & R.Y.K. SCIENCE COLLEGE, Nashik",
      achievement: "PCM Focus",
      description: "Strong foundation in Physics, Chemistry, and Mathematics with focus on analytical thinking.",
      highlights: ["Physics", "Chemistry", "Mathematics"]
    }
  ];

  const certifications = [
    {
      name: "Generative AI Foundations",
      issuer: "UpGrad",
      date: "January 2026",
      icon: Trophy
    },
    {
      name: "Ultimate Job Ready Data Science Course",
      issuer: "Code With Harry",
      date: "December 2025",
      icon: Award
    },
    {
      name: "JP Morgan Chase & Co. Quantitative Research",
      issuer: "Forage",
      date: "November 2025",
      icon: Award
    },
    {
      name: "Oracle Certified: Data Science Professional",
      issuer: "Oracle University",
      date: "October 2025",
      icon: Trophy
    },
    {
      name: "Oracle Certified: Generative AI Professional",
      issuer: "Oracle University",
      date: "September 2025",
      icon: Trophy
    },
    {
      name: "Elements of AI",
      issuer: "University of Helsinki & MinnaLearn",
      date: "July 2025",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-zoom-in">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground animate-slide-in-up stagger-1">
            Academic journey focused on Computer Engineering and Science
          </p>
        </div>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>
          
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className={`hover-elevate magnetic-button transition-all duration-500 border-primary/10 bg-gradient-to-r from-card to-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} stagger-${Math.min(index + 2, 10)}`}
              data-testid={`card-education-${index}`}
            >
              <CardContent className="p-8 relative">
                {/* Timeline dot */}
                <div className="absolute -left-2 top-8 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background hidden md:block animate-pulse-glow"></div>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="flex items-center space-x-2 mb-2 animate-bounce-in stagger-1">
                      <Calendar className="h-4 w-4 text-primary animate-pulse" />
                      <Badge variant="outline" className="font-semibold bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
                        {edu.period}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <div className="flex items-start space-x-3 mb-2 animate-slide-in-right stagger-2">
                        <GraduationCap className="h-5 w-5 text-primary mt-1 flex-shrink-0 animate-float" />
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                        </div>
                      </div>
                      
                      {edu.achievement && (
                        <div className="flex items-center space-x-2 mt-3 animate-bounce-in stagger-3">
                          <Award className="h-4 w-4 text-primary animate-pulse" />
                          <Badge variant="default" className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
                            {edu.achievement}
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground animate-slide-in-up stagger-3">{edu.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <Badge 
                          key={hIndex} 
                          variant="secondary" 
                          className={`animate-flip-in-y magnetic-button hover:bg-primary/20 hover:text-primary transition-all duration-300 stagger-${Math.min(hIndex + 4, 10)}`}
                          data-testid={`badge-subject-${highlight.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 animate-zoom-in">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Certifications & Achievements
              </span>
            </h3>
            <p className="text-lg text-muted-foreground animate-slide-in-up stagger-1">
              Professional certifications validating expertise in Data Science and AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className={`hover-elevate magnetic-button transition-all duration-500 border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 animate-fade-in-scale stagger-${Math.min(index + 1, 10)}`}
              >
                <CardContent className="p-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 animate-float">
                      <cert.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}