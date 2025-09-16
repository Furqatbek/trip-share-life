import { Shield, DollarSign, Users, Clock, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "All drivers are verified with license checks and user ratings for your safety.",
    color: "text-green-600"
  },
  {
    icon: DollarSign,
    title: "Save Money",
    description: "Split fuel costs and save up to 70% compared to traveling alone.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Meet People",
    description: "Connect with like-minded travelers and make new friends on your journey.",
    color: "text-purple-600"
  },
  {
    icon: Clock,
    title: "Flexible Times",
    description: "Choose from multiple departure times that fit your schedule perfectly.",
    color: "text-orange-600"
  },
  {
    icon: MapPin,
    title: "Door to Door",
    description: "Get picked up and dropped off at convenient locations along the route.",
    color: "text-pink-600"
  },
  {
    icon: Star,
    title: "Rated Community",
    description: "Our rating system ensures quality experiences for both drivers and passengers.",
    color: "text-yellow-600"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose RideShare?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the community that's revolutionizing the way we travel. 
            Smart, safe, and social transportation for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-primary/20 mb-6`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;