import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "wouter";
import {
  FaGlobe,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaFacebookMessenger,
} from "react-icons/fa";

interface FooterProps {
  onParisLinkClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onParisLinkClick }) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const goToHome = () => {
    setLocation("/");
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };
  const scrollToParis = () => {
    const element = document.getElementById("paris");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Przewijaj po załadowaniu strony, jeżeli jest hash w URL
    if (window.location.hash === "#paris") {
      scrollToParis();
    }
  }, []);

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
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label={t("footer.instagram")}
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label={t("footer.twitter")}
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label={t("footer.facebook")}
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label={t("footer.linkedin")}
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://m.me/profile.php?id=100011937734013"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label={t("footer.messenger")}
              >
                <FaFacebookMessenger className="h-5 w-5" />{" "}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={goToHome}
                >
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={goToHome}
                >
                  {t("navbar.about")}
                </Link>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={onParisLinkClick}
                >
                  {t("footer.parisCollection")}
                </button>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={goToHome}
                >
                  {t("navbar.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={goToHome}
                >
                  {t("footer.submitPhotos")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.termsOfUse")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.accessibility")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2021 - {new Date().getFullYear()} EuroTrek Gdańsk.&nbsp;
            {t("footer.copyright")}
          </p>
          <p className="mt-2">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
