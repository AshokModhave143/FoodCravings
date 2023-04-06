import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {LoginScreenContainer} from '../screens/login/LoginScreen.container';
import {SignupScreenContainer} from '../screens/signup/SignupScreen.container';
import {Screens} from './ScreenList';

export type UnAuthParamList = {
  login: undefined;
  signup: undefined;
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  UnAuthParamList,
  'login'
>;
export type SignupScreenNavigationProp = NativeStackNavigationProp<
  UnAuthParamList,
  'signup'
>;

const Stack = createNativeStackNavigator<UnAuthParamList>();

export function UnAuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={Screens.login}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.login} component={LoginScreenContainer} />
      <Stack.Screen name={Screens.signup} component={SignupScreenContainer} />
    </Stack.Navigator>
  );
}
