import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AuthNavigator} from './AuthNavigator';
import {UnAuthNavigator} from './UnAuthNavigator';
import {
  NavigationContainer,
  NavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';
import {useReduxSelector} from '../store';

export type RootParamList = {
  AppStack: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<
  RootParamList,
  'AppStack'
>;

const Stack = createNativeStackNavigator<RootParamList>();

const RootStack = () => {
  const {isAuthenticated} = useReduxSelector(state => state.auth);

  const component = isAuthenticated ? AuthNavigator : UnAuthNavigator;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppStack" component={component} />
    </Stack.Navigator>
  );
};

export const RootNavigator = React.forwardRef<
  NavigationContainerRef<ParamListBase>,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  );
});
