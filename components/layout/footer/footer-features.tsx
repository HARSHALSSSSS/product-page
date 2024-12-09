import { Truck, Package, Clock, CreditCard } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Livraison & Reprise",
    description: "à votre domicile"
  },
  {
    icon: Truck,
    title: "Retriage",
    description: "gratuit et facile"
  },
  {
    icon: Clock,
    title: "Garantie de base",
    description: "sur tous les produits"
  },
  {
    icon: CreditCard,
    title: "Paiement & Financement",
    description: "options flexibles"
  }
];

export function FooterFeatures() {
  return (
    <div className="border-t border-b py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="h-8 w-8 mb-3 text-gray-600" />
              <h3 className="font-medium text-sm mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}