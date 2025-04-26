import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Github } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { FlashLogo } from './FlashLogo';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: t('navigation.features'), href: '#features' },
    { label: t('navigation.howItWorks'), href: '#how-it-works' },
    { label: t('navigation.pricing'), href: '#pricing' },
    { label: t('navigation.faq'), href: '#faq' },
  ];

  return (
    <nav className="sticky top-0 z-30 bg-base-100/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <FlashLogo className="h-8 w-8 mr-2" />
              <span className="text-lg font-bold">Flash</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pl-4">
                <LanguageSelector />
              </div>
              <div className="pl-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector compact />
            <ThemeToggle compact />
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-base-100 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-base-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/DanielSuhett/flash"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-base-200 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github size={16} className="mr-2" />
              {t('navigation.github')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};