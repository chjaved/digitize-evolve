import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStartup Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "Bitwork transformed our online presence completely. Their AI automation solutions saved us 40+ hours per week, and our new website increased conversions by 250%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, E-commerce Plus",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "The team's expertise in both web development and AI is unmatched. They delivered a custom solution that perfectly fits our business needs and exceeded all expectations.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, Growth Co.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Professional, innovative, and results-driven. Their AI chatbot alone has handled 80% of our customer inquiries, allowing our team to focus on strategic growth.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-muted/30">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our satisfied clients have to say about 
          our web development and AI automation services.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index}
            className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-primary/30"
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-muted-foreground leading-relaxed mb-6 pl-6">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span>5.0 average rating</span>
          </div>
          <span>•</span>
          <span>50+ happy clients</span>
          <span>•</span>
          <span>100% project success rate</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;