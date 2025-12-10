import { Package, Leaf, Sun, Wheat, Gift, Sparkles, Sprout, Mountain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "Agro", icon: Package, badge: "All Spices" },
  { name: "Turmeric", icon: Leaf, badge: "All Spices" },
  { name: "Seasonal Agro", icon: Sun, badge: "All Spices" },
  { name: "Arya", icon: Wheat, badge: "All Spices" },
  { name: "Masalas Garam", icon: Gift, badge: "All Spices" },
  { name: "Generic", icon: Sparkles, badge: "All Spices" },
  { name: "Spicy & Herbs", icon: Sprout, badge: "All Spices" },
  { name: "Generic", icon: Mountain, badge: "All Spices" },
];

const Categories = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 animate-fade-in bg-spice-cream border-0"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
                <div className="p-6 rounded-lg bg-background/50 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-foreground text-center">
                  {category.name}
                </h3>
                <Badge 
                  variant="secondary" 
                  className="bg-accent/80 text-accent-foreground hover:bg-accent"
                >
                  {category.badge}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;