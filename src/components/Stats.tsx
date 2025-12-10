import { Users, Trophy, Leaf, Users2, Phone } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const Stats = () => {
  const progressData = [
    { label: "SPICES", value: 99 },
    { label: "EXPERIENCE", value: 80 },
    { label: "ANALYSIS", value: 50 },
  ];

  const statsData = [
    { icon: Users, value: "2000+", label: "Happy Clients" },
    { icon: Trophy, value: "600+", label: "Awards Won" },
    { icon: Leaf, value: "1500+", label: "Spices" },
    { icon: Users2, value: "400+", label: "Members" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Info and Progress bars */}
          <div className="relative animate-fade-in">
            <div className="space-y-8">
              {/* Header with background */}
              <div className="relative rounded-lg overflow-hidden h-48 flex items-center justify-center bg-gradient-to-r from-spice-brown/90 to-spice-brown/70">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596040033229-a0b9b9e6e8c5?w=800')] bg-cover bg-center opacity-30"></div>
                <div className="relative z-10 text-center space-y-3">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                    High Quality <span className="text-primary">spices</span>
                  </h2>
                  <p className="text-white text-lg font-semibold">
                    And Delivery Services
                  </p>
                  <div className="flex items-center justify-center gap-2 text-white">
                    <Phone className="w-5 h-5" />
                    <span className="text-sm">Contact us: (91769) 672 938</span>
                  </div>
                </div>
              </div>

              {/* Progress bars */}
              <div className="space-y-6 bg-background p-6 rounded-lg border border-border">
                {progressData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {item.value}%
                      </span>
                    </div>
                    <Progress value={item.value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Stats cards */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {statsData.map((stat, index) => (
              <Card
                key={index}
                className="p-6 bg-spice-brown text-white hover:scale-105 transition-transform duration-300 border-0"
              >
                <div className="space-y-3">
                  <stat.icon className="w-10 h-10 text-primary" />
                  <div>
                    <p className="text-3xl font-bold font-display">{stat.value}</p>
                    <p className="text-sm text-white/90 font-medium">{stat.label}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
