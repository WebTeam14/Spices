import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { Package, MapPin, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDialog = ({ product, open, onOpenChange }: ProductDialogProps) => {
  if (!product) return null;

  const descriptionLines =
    product.description
      ?.split("\n")
      .map((line) => line.trim())
      .filter(Boolean) || [];

  const featureLines = descriptionLines
    .filter((line) => line.startsWith("-"))
    .map((line) => line.replace(/^-+\s*/, ""));

  const cleanedDescription = descriptionLines
    .filter(
      (line) =>
        !line.startsWith("-") &&
        !/^key features:?$/i.test(line)
    )
    .join("\n");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-[85vh] overflow-y-auto p-4 md:p-6 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-semibold text-center md:text-left">
            {product.name}
          </DialogTitle>

          <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
            <Badge variant="secondary" className="capitalize">{product.category}</Badge>
            <Badge variant="outline">{product.weight}</Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {product.origin}
            </Badge>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 items-start">
          {/* Left */}
          <div className="space-y-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-64 md:h-80 object-cover rounded-lg"
            />

            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary/70">
                <Package className="w-4 h-4" />
                <span>{product.weight}</span>
              </div>

              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary/70">
                <MapPin className="w-4 h-4" />
                <span>{product.origin}</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm w-fit">
              <Check className="w-4 h-4 text-primary" />
              <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-base">Category</h4>
              <p className="text-muted-foreground">{product.category}</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-base">Description</h4>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {cleanedDescription}
              </p>

              {featureLines.length > 0 && (
                <div className="space-y-1">
                  <h5 className="font-semibold text-sm">Key Features</h5>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {featureLines.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {product.fullDescription && product.fullDescription !== product.description && (
                <p className="text-muted-foreground leading-relaxed">
                  {product.fullDescription}
                </p>
              )}
            </div>

            <Button
              className="w-full mt-3"
              size="lg"
              onClick={() => (window.location.href = "/enquiry-form")}
            >
              Enquiry / Place Order
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
