import Link from "next/link";
import Image from "next/image";

const sections = {
  "INFOS PRATIQUES": [
    "À propos",
    "Livraisons & Reprises",
    "Mode d'emploi"
  ],
  "LÉGAL": [
    "Mentions légales",
    "CGU",
    "CGV",
    "Politique de confidentialité"
  ],
  "MON COMPTE": [
    "Accéder à mon compte",
    "Ma liste d'envie",
    "Créer un compte",
    "Mode passe oublié"
  ]
};

export function FooterLinks() {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.svg" alt="Logo" width={120} height={40} className="mb-4" />
          </div>
          {Object.entries(sections).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-bold mb-4">NOUS SUIVRE</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}