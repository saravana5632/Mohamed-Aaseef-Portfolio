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
    name: 'Cyber Blue + Red',
    primary: '#168BFF',
    primaryRgb: '22, 139, 255',
    secondary: '#FF1744',
    secondaryRgb: '255, 23, 68',
    accent: '#00E5FF',
    accentRgb: '0, 229, 255',
  },
  {
    id: 2,
    name: 'Neon Purple + Cyan',
    primary: '#8B5CF6',
    primaryRgb: '139, 92, 246',
    secondary: '#00E5FF',
    secondaryRgb: '0, 229, 255',
    accent: '#C084FC',
    accentRgb: '192, 132, 252',
  },
  {
    id: 3,
    name: 'Crimson + Magenta + Blue',
    primary: '#FF1744',
    primaryRgb: '255, 23, 68',
    secondary: '#FF00AA',
    secondaryRgb: '255, 0, 170',
    accent: '#168BFF',
    accentRgb: '22, 139, 255',
  },
  {
    id: 4,
    name: 'Neon Cyan + Blue + Violet',
    primary: '#00E5FF',
    primaryRgb: '0, 229, 255',
    secondary: '#168BFF',
    secondaryRgb: '22, 139, 255',
    accent: '#8B5CF6',
    accentRgb: '139, 92, 246',
  },
  {
    id: 5,
    name: 'Neon Orange + Red + Purple',
    primary: '#FF6B00',
    primaryRgb: '255, 107, 0',
    secondary: '#FF1744',
    secondaryRgb: '255, 23, 68',
    accent: '#A855F7',
    accentRgb: '168, 85, 247',
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
