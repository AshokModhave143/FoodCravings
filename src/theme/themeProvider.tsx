import React, {useCallback, useMemo, useState} from 'react';
import {
  DefaultTheme as PaperDefaultTheme,
  MD2DarkTheme as PaperDarkTheme,
  Provider,
  useTheme,
  withTheme,
  configureFonts,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {mergeDeepRight} from 'ramda';
import {fontConfig, typography} from './typography';

export const ThemeNames = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const combinedDefaultTheme = mergeDeepRight(
  PaperDefaultTheme,
  NavigationDefaultTheme,
);
export const combinedDarkTheme = mergeDeepRight(
  PaperDarkTheme,
  NavigationDarkTheme,
);

export const theme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
  },
  fonts: configureFonts(fontConfig as any),
  typography: typography,
};

export type ThemeContextProps = {
  toggleTheme: () => void;
  isThemeDark: boolean;
};
export const ThemeContext = React.createContext<ThemeContextProps>({
  toggleTheme: () => null,
  isThemeDark: false,
});

export const ThemeProvider = ({
  themeName = ThemeNames.DARK,
  children,
}: {
  themeName: string;
  children: React.ReactNode;
}) => {
  const [isThemeDark, setIsThemeDark] = useState(themeName === ThemeNames.DARK);

  const theme = isThemeDark ? combinedDarkTheme : combinedDefaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences: ThemeContextProps = useMemo(
    () => ({toggleTheme, isThemeDark}),
    [toggleTheme, isThemeDark],
  );

  return (
    <ThemeContext.Provider value={preferences}>
      <Provider theme={theme}>{children}</Provider>
    </ThemeContext.Provider>
  );
};

export {useTheme, withTheme};
