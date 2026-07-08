import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import ThreeDElement from "./ThreeDElement";
import ThreeBackground from "./ThreeBackground";
import TypewriterRoles from "./TypewriterRoles";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4 animate-slide-in-up stagger-1">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary animate-shimmer">AI Engineer @ IRDPL • Computer Vision • Deep Learning</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-scale stagger-2">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                    Rohit
                  </span>
                  <br />
                  <span className="text-foreground animate-float">Mandwade</span>
                </h1>

                <div className="animate-slide-in-up stagger-2">
                  <TypewriterRoles />
                </div>

                <div className="space-y-3">
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-slide-in-up stagger-2">
                    AI Engineer specializing in
                    <span className="text-primary font-semibold animate-shimmer"> Computer Vision and Machine Learning </span> 
                    for robotic automation
                  </p>
                  <p className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-slide-in-up stagger-3">
                    Building <span className="text-accent font-medium animate-pulse">production-grade ML models</span>,
                    <span className="text-primary font-medium animate-pulse"> real-time vision systems</span>, and
                    <span className="text-accent font-medium animate-pulse"> end-to-end AI solutions</span> for intelligent automation
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 animate-slide-in-up stagger-3">
              <Button 
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent button-ripple magnetic-button animate-glow relative overflow-hidden group transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/20 border border-primary/30"
                data-testid="button-view-projects"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Sparkles className="h-4 w-4 mr-2 relative z-10 animate-pulse" />
                <span className="relative z-10">My Projects</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 magnetic-button button-ripple animate-shimmer relative overflow-hidden group transition-all duration-500 hover:border-primary/60"
                data-testid="button-get-in-touch"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Get in Touch</span>
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4 animate-slide-in-up stagger-4">
              <a href="https://github.com/Rohit11-OG" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="hover:bg-primary/20 hover:text-primary magnetic-button animate-float relative overflow-hidden group transition-all duration-500 rounded-full border border-transparent hover:border-primary/30"
                  data-testid="link-github"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  <Github className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/rohit-mandwade-805979319" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="hover:bg-primary/20 hover:text-primary magnetic-button animate-float relative overflow-hidden group transition-all duration-500 rounded-full border border-transparent hover:border-primary/30"
                  style={{ animationDelay: '0.5s' }}
                  data-testid="link-linkedin"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  <Linkedin className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </Button>
              </a>
              <a href="mailto:rohitm7298@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="hover:bg-primary/20 hover:text-primary magnetic-button animate-float relative overflow-hidden group transition-all duration-500 rounded-full border border-transparent hover:border-primary/30"
                  style={{ animationDelay: '1s' }}
                  data-testid="link-email"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  <Mail className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right 3D Element */}
          <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
            <ThreeDElement />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}