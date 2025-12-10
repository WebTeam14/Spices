import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Target, Heart } from "lucide-react";
import spicesExperience from "@/assets/hero-spices.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "We source only the finest spices from trusted farms around the world.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "To bring authentic, premium spices to kitchens everywhere.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning blends crafted by expert spice masters.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a global community of spice enthusiasts and home chefs.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section
        className="pt-32 pb-16 min-h-[60vh] bg-secondary bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${spicesExperience})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            About Masala Spices
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-white/80">
            Discover our journey of bringing the world's finest spices to your kitchen
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={spicesExperience}
                alt="Our spice collection"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                About Us
              </h2>
              <p className="text-muted-foreground mb-4">
               Vardhaman Spices Food Co is a food processing company which had started in the year 1996.
               We are mainly into processing of Black Pepper, which is also known as the Black Gold in 
               the southern part of India, into more than 20 different items which are then further use
               in food processing industries.
              </p>
              <p className="text-muted-foreground mb-4">
              Along with that we also manufacture finest blend of Tea Masala and Dry Ginger Powder. 
              We primarily process Indian grade of spices which are of the best grade around the world.
              </p>
              <p className="text-muted-foreground">
              We also manufacture best quality premium handmade khakhras. These healthy roasted gujrati & 
              rajasthani snack are simply delicious and mouthwatering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-background p-6 rounded-xl text-center animate-fade-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
