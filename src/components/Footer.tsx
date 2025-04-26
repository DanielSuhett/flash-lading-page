import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlashLogo } from './FlashLogo';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-base-300 text-base-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer py-10">
          <div>
            <div className="flex items-center mb-4">
              <FlashLogo className="h-8 w-8 mr-2" />
              <span className="text-lg font-bold">Flash</span>
            </div>
            <p className="max-w-xs">
              AI-powered code review for TypeScript Pull Requests using Google's Gemini AI.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <span className="footer-title">Product</span> 
            <a href="#features" className="link link-hover">Features</a> 
            <a href="#how-it-works" className="link link-hover">How it works</a> 
            <a href="#pricing" className="link link-hover">Pricing</a> 
            <a href="#faq" className="link link-hover">FAQ</a>
          </div>
          <div>
            <span className="footer-title">Legal</span> 
            <a href="#" className="link link-hover">{t('footer.links.terms')}</a> 
            <a href="#" className="link link-hover">{t('footer.links.privacy')}</a> 
            <a href="#" className="link link-hover">Cookie policy</a>
          </div>
        </div>
        <div className="py-6 border-t border-base-content/10 text-center md:text-left">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};