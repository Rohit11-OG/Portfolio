import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_portfolio_headshot_fcf0eb51.png";

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
    <section className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <img
            src={profileImage}
            alt="Khan Hamiz"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20"
            data-testid="img-profile"
          />
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Khan Hamiz
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Computer Engineering student eager to build impactful, data-driven solutions in a growth-focused environment
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about leveraging AI, machine learning, and data analytics to solve real-world problems
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={scrollToProjects}
            size="lg"
            data-testid="button-view-projects"
          >
            View My Projects
          </Button>
          <Button 
            variant="outline" 
            onClick={scrollToContact}
            size="lg"
            data-testid="button-get-in-touch"
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-6 pt-8">
          <Button size="icon" variant="ghost" data-testid="link-github">
            <Github className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" data-testid="link-linkedin">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" data-testid="link-email">
            <Mail className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" data-testid="button-download-resume">
            <Download className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}