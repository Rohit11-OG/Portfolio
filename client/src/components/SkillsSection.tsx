import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Brain } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "SQL", "R", "Java", "C++", "HTML", "CSS"]
    },
    {
      icon: Brain,
      title: "Frameworks & Libraries",
      skills: ["scikit-learn", "TensorFlow", "Pandas", "NumPy", "Flask", "Django"]
    },
    {
      icon: Database,
      title: "Databases & Analytics",
      skills: ["MySQL", "MongoDB", "Power BI", "Tableau"]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Jupyter", "VS Code", "APIs", "Excel"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-flip-in-y">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground animate-typewriter stagger-1">
            Technical expertise across Data Science, Machine Learning and AI development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`hover-elevate magnetic-button transition-all duration-500 border-primary/10 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 animate-zoom-in stagger-${index + 2} group relative overflow-hidden`}
              data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-2 animate-float group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${index * 0.3}s` }}>
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className={`text-xs animate-slide-in-up magnetic-button hover:bg-primary/20 hover:text-primary transition-all duration-300 stagger-${skillIndex + 1}`}
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Professional Proficiencies</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Data Science & Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Statistical analysis, data visualization, predictive modeling, and business intelligence
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Machine Learning & AI</h4>
                  <p className="text-sm text-muted-foreground">
                    Supervised/unsupervised learning, neural networks, NLP, computer vision
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">
                    End-to-end web applications, RESTful APIs, database design, cloud deployment
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}