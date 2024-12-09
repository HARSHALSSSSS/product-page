import { ProductImage } from "@/components/ui/product-image";
import { SimilarProducts } from "@/components/similar-products";
import { ProductFeatures } from "@/components/product-features";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  const productImages = [
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800",
    "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800",
    "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=800",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ProductImage images={productImages} />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">Chaise - piètement à patins</h1>
          <p className="text-2xl font-semibold mb-6">39.95€</p>
          
          <div className="space-y-4 mb-8">
            <p className="text-gray-600">
              Design élégant et moderne, parfaite adaptation à tout type d'intérieur.
              Structure robuste et confortable pour un usage quotidien.
            </p>
            
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Ajouter au panier
              </Button>
            </div>
          </div>

          <ProductFeatures />
        </div>
      </div>

      <SimilarProducts />
    </div>
  );
}