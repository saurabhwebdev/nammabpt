/**
 * Example Component: ColorDemo
 * 
 * This component demonstrates how to use the centralized color system
 * throughout your application for consistent styling.
 */

import React from 'react';
import { colors, cssVars, colorUtils } from '@/lib/colors';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const ColorDemo = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Using Centralized Colors</CardTitle>
          <CardDescription>
            Examples of how to use the color system in your components
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Using Tailwind classes with CSS variables */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Method 1: Tailwind CSS Classes</h4>
            <div className="flex gap-2">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Primary Button
              </Button>
              <Button className="bg-success text-success-foreground hover:bg-success/90">
                Success Button
              </Button>
              <Button className="bg-warning text-warning-foreground hover:bg-warning/90">
                Warning Button
              </Button>
            </div>
          </div>

          {/* Using inline styles with color constants */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Method 2: Inline Styles with Color Constants</h4>
            <div className="flex gap-2">
              <div
                className="px-4 py-2 rounded-lg text-white font-medium"
                style={{ backgroundColor: colors.primary[500] }}
              >
                Primary Color
              </div>
              <div
                className="px-4 py-2 rounded-lg text-white font-medium"
                style={{ backgroundColor: colors.status.success }}
              >
                Success Color
              </div>
              <div
                className="px-4 py-2 rounded-lg text-white font-medium"
                style={{ backgroundColor: colors.status.warning }}
              >
                Warning Color
              </div>
            </div>
          </div>

          {/* Using CSS custom properties */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Method 3: CSS Custom Properties</h4>
            <div className="flex gap-2">
              <div
                className="px-4 py-2 rounded-lg font-medium"
                style={{
                  backgroundColor: `hsl(${cssVars.primary})`,
                  color: `hsl(${cssVars.primaryForeground})`
                }}
              >
                CSS Variables
              </div>
              <div
                className="px-4 py-2 rounded-lg font-medium"
                style={{
                  backgroundColor: `hsl(${cssVars.accent})`,
                  color: `hsl(${cssVars.accentForeground})`
                }}
              >
                Accent Variables
              </div>
            </div>
          </div>

          {/* Color palette grid */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Primary Color Shades</h4>
            <div className="grid grid-cols-5 gap-2">
              {Object.entries(colors.primary).map(([shade, color]) => (
                <div key={shade} className="text-center">
                  <div
                    className="h-16 rounded-lg shadow-sm border"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs mt-1 text-muted-foreground">{shade}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Background colors demonstration */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Background Colors</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div
                className="p-4 rounded-lg border text-center"
                style={{ backgroundColor: colors.background.main }}
              >
                <p className="text-sm font-medium text-foreground">Main Background</p>
                <p className="text-xs text-muted-foreground mt-1">#F7F7FF</p>
              </div>
              <div
                className="p-4 rounded-lg border text-center"
                style={{ backgroundColor: colors.background.card }}
              >
                <p className="text-sm font-medium text-foreground">Card Background</p>
                <p className="text-xs text-muted-foreground mt-1">White</p>
              </div>
              <div
                className="p-4 rounded-lg border text-center"
                style={{ backgroundColor: colors.background.muted }}
              >
                <p className="text-sm font-medium text-foreground">Muted Background</p>
                <p className="text-xs text-muted-foreground mt-1">Light Gray</p>
              </div>
              <div
                className="p-4 rounded-lg border text-center"
                style={{ backgroundColor: colors.background.accent }}
              >
                <p className="text-sm font-medium text-foreground">Accent Background</p>
                <p className="text-xs text-muted-foreground mt-1">Light Purple</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ColorDemo;