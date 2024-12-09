import { Check, Truck, RefreshCw, Shield } from "lucide-react";

export function ProductFeatures() {
  const features = [
    {
      icon: Truck,
      title: "Livraison à domicile",
      description: "Livraison rapide et sécurisée"
    },
    {
      icon: RefreshCw,
      title: "Retours gratuits",
      description: "30 jours pour changer d'avis"
    },
    {
      icon: Shield,
      title: "Garantie 2 ans",
      description: "Protection complète"
    },
    {
      icon: Check,
      title: "Service client",
      description: "Support 7j/7"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b my-8">
      {features.map((feature, i) => (
        <div key={i} className="text-center">
          <feature.icon className="w-6 h-6 mx-auto mb-2" />
          <h3 className="font-semibold text-sm">{feature.title}</h3>
          <p className="text-xs text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}