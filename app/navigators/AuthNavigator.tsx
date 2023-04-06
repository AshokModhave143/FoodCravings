import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreenContainer} from '../screens/home/HomeScreen.container';
import {Screens} from './ScreenList';

export type AuthParamList = {
  home: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  AuthParamList,
  'home'
>;

const Stack = createNativeStackNavigator<AuthParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={Screens.home}
      screenOptions={{
        headerShown: true,
        headerTitle: 'Home',
      }}>
      <Stack.Screen name={Screens.home} component={HomeScreenContainer} />
    </Stack.Navigator>
  );
}
