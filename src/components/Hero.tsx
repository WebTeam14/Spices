import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/HeroVid.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={heroVideo

            
          }   // <-- your video file path
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 animate-fade-in">
          Spices Brings Taste
          <br />
          To Your <span className="text-primary">Kitchen</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Discover authentic flavors from around the world. Premium quality spices 
          and masala blends to elevate every meal you create.
        </p>

        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg animate-fade-in shadow-lg hover:shadow-xl transition-all"
          style={{ animationDelay: "0.2s" }}
        >
          View Our Products
        </Button>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <button className="relative group">
          <div className="p-4 bg-primary hover:bg-primary/90 rounded-full shadow-lg transition-all">
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
          </div>
          
          {/* Chat Popup */}
          <div className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-xl p-4 w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
            <p className="text-sm text-foreground font-medium">
              Hi! What can I do for you?
            </p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
