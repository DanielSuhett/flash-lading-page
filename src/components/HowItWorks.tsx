import React from 'react';
import { useTranslation } from 'react-i18next';
import { GitPullRequest, Key, Bot, CheckCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <GitPullRequest className="h-10 w-10 text-primary" />,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
    },
    {
      icon: <Key className="h-10 w-10 text-primary" />,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description'),
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-base-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <div className="badge badge-primary mb-2">{`Step ${index + 1}`}</div>
                <h3 className="card-title text-xl font-semibold">{step.title}</h3>
                <p className="text-base-content/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="card bg-base-100 shadow-sm overflow-hidden">
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold mb-4">
                {t('installation.title')}
              </h3>
              <p className="mb-6">{t('installation.instructions')}</p>
              <div className="mockup-code">
                <pre data-prefix="1"><code>name: Flash Review</code></pre>
                <pre data-prefix="2"><code></code></pre>
                <pre data-prefix="3"><code>on:</code></pre>
                <pre data-prefix="4"><code>  pull_request:</code></pre>
                <pre data-prefix="5"><code>    types: [opened, synchronize, reopened]</code></pre>
                <pre data-prefix="6"><code>    paths:</code></pre>
                <pre data-prefix="7"><code>      - '**.ts'</code></pre>
                <pre data-prefix="8"><code>      - '**.tsx'</code></pre>
                <pre data-prefix="9"><code></code></pre>
                <pre data-prefix="10"><code>jobs:</code></pre>
                <pre data-prefix="11"><code>  code-review:</code></pre>
                <pre data-prefix="12"><code>    runs-on: ubuntu-latest</code></pre>
                <pre data-prefix="13"><code>    steps:</code></pre>
                <pre data-prefix="14"><code>      - name: Checkout code</code></pre>
                <pre data-prefix="15"><code>        uses: actions/checkout@v3</code></pre>
                <pre data-prefix="16"><code>        with:</code></pre>
                <pre data-prefix="17"><code>          fetch-depth: 0</code></pre>
                <pre data-prefix="18"><code></code></pre>
                <pre data-prefix="19"><code>      - name: TypeScript Deep Code Review</code></pre>
                <pre data-prefix="20"><code>        uses: DanielSuhett/flash@v0.0.14</code></pre>
                <pre data-prefix="21"><code>        with:</code></pre>
                <pre data-prefix="22"><code>          github-token: secrets.GITHUB_TOKEN</code></pre>
                <pre data-prefix="23"><code>          gemini-api-key: secrets.GEMINI_API_KEY</code></pre>
                <pre data-prefix="24"><code>          gemini-model: 'gemini-2.0-flash'</code></pre>
                <pre data-prefix="25"><code>          auto-approve: true</code></pre>
              </div>
              <div className="mt-4">
                <button className="btn btn-sm btn-outline" onClick={() => {
                  navigator.clipboard.writeText(`name: Flash Review

on:
  pull_request:
    types: [opened, synchronize, reopened]
    paths:
      - '**.ts'
      - '**.tsx'

jobs:
  code-review:
    runs-on: ubuntu-latest
    steps:
      - name:  code
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: TypeScript Deep Code Review
        uses: DanielSuhett/flash@v0.0.14
        with:
          github-token: {{ secrets.GITHUB_TOKEN }}
          gemini-api-key: {{ secrets.GEMINI_API_KEY }}
          gemini-model: 'gemini-2.0-flash'
          auto-approve: true`);
                }}>
                  Copy to clipboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};