import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SimilarProducts() {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Articles similaires</h2>
        <div className="flex gap-2">
          <button className="p-2 rounded-full border">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full border">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="aspect-square relative mb-2">
                <Image
                  src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=300"
                  alt="Similar product"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold">Table</h3>
              <p className="text-sm text-muted-foreground">159€</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}