import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Brain } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "SQL", "R", "C++", "TypeScript"]
    },
    {
      icon: Brain,
      title: "Frameworks & Libraries",
      skills: ["scikit-learn", "TensorFlow", "Pandas", "NumPy", "Flask", "React", "Node.js", "Express"]
    },
    {
      icon: Database,
      title: "Databases & Analytics",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Power BI", "Tableau", "Apache Spark", "Elasticsearch"]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Jupyter", "VS Code", "Linux", "APIs", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">
            Technical expertise across data science, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs"
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