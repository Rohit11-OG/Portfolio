import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Users, Trophy } from "lucide-react";
// import ParallaxSection from "./ParallaxSection";

export default function AboutSection() {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Robotics",
      description: "Building ML algorithms and Computer Vision solutions for production robotic systems at IRDPL"
    },
    {
      icon: Code,
      title: "Deep Learning",
      description: "Expertise in PyTorch, TensorFlow, Neural Networks, and cutting-edge AI frameworks"
    },
    {
      icon: Trophy,
      title: "Oracle Certified",
      description: "Oracle Certified Data Science & Gen AI Professional with 6+ industry certifications"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Strong foundation in management, communication, and team collaboration with leadership potential"
    }
  ];

  const tools = [
    "Python", "PyTorch", "TensorFlow", "OpenCV", "YOLO", "Flask", "SQL", "MySQL", "AWS", "Oracle Cloud",
    "Git", "Linux", "Pandas", "NumPy", "Scikit-learn", "Power BI", "Hugging Face", "YOLO11", "ROS2", "Intel RealSense"
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
            AI Engineer specializing in Computer Vision and Machine Learning for robotic automation.
            Certified Data Science and Generative AI Professional with hands-on expertise in 
            <span className="text-primary font-medium"> predictive analytics and real-time vision systems</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className={`hover-elevate border-primary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 magnetic-button animate-morph animate-fade-in-scale stagger-${Math.min(index + 1, 10)} group`}
              data-testid={`card-highlight-${index}`}
            >
              <CardContent className="p-6 text-center space-y-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div 
                  className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto shadow-lg animate-float relative z-10 group-hover:scale-110 transition-transform duration-300" 
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
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
                  <p className="animate-slide-in-left stagger-1">
                    I'm an AI Engineer at IRDPL (Intuitive Research and Development Pvt Ltd) in Pune, 
                    where I build and optimize ML algorithms and computer vision models for production robotic systems. 
                    I specialize in developing deep learning solutions using PyTorch and TensorFlow for automation applications.
                  </p>
                  <p className="animate-slide-in-left stagger-2">
                    With a B.E. in Computer Engineering from SPPU (CGPA: 7.95/10.0) and multiple certifications 
                    including Oracle Data Science & Gen AI Professional, I combine strong academic foundations with 
                    hands-on industry experience in AI/ML, Computer Vision, and Robotics.
                  </p>
                  <p className="animate-slide-in-left stagger-3">
                    I'm proficient in PyTorch, TensorFlow, OpenCV, and Python, with strong foundations in 
                    Deep Learning, NLP, RL, and cloud platforms (AWS, Oracle Cloud). Passionate about building 
                    scalable AI systems for robotics and intelligent automation!
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold animate-slide-in-right stagger-1">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Core Technologies
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className={`animate-bounce-in magnetic-button hover:bg-primary/20 hover:text-primary transition-all duration-300 stagger-${Math.min(index + 1, 10)}`}
                      data-testid={`badge-tool-${tool.toLowerCase()}`}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground animate-slide-in-right stagger-4">
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