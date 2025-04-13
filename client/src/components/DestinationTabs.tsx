import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import PhotoGrid from "./PhotoGrid";
import { destinations } from "@/data/destinations";
import { photos } from "@/data/photos";

const DestinationTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { t } = useTranslation();

  return (
    <section className="py-10 container mx-auto px-4" id="destinations">
      <div className="mb-8 text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-2">{t('destinations.exploreTitle')}</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t('destinations.exploreDescription')}</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label={t('destinations.ariaLabel')}>
        <Button
          variant={activeTab === "all" ? "default" : "outline"}
          className={activeTab === "all" ? "" : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"}
          onClick={() => setActiveTab("all")}
          role="tab"
          aria-selected={activeTab === "all"}
          aria-controls="all-tab"
        >
          {t('destinations.allDestinations')}
        </Button>
        
        {destinations.map((destination) => (
          <Button
            key={destination.id}
            variant={activeTab === destination.id ? "default" : "outline"}
            className={activeTab === destination.id ? "" : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"}
            onClick={() => setActiveTab(destination.id)}
            role="tab"
            aria-selected={activeTab === destination.id}
            aria-controls={`${destination.id}-tab`}
            id={destination.id}
          >
            {t(`destinations.${destination.id}`)}
          </Button>
        ))}
      </div>
      
      <div 
        id={`${activeTab}-tab`} 
        role="tabpanel" 
        aria-labelledby={activeTab}
      >
        <PhotoGrid photos={photos} city={activeTab === "all" ? undefined : activeTab} />
      </div>
      
      <div className="mt-8 text-center">
        <Button className="px-6 py-3">
          {t('destinations.loadMore')}
        </Button>
      </div>
    </section>
  );
};

export default DestinationTabs;
