import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const features = t('pricing.features', { returnObjects: true }) as string[];

  return (
    <section id="pricing" className="py-20 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body text-center">
              <h3 className="text-3xl font-bold mb-2">{t('pricing.free.name')}</h3>
              <p className="text-2xl font-bold text-primary mb-6">{t('pricing.free.price')}</p>
              <p className="text-lg mb-8">
                {t('pricing.free.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check size={20} className="text-success mr-2 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a 
                href="https://github.com/DanielSuhett/flash"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                {t('pricing.free.buttonText')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};