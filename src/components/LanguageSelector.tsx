import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSelectorProps {
  compact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ compact = false }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt-BR' : 'en';
    i18n.changeLanguage(newLang);
  };

  if (compact) {
    return (
      <button
        onClick={toggleLanguage}
        className="p-2 rounded-md hover:bg-base-200 transition-colors flex items-center"
      >
        <span className="text-xl">
          {i18n.language === 'en' ? '🇺🇸' : '🇧🇷'}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 p-2 rounded-md hover:bg-base-200 transition-colors"
    >
      <span className="text-xl">
        {i18n.language === 'en' ? '🇺🇸' : '🇧🇷'}
      </span>
    </button>
  );
};