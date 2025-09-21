import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import ThreeDElement from "./ThreeDElement";

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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Data Science • AI • Machine Learning</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                    Khan
                  </span>
                  <br />
                  <span className="text-foreground">Hamiz</span>
                </h1>
                
                <div className="space-y-3">
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                    Computer Engineering student crafting 
                    <span className="text-primary font-semibold"> impactful, data-driven solutions</span> 
                    in a growth-focused environment
                  </p>
                  <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                    Passionate about leveraging <span className="text-accent font-medium">AI</span>, 
                    <span className="text-primary font-medium"> machine learning</span>, and 
                    <span className="text-accent font-medium"> data analytics</span> to solve real-world problems
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button 
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                data-testid="button-view-projects"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                size="lg"
                className="border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300"
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-110"
                data-testid="button-download-resume"
              >
                <Download className="h-5 w-5" />
              </Button>
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