import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {LoginUI} from './pages/login/Login';
import {ThemeNames, ThemeProvider} from './theme';

const App: React.FC = () => {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: '#000000',
  };

  return (
    <ThemeProvider themeName={ThemeNames.DARK}>
      <PaperProvider>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <View style={[styles.appContainer]}>
              <LoginUI />
            </View>
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 0,
    margin: 0,
  },
});
export default App;
