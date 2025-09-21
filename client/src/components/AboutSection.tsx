import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Users, Trophy } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Data Science",
      description: "Strong foundation in Python, machine learning, and AI with hands-on experience in predictive modeling"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies and frameworks for building end-to-end applications"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Vice President of COSA and Technical Head of the Coding Club, leading innovative projects"
    },
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Maintaining strong academic performance while engaging in practical, project-based learning"
    }
  ];

  const tools = [
    "Python", "Power BI", "SQL", "scikit-learn", "Flask", "Pandas", "TensorFlow", "Git"
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Who I Am</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Computer Engineering student with a passion for data science and analytics, 
            combining academic excellence with practical, project-based learning to create 
            impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-highlight-${index}`}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">About Me</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a Computer Engineering student deeply involved in AI/ML, Data Analytics, 
                    and Data Science. My journey combines rigorous academic study with hands-on 
                    experience in building dashboards, predictive models, and AI-powered applications.
                  </p>
                  <p>
                    As Vice President of COSA and Technical Head of the Coding Club, I've led 
                    numerous technical initiatives and mentored fellow students in emerging technologies.
                  </p>
                  <p>
                    My curiosity drives me to explore new technologies and frameworks, always 
                    seeking to bridge the gap between theoretical knowledge and practical implementation 
                    to solve real-world problems.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge key={index} variant="secondary" data-testid={`badge-tool-${tool.toLowerCase()}`}>
                      {tool}
                    </Badge>
                  ))}
                </div>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Experienced in building end-to-end data pipelines, creating interactive 
                    dashboards, and developing machine learning models that provide actionable 
                    insights for decision-making.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}