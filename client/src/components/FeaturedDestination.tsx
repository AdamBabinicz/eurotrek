import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import React, { forwardRef, useRef } from "react";

interface FeaturedDestinationProps {}

const FeaturedDestination = forwardRef<HTMLElement, FeaturedDestinationProps>(
  (props, ref) => {
    const { t } = useTranslation();
    const parisSectionRef = useRef(null);

    return (
      <section id="paris" ref={ref} className="py-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              {t("featured.title")}
            </h2>
            <div className="h-1 w-20 bg-accent mb-6"></div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {t("featured.description1")}
            </p>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              {t("featured.description2")}
            </p>
            <Link
              href="/#paris"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              {t("featured.exploreLink")}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="../../assets/niemcy-francja/1.avif"
                alt={t("featured.image1Alt")}
                className="rounded-lg shadow-md aspect-[3/4] object-cover w-full h-full"
              />
              <img
                src="../../assets/niemcy-francja/2.avif"
                alt={t("featured.image2Alt")}
                className="rounded-lg shadow-md aspect-[3/4] object-cover w-full h-full"
              />
              <img
                src="../../assets/niemcy-francja/3.avif"
                alt={t("featured.image3Alt")}
                className="rounded-lg shadow-md aspect-[3/4] object-cover w-full h-full"
              />
              <img
                src="../../assets/niemcy-francja/4.avif"
                alt={t("featured.image4Alt")}
                className="rounded-lg shadow-md aspect-[3/4] object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

FeaturedDestination.displayName = "FeaturedDestination";
export default FeaturedDestination;
