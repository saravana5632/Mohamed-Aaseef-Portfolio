import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Theme {
  id: number;
  name: string;
  primary: string;
  primaryRgb: string;
  secondary: string;
  secondaryRgb: string;
  accent: string;
  accentRgb: string;
}

export const THEMES: Theme[] = [
  {
    id: 1,
    name: 'Obsidian Scarlet',
    primary: '#EF4444',
    primaryRgb: '239, 68, 68',
    secondary: '#991B1B',
    secondaryRgb: '153, 27, 27',
    accent: '#FF2E3B',
    accentRgb: '255, 46, 59',
  },
  {
    id: 2,
    name: 'Crimson Eclipse',
    primary: '#DC2626',
    primaryRgb: '220, 38, 38',
    secondary: '#7F1D1D',
    secondaryRgb: '127, 29, 29',
    accent: '#F87171',
    accentRgb: '248, 113, 113',
  },
  {
    id: 3,
    name: 'Stealth Ruby',
    primary: '#FF1E27',
    primaryRgb: '255, 30, 39',
    secondary: '#881337',
    secondaryRgb: '136, 19, 55',
    accent: '#FF4D5A',
    accentRgb: '255, 77, 90',
  },
  {
    id: 4,
    name: 'Carbon Crimson',
    primary: '#E11D48',
    primaryRgb: '225, 29, 72',
    secondary: '#9F1239',
    secondaryRgb: '159, 18, 57',
    accent: '#FB7185',
    accentRgb: '251, 113, 133',
  },
  {
    id: 5,
    name: 'Deep Flame Red',
    primary: '#B91C1C',
    primaryRgb: '185, 28, 28',
    secondary: '#450A0A',
    secondaryRgb: '69, 10, 10',
    accent: '#EF4444',
    accentRgb: '239, 68, 68',
  },
];

interface ThemeContextType {
  currentTheme: Theme;
  currentThemeIndex: number;
  selectTheme: (index: number) => void;
  isAutoCycling: boolean;
  setIsAutoCycling: (auto: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  introComplete: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, introComplete }) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  const currentTheme = THEMES[currentThemeIndex];

  // Apply CSS Variables to :root on theme change
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', currentTheme.primary);
    root.style.setProperty('--theme-primary-rgb', currentTheme.primaryRgb);
    root.style.setProperty('--theme-secondary', currentTheme.secondary);
    root.style.setProperty('--theme-secondary-rgb', currentTheme.secondaryRgb);
    root.style.setProperty('--theme-accent', currentTheme.accent);
    root.style.setProperty('--theme-accent-rgb', currentTheme.accentRgb);
  }, [currentThemeIndex, currentTheme]);

  // Automatic 10-second theme cycle (only runs when introComplete is true)
  useEffect(() => {
    if (!introComplete || !isAutoCycling) return;

    const interval = setInterval(() => {
      setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % THEMES.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [introComplete, isAutoCycling, currentThemeIndex]);

  const selectTheme = (index: number) => {
    if (index >= 0 && index < THEMES.length) {
      setCurrentThemeIndex(index);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        currentThemeIndex,
        selectTheme,
        isAutoCycling,
        setIsAutoCycling,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
