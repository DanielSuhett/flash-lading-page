import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="hero min-h-[90vh] bg-base-200">
      <div className="hero-content text-center py-16 max-w-4xl">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('hero.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
            {t('hero.subtitle')}
          </h2>
          <div className="inline-block mb-4">
            <div className="badge badge-secondary gap-2 p-3 text-base-100">
              <Zap size={14} />
              {t('pricing.title')}
            </div>
          </div>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/DanielSuhett/flash" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <Github size={20} className="mr-2" />
              {t('hero.ctaPrimary')}
            </a>
            <a href="#how-it-works" className="btn btn-outline btn-lg">
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};