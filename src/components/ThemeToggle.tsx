// src/context/ThemeContext.tsx
'use client';
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// 1. Define context type
type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

// 2. Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Export provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  // ... (provider logic)
}

// 4. Export custom hook (critical step!)
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}