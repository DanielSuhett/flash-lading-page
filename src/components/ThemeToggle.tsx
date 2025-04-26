import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  compact?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ compact = false }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  if (compact) {
    return (
      <label className="swap swap-rotate">
        <input 
          type="checkbox" 
          checked={theme === 'light'}
          onChange={toggleTheme}
          aria-label={theme === 'light' ? t('themeToggle.dark') : t('themeToggle.light')}
        />
        <Sun className="swap-on w-5 h-5" />
        <Moon className="swap-off w-5 h-5" />
      </label>
    );
  }

  return (
    <label className="swap swap-rotate">
      <input 
        type="checkbox" 
        checked={theme === 'light'}
        onChange={toggleTheme}
      />
      <Sun className="swap-on w-5 h-5" />
      <Moon className="swap-off w-5 h-5" />
    </label>
  );
};