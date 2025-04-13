import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Globe, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌍</span>
              <span className="font-heading font-bold text-xl">EuroTrek</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label={t('footer.instagram')}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label={t('footer.twitter')}>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label={t('footer.facebook')}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label={t('footer.pinterest')}>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">{t('navbar.home')}</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">{t('navbar.about')}</Link></li>
              <li><Link href="/#paris" className="text-gray-300 hover:text-white transition-colors">{t('footer.parisCollection')}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">{t('navbar.contact')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">{t('footer.submitPhotos')}</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.privacyPolicy')}</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.termsOfUse')}</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.accessibility')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EuroTrek. {t('footer.copyright')}</p>
          <p className="mt-2">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
