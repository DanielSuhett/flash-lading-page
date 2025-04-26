import React from 'react';
import { useTranslation } from 'react-i18next';

export const Faq: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-20 bg-base-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="join join-vertical w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="faq-accordion"/>
                <div className="collapse-title text-xl font-medium">
                  {t(`faq.questions.${index}.question`)}
                </div>
                <div className="collapse-content">
                  <p>{t(`faq.questions.${index}.answer`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};