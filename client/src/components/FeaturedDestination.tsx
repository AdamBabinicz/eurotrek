import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const FeaturedDestination = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">{t('featured.title')}</h2>
          <div className="h-1 w-20 bg-accent mb-6"></div>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            {t('featured.description1')}
          </p>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            {t('featured.description2')}
          </p>
          <Link href="/#paris" className="inline-flex items-center text-primary font-medium hover:underline">
            {t('featured.exploreLink')} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt={t('featured.image1Alt')} 
              className="rounded-lg shadow-md aspect-[3/4] object-cover w-full h-full" 
            />
            <img 
              src="https://images.unsplash.com/photo-1520939817895-060bdaf4bc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt={t('featured.image2Alt')} 
              className="rounded-lg shadow-md aspect-[3/4] object-cover w-full h-full" 
            />
            <img 
              src="https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt={t('featured.image3Alt')} 
              className="rounded-lg shadow-md aspect-[3/4] object-cover w-full h-full" 
            />
            <img 
              src="https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt={t('featured.image4Alt')} 
              className="rounded-lg shadow-md aspect-[3/4] object-cover w-full h-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestination;
