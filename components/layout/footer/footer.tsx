import { FeaturesSection } from "./features-section";
import { NewsletterSection } from "./newsletter-section";
import { FooterLinks } from "./footer-links";

export function Footer() {
  return (
    <footer>
      <FeaturesSection />
      <NewsletterSection />
      <FooterLinks />
    </footer>
  );
}