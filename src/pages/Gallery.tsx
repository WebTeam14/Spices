import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroSpices from "@/assets/hero-spices.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600",
      title: "Turmeric Powder",
    },
    {
      url: "https://images.unsplash.com/photo-1599909533169-74a3b0834e0e?w=600",
      title: "Mixed Spices",
    },
    {
      url: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600",
      title: "Cinnamon Sticks",
    },
    {
      url: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600",
      title: "Chili Peppers",
    },
    {
      url: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600",
      title: "Cardamom",
    },
    {
      url: "https://images.unsplash.com/photo-1587132117376-05e82dd3c1d1?w=600",
      title: "Star Anise",
    },
    {
      url: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600",
      title: "Cumin Seeds",
    },
    {
      url: "https://images.unsplash.com/photo-1607672632458-9eb56696346b?w=600",
      title: "Saffron Threads",
    },
    {
      url: "https://images.unsplash.com/photo-1517646331032-9e8563c520a4?w=600",
      title: "Black Pepper",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section
        className="pt-32 pb-16 min-h-[60vh] bg-secondary bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${heroSpices})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Spice Gallery
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-white/80">
            Explore the vibrant colors and textures of our premium spice collection
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.title}
                className="relative group cursor-pointer overflow-hidden rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage.replace("w=600", "w=1200")}
              alt="Gallery image"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
