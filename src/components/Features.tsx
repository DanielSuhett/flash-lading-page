import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrainCircuit, Code, LayoutGrid, GitPullRequestDraft, Settings, Languages } from 'lucide-react';

export const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      title: t('features.intelligentCodeAnalysis.title'),
      description: t('features.intelligentCodeAnalysis.description')
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: t('features.smartIndexing.title'),
      description: t('features.smartIndexing.description')
    },
    {
      icon: <LayoutGrid className="h-8 w-8 text-primary" />,
      title: t('features.contextAwareReviews.title'),
      description: t('features.contextAwareReviews.description')
    },
    {
      icon: <GitPullRequestDraft className="h-8 w-8 text-primary" />,
      title: t('features.automatedWorkflow.title'),
      description: t('features.automatedWorkflow.description')
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: t('features.configurableReviewProcess.title'),
      description: t('features.configurableReviewProcess.description')
    },
    {
      icon: <Languages className="h-8 w-8 text-primary" />,
      title: t('features.multiLanguageSupport.title'),
      description: t('features.multiLanguageSupport.description')
    }
  ];

  return (
    <section id="features" className="py-20 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="card-body">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="card-title text-xl font-semibold">{feature.title}</h3>
                <p className="text-base-content/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};