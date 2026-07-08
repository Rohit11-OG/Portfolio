import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Implement actual form submission
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Rohit11-OG",
      description: "Check out my repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohit-mandwade-805979319",
      description: "Connect professionally"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rohitm7298@gmail.com",
      description: "rohitm7298@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+919322168290",
      description: "+91 9322168290"
    }
  ];


  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-wave">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-up stagger-1">
            I'm always Interested in New Opportunities, Collaborations, and Discussions about 
            Data Science, AI, and Technology. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-elevate magnetic-button transition-all duration-500 border-primary/20 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 animate-slide-in-left stagger-2">
            <CardHeader className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-50"></div>
              <CardTitle className="text-2xl relative z-10 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent animate-slide-in-up">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="animate-slide-in-left stagger-1">
                    <label htmlFor="name" className="text-sm font-medium mb-2 block text-primary">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                      className="magnetic-button transition-all duration-300 border-primary/20 focus:border-primary hover:border-primary/40"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="animate-slide-in-right stagger-1">
                    <label htmlFor="email" className="text-sm font-medium mb-2 block text-primary">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="magnetic-button transition-all duration-300 border-primary/20 focus:border-primary hover:border-primary/40"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                <div className="animate-slide-in-up stagger-2">
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block text-primary">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="magnetic-button transition-all duration-300 border-primary/20 focus:border-primary hover:border-primary/40"
                    data-testid="input-subject"
                  />
                </div>
                <div className="animate-slide-in-up stagger-3">
                  <label htmlFor="message" className="text-sm font-medium mb-2 block text-primary">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                    className="magnetic-button transition-all duration-300 border-primary/20 focus:border-primary hover:border-primary/40"
                    data-testid="textarea-message"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full magnetic-button button-ripple bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-500 shadow-lg hover:shadow-xl animate-glow animate-slide-in-up stagger-4" 
                  data-testid="button-send-message"
                >
                  <Send className="h-4 w-4 mr-2 animate-pulse" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="magnetic-button transition-all duration-500 border-accent/20 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-accent/5 animate-slide-in-right stagger-2">
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-50"></div>
                <CardTitle className="text-2xl relative z-10 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent animate-slide-in-up">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="pt-6 border-t border-border animate-slide-in-up stagger-4">
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`flex items-center space-x-3 hover-elevate p-3 rounded-lg transition-all duration-500 magnetic-button animate-slide-in-left stagger-${Math.min(index + 5, 10)} group relative overflow-hidden`}
                        data-testid={`link-social-${social.label.toLowerCase()}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                          <social.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div className="relative z-10">
                          <p className="font-medium group-hover:text-accent transition-colors duration-300">{social.label}</p>
                          <p className="text-sm text-muted-foreground">{social.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="magnetic-button transition-all duration-500 border-primary/20 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 animate-slide-in-right stagger-6">
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50"></div>
                <h3 className="font-semibold mb-4 text-primary relative z-10 animate-slide-in-up">I'm interested in...</h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {[
                    "Data Science Roles",
                    "AI/ML Projects",
                    "Research Collaboration",
                    "Internship Opportunities",
                    "Freelance Work",
                    
                    "Open Source",
                    "Networking"
                  ].map((interest, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className={`animate-bounce-in magnetic-button hover:bg-primary/20 hover:text-primary transition-all duration-300 stagger-${Math.min(index + 1, 10)}`}
                      data-testid={`badge-interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 relative z-10 animate-slide-in-up stagger-4">
                  Whether you have a project in mind, want to discuss technology trends, 
                  or explore collaboration opportunities, I'd love to hear from you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}