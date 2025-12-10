import { Check, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import experienceImage from "@/assets/Products/About.png";

const Experience = () => {
  const features = [
    "Monitored crop info",
    "Monitored crop info",
    "Monitored crop info",
  ];

  return (
    <section className="py-20 px-4 bg-spice-cream/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with decorative border */}
          <div className="relative animate-fade-in">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            <div className="pl-8">
              <img
                src={experienceImage}
                alt="Fresh spices and ingredients"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Right side - Content */}
<div
  className="space-y-6 animate-fade-in"
  style={{ animationDelay: "0.2s" }}
>
  <div>
    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
      About <span className="text-primary">Us</span>
    </h2>

    <p className="text-muted-foreground leading-relaxed">
      Vardhaman Spices Food Co is a food processing company established in 1996. 
      We are mainly engaged in processing "Black Pepper", also known as the 
      "Black Gold" of South India, converting it into more than 20 premium 
      products widely used across food processing industries.
      <br /><br />
      Along with Black Pepper variants, we also manufacture the finest blend of 
      "Tea Masala" and "Dry Ginger Powder". We primarily process top-grade 
      Indian spices known worldwide for their superior quality.
      <br /><br />
      Additionally, we produce "premium handmade khakhras" — healthy roasted 
      Gujarati & Rajasthani snacks that are simply delicious and mouth-watering.
    </p>
  </div>

  {/* Features with checkmarks */}
  <div className="space-y-3">
    {features.map((feature, index) => (
      <div key={index} className="flex items-center gap-3">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
          <Check className="w-4 h-4 text-primary" strokeWidth={3} />
        </div>
        <span className="text-foreground font-medium">{feature}</span>
      </div>
    ))}
  </div>

  {/* Quality badge and button */}
  <div className="flex items-center gap-6 pt-4">
    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold">
      DISCOVER MORE
    </Button>

    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-foreground text-background">
      <div className="text-center">
        <Award className="w-8 h-8 mx-auto mb-1" />
        <span className="text-xs font-bold">QUALITY</span>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
