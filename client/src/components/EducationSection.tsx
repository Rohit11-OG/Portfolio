import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      period: "2022 - 2026",
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Guru Gobind Singh College Of Engineering And Research Centre, Nashik",
      achievement: "Current SGPA: 9.48",
      description: "Deeply involved in AI/ML, Data Analytics, Data Science, and full-stack development subjects and projects.",
      highlights: ["Machine Learning", "Data Structures", "Database Systems", "Software Engineering", "AI & Neural Networks"]
    },
    {
      period: "2021 - 2022",
      degree: "HSC (Class 12)",
      institution: "Universal College of Commerce and Science",
      achievement: "Scored 72.33% in PCM",
      description: "Strong foundation in Physics, Chemistry, and Mathematics with focus on analytical thinking.",
      highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">
            Academic journey focused on computer engineering and data science
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-education-${index}`}>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <Badge variant="outline" className="font-semibold">
                        {edu.period}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <div className="flex items-start space-x-3 mb-2">
                        <GraduationCap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                        </div>
                      </div>
                      
                      {edu.achievement && (
                        <div className="flex items-center space-x-2 mt-3">
                          <Award className="h-4 w-4 text-primary" />
                          <Badge variant="default">{edu.achievement}</Badge>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground">{edu.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <Badge key={hIndex} variant="secondary" data-testid={`badge-subject-${highlight.toLowerCase().replace(/\s+/g, '-')}`}>
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
      </div>
    </section>
  );
}