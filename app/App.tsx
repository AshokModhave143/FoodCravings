import {NavigationContainerRef, ParamListBase} from '@react-navigation/native';
import React, {useRef} from 'react';
import {StatusBar} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {enableScreens} from 'react-native-screens';
import {ThemeNames, ThemeProvider} from './theme';
import {RootNavigator} from './navigators/RootNavigators';

// This puts screens in native ViewController or Activity
enableScreens();

export const NAVIGATION_PERSISTANCE_KEY = 'NAVIGATION_STATE';

/**
 * root component of app
 */
const App = () => {
  const navigationRef = useRef<NavigationContainerRef<ParamListBase>>(null);

  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: '#000000',
  };

  return (
    <ThemeProvider themeName={ThemeNames.DARK}>
      <PaperProvider>
        <SafeAreaProvider
          initialMetrics={initialWindowMetrics}
          style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <RootNavigator ref={navigationRef} />
        </SafeAreaProvider>
      </PaperProvider>
    </ThemeProvider>
  );
};

export default App;
