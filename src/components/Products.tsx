import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import ProductDialog from "./ProductDialog";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display mb-4">Our Products</h2>
          <p className="text-muted-foreground">"""""""""""""</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleProductClick(product)}
                >
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] overflow-hidden rounded-t-lg bg-secondary">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>

      <ProductDialog
        product={selectedProduct}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
    
  );
};

export default Products;
