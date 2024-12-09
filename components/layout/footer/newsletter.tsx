"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <div className="bg-[#F8F9FA] py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-lg font-semibold mb-2">S'inscrire & économiser 15%</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Inscrivez-vous à notre newsletter et profitez de 15% de réduction sur votre première commande
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1"
            />
            <Button>S'inscrire</Button>
          </form>
        </div>
      </div>
    </div>
  );
}