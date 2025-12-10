import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import ProductDialog from "@/components/ProductDialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Filter } from "lucide-react";
import heroSpices from "@/assets/hero-spices.jpg";

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...new Set(products.map((p) => p.category))];
  
  // Custom filter categories
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "pepper-powder", label: "Pepper Powder" },
    { value: "pepper-cracks", label: "Pepper Cracks" },
    { value: "pepper-skin", label: "Pepper Skin" },
  ];

  type ShopProduct = Product & { isNew?: boolean };

  const filteredProducts: ShopProduct[] = (() => {
    if (selectedCategory === "all") {
      return products;
    }
    
    if (selectedCategory === "pepper-powder") {
      return products.filter((p) => 
        p.name.toLowerCase().includes("powder") || 
        (p.name.toLowerCase().includes("coarse") && !p.name.toLowerCase().includes("crack"))
      );
    }
    
    if (selectedCategory === "pepper-cracks") {
      return products.filter((p) => 
        p.category === "Pepper Cracks" || 
        p.name.toLowerCase().includes("crack")
      );
    }
    
    if (selectedCategory === "pepper-skin") {
      return products.filter((p) => 
        p.category === "Pepper Skin" || 
        p.name.toLowerCase().includes("skin") ||
        p.name.toLowerCase().includes("turfal")
      );
    }
    
    // Fallback to original category filter
    return products.filter((p) => p.category === selectedCategory);
  })();

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
            Our Spice Shop
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-white/80">
            Browse our complete collection of premium spices and blends
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter:</span>
            </div>
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant={selectedCategory === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(option.value)}
                className="capitalize"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group cursor-pointer overflow-hidden border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {product.description}
                  </p>
                  <div className="mt-3 flex justify-end">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProductDialog
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      />

      <Footer />
    </div>
  );
};

export default Shop;
