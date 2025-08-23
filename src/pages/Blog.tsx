import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, User, Search, TrendingUp } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI in Business Automation",
    excerpt: "Explore how artificial intelligence is revolutionizing business processes and what it means for your company's future.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    category: "AI Trends",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    featured: true
  },
  {
    title: "Web Development Best Practices in 2024",
    excerpt: "Stay ahead with the latest web development trends, frameworks, and optimization techniques for modern applications.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
    category: "Web Development",
    author: "Marcus Rodriguez",
    date: "March 10, 2024",
    readTime: "6 min read",
    featured: true
  },
  {
    title: "How Chatbots Are Transforming Customer Service",
    excerpt: "Real-world examples of how AI chatbots are improving customer satisfaction and reducing operational costs.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    category: "Customer Service",
    author: "Alex Thompson",
    date: "March 5, 2024",
    readTime: "5 min read",
    featured: false
  },
  {
    title: "E-commerce Optimization: A Complete Guide",
    excerpt: "Proven strategies to increase your online store's conversion rates and maximize revenue growth.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    category: "E-commerce",
    author: "Emily Davis",
    date: "February 28, 2024",
    readTime: "10 min read",
    featured: false
  },
  {
    title: "Process Automation: ROI Calculator Guide",
    excerpt: "Learn how to calculate the return on investment for your automation projects with our comprehensive guide.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "Automation",
    author: "Sarah Chen",
    date: "February 20, 2024",
    readTime: "7 min read",
    featured: false
  },
  {
    title: "Building Scalable SaaS Applications",
    excerpt: "Essential architecture patterns and technologies for creating SaaS platforms that grow with your business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "SaaS",
    author: "Marcus Rodriguez",
    date: "February 15, 2024",
    readTime: "12 min read",
    featured: false
  }
];

const categories = ["All", "AI Trends", "Web Development", "Customer Service", "E-commerce", "Automation", "SaaS"];

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay ahead of the curve with insights on AI, web development, automation, 
            and digital transformation strategies.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>
            <Button variant="hero">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold">Featured Articles</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-smooth">
                  {post.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{post.category}</Badge>
                  <Button variant="ghost" size="sm" className="group">
                    Read More
                    <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button 
              key={category} 
              variant={index === 0 ? "hero" : "ghost-glow"} 
              size="sm"
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">All Articles</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="outline" className="bg-background/90 backdrop-blur-sm text-xs">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-lg mb-2 group-hover:text-primary transition-smooth line-clamp-2">
                  {post.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <Button variant="outline" size="sm" className="w-full group">
                  Read Article
                  <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest insights on AI, web development, and digital transformation 
            delivered to your inbox weekly.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <Input 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button variant="hero" className="group">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Join 1,000+ professionals already subscribed. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">More Resources</h2>
          <p className="text-lg text-muted-foreground">
            Explore our additional resources to accelerate your digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Free AI Assessment",
              description: "Get a personalized analysis of AI opportunities for your business.",
              cta: "Start Assessment"
            },
            {
              title: "ROI Calculator",
              description: "Calculate potential returns from automation and AI implementation.",
              cta: "Calculate ROI"
            },
            {
              title: "Case Studies",
              description: "Detailed success stories from our client transformations.",
              cta: "View Cases"
            }
          ].map((resource, index) => (
            <Card 
              key={index} 
              className="text-center p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                <p className="text-muted-foreground mb-6">{resource.description}</p>
                <Button variant="outline" className="group">
                  {resource.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;