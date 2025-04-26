import React from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, Cpu, Check } from 'lucide-react';

export const ModelShowcase: React.FC = () => {
  const { t } = useTranslation();

  const models = [
    {
      key: 'gemini25Pro',
      icon: <Cpu className="w-12 h-12 text-primary" />,
      badgeColor: 'badge-primary',
    },
    {
      key: 'gemini25Flash',
      icon: <Zap className="w-12 h-12 text-secondary" />,
      badgeColor: 'badge-secondary',
    },
    {
      key: 'gemini20Flash',
      icon: <Zap className="w-12 h-12 text-accent" />,
      badgeColor: 'badge-accent',
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('models.title')}
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            {t('models.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {models.map((model) => (
            <div
              key={model.key}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="card-body">
                <div className="flex flex-col items-center mb-6">
                  {model.icon}
                  <h3 className="text-2xl font-bold mt-4 text-center">
                    {t(`models.${model.key}.name`)}
                  </h3>
                  <div className={`badge ${model.badgeColor} mt-2`}>
                    {t(`models.${model.key}.note`)}
                  </div>
                </div>
                <p className="text-center text-lg mb-6">
                  {t(`models.${model.key}.description`)}
                </p>
                <div className="space-y-3">
                  {t(`models.${model.key}.features`, { returnObjects: true }).map((feature: string, i: number) => (
                    <div key={i} className="flex items-start">
                      <Check size={20} className="text-success mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};