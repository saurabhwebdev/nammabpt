/**
 * Centralized Color System
 * 
 * This file contains all color definitions for the application.
 * Use these constants instead of hardcoded color values throughout the app.
 */

export const colors = {
  // Main app colors
  primary: {
    50: 'hsl(250, 100%, 97%)',
    100: 'hsl(250, 95%, 94%)',
    200: 'hsl(250, 90%, 89%)',
    300: 'hsl(250, 85%, 79%)',
    400: 'hsl(250, 84%, 69%)',
    500: 'hsl(250, 84%, 54%)', // Main primary
    600: 'hsl(250, 84%, 44%)',
    700: 'hsl(250, 84%, 34%)',
    800: 'hsl(250, 84%, 24%)',
    900: 'hsl(250, 84%, 14%)',
    950: 'hsl(250, 84%, 9%)',
  },

  // Background colors
  background: {
    main: 'hsl(242, 100%, 98.8%)', // #F7F7FF
    card: 'hsl(0, 0%, 100%)',
    muted: 'hsl(242, 35%, 95%)',
    accent: 'hsl(250, 100%, 96%)',
  },

  // Text colors
  text: {
    primary: 'hsl(240, 10%, 3.9%)',
    secondary: 'hsl(240, 3.8%, 46.1%)',
    muted: 'hsl(240, 3.8%, 46.1%)',
    accent: 'hsl(250, 84%, 54%)',
    white: 'hsl(0, 0%, 98%)',
  },

  // Status colors
  status: {
    success: 'hsl(142, 76%, 36%)',
    warning: 'hsl(38, 92%, 50%)',
    error: 'hsl(0, 84.2%, 60.2%)',
    info: 'hsl(200, 98%, 39%)',
  },

  // Special colors
  special: {
    comingSoon: '#EE4266', // Pink/red accent color
    getStartedHover: '#EE4266', // Get Started button hover background
    signInBg: '#CFD11A', // Sign In button background
  },

  // Border and UI colors
  border: {
    default: 'hsl(242, 45%, 88%)',
    muted: 'hsl(242, 35%, 92%)',
    accent: 'hsl(250, 84%, 54%)',
  },

  // Chart colors for data visualization
  chart: {
    1: 'hsl(250, 84%, 54%)',
    2: 'hsl(200, 98%, 39%)',
    3: 'hsl(280, 87%, 65%)',
    4: 'hsl(43, 74%, 66%)',
    5: 'hsl(340, 82%, 52%)',
  }
} as const;

/**
 * CSS Custom Properties (CSS Variables)
 * Use these when you need to access the CSS variables directly
 */
export const cssVars = {
  background: 'var(--background)',
  foreground: 'var(--foreground)',
  primary: 'var(--primary)',
  primaryForeground: 'var(--primary-foreground)',
  secondary: 'var(--secondary)',
  secondaryForeground: 'var(--secondary-foreground)',
  muted: 'var(--muted)',
  mutedForeground: 'var(--muted-foreground)',
  accent: 'var(--accent)',
  accentForeground: 'var(--accent-foreground)',
  destructive: 'var(--destructive)',
  destructiveForeground: 'var(--destructive-foreground)',
  success: 'var(--success)',
  successForeground: 'var(--success-foreground)',
  warning: 'var(--warning)',
  warningForeground: 'var(--warning-foreground)',
  border: 'var(--border)',
  input: 'var(--input)',
  ring: 'var(--ring)',
} as const;

/**
 * Utility functions for working with colors
 */
export const colorUtils = {
  /**
   * Convert HSL color to RGB format
   */
  hslToRgb: (hsl: string): string => {
    // This is a placeholder - you can implement actual HSL to RGB conversion if needed
    return hsl;
  },

  /**
   * Get a CSS variable with fallback
   */
  getCssVar: (varName: keyof typeof cssVars, fallback?: string): string => {
    return `hsl(${cssVars[varName]}${fallback ? ` / ${fallback}` : ''})`;
  },

  /**
   * Create a semi-transparent version of a color
   */
  withOpacity: (color: string, opacity: number): string => {
    return `${color} / ${opacity}`;
  },
} as const;

export default colors;