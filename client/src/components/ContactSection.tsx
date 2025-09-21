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
      href: "#",
      description: "Check out my repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      description: "Connect professionally"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:khan.hamiz@example.com",
      description: "khan.hamiz@example.com"
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Nashik, Maharashtra, India"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX"
    },
    {
      icon: Mail,
      label: "Email",
      value: "khan.hamiz@example.com"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and discussions about 
            data science, AI, and technology. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
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
                      data-testid="input-email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    data-testid="input-subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
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
                    data-testid="textarea-message"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" data-testid="button-send-message">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3" data-testid={`contact-${contact.label.toLowerCase()}`}>
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <contact.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{contact.label}</p>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="font-semibold mb-4">Social Media</h3>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="flex items-center space-x-3 hover-elevate p-3 rounded-lg transition-colors"
                        data-testid={`link-social-${social.label.toLowerCase()}`}
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <social.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{social.label}</p>
                          <p className="text-sm text-muted-foreground">{social.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">I'm interested in...</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Science Roles",
                    "AI/ML Projects",
                    "Research Collaboration",
                    "Internship Opportunities",
                    "Freelance Work",
                    "Tech Mentoring",
                    "Open Source",
                    "Networking"
                  ].map((interest, index) => (
                    <Badge key={index} variant="secondary" data-testid={`badge-interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}>
                      {interest}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
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