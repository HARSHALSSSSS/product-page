import Image from "next/image";

const features = [
  {
    icon: "/icons/delivery.svg",
    title: "Livraison & Reprise",
    description: "Selon vos besoins"
  },
  {
    icon: "/icons/cleaning.svg",
    title: "Nettoyage",
    description: "Selon vos besoins"
  },
  {
    icon: "/icons/cart.svg",
    title: "Commande Illimitée",
    description: "Tout est possible"
  },
  {
    icon: "/icons/transport.svg",
    title: "Transport & Enlèvement",
    description: "On s'occupe de tout"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-2 text-2xl font-medium">
          On s'occupe de <span className="text-[#40E0D0]">tout</span>
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image src={feature.icon} alt={feature.title} width={48} height={48} />
              </div>
              <h3 className="font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}