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
      title: "AI Development",
      description: "Expert in building intelligent systems using modern frameworks and cutting-edge AI technologies"
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
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-accent/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Who I Am
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Computer Engineering student with a passion for data science and analytics, 
            combining academic excellence with practical, project-based learning to create 
            <span className="text-primary font-medium"> impactful solutions</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className={`hover-elevate border-primary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 magnetic-button animate-morph animate-fade-in-scale stagger-${index + 1} group`}
              data-testid={`card-highlight-${index}`}
            >
              <CardContent className="p-6 text-center space-y-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto shadow-lg animate-float relative z-10 group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${index * 0.5}s` }}>
                  <highlight.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground relative z-10 group-hover:text-primary transition-colors duration-300">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{highlight.description}</p>
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