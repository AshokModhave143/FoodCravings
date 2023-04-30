import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreenContainer} from '../screens/home/HomeScreen.container';
import {Screens} from './ScreenList';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartScreenContainer} from '../screens/cart/CartScreen.container';
import {ProfileScreenContainer} from '../screens/profile/ProfileScreen.container';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {color} from '../theme';
import {NotificationScreenContainer} from '../screens/notification/NotificationScreen.container';
import {SearchScreenContainer} from '../screens/search/SearchScreen.container';
import {ChatScreenContainer} from '../screens/chat/ChatScreen.container';

export type AuthParamList = {
  home: undefined;
  search: undefined;
  notification: undefined;
  cart: undefined;
  profile: undefined;
  chat: undefined;
};

export type AuthNavigationProp = NativeStackNavigationProp<
  AuthParamList,
  'home' | 'search' | 'notification' | 'cart' | 'profile' | 'chat'
>;

// const Stack = createNativeStackNavigator<AuthParamList>();

const AuthTabNavigator = createBottomTabNavigator();

export function AuthNavigator() {
  // return (
  //   <Stack.Navigator
  //     initialRouteName={Screens.home}
  //     screenOptions={{
  //       headerShown: true,
  //       headerTitle: 'Home',
  //     }}>
  //     <Stack.Screen name={Screens.home} component={HomeScreenContainer} />
  //   </Stack.Navigator>
  // );
  return (
    <AuthTabNavigator.Navigator
      initialRouteName={Screens.home}
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: color.primary,
        tabBarActiveBackgroundColor: color.palette.offBlack,
        tabBarStyle: {backgroundColor: color.background},
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => (
          <FontAwesome5Icon
            name="shopping-cart"
            size={24}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{marginHorizontal: 10}}
          />
        ),
      }}>
      <AuthTabNavigator.Screen
        name={Screens.home}
        component={HomeScreenContainer}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components, @typescript-eslint/no-shadow
          tabBarIcon: ({color, size}) => (
            <FontAwesome5Icon name="home" size={size} color={color} />
          ),
          title: 'Home',
        }}
      />
      <AuthTabNavigator.Screen
        name={Screens.search}
        component={SearchScreenContainer}
        options={{
          tabBarLabel: 'Search',
          // eslint-disable-next-line react/no-unstable-nested-components, @typescript-eslint/no-shadow
          tabBarIcon: ({color, size}) => (
            <FontAwesome5Icon name="search" size={size} color={color} />
          ),
          title: 'Search',
        }}
      />
      <AuthTabNavigator.Screen
        name={Screens.notification}
        component={NotificationScreenContainer}
        options={{
          tabBarLabel: 'Notification',
          // eslint-disable-next-line react/no-unstable-nested-components, @typescript-eslint/no-shadow
          tabBarIcon: ({color, size}) => (
            <FontAwesome5Icon name="bell" size={size} color={color} />
          ),
          title: 'Notification',
        }}
      />
      <AuthTabNavigator.Screen
        name={Screens.cart}
        component={CartScreenContainer}
        options={{
          tabBarLabel: 'Cart',
          // eslint-disable-next-line react/no-unstable-nested-components, @typescript-eslint/no-shadow
          tabBarIcon: ({color, size}) => (
            <FontAwesome5Icon name="shopping-cart" size={size} color={color} />
          ),
          title: 'Cart',
        }}
      />
      <AuthTabNavigator.Screen
        name={Screens.chat}
        component={ChatScreenContainer}
        options={{
          headerShown: true,
          tabBarLabel: 'Chat',
          // eslint-disable-next-line react/no-unstable-nested-components, @typescript-eslint/no-shadow
          tabBarIcon: ({color, size}) => (
            <FontAwesome5Icon name="mobile" size={size} color={color} />
          ),
          title: 'Chat',
        }}
      />
      <AuthTabNavigator.Screen
        name={Screens.profile}
        component={ProfileScreenContainer}
        options={{
          tabBarLabel: 'Profile',
          // eslint-disable-next-line react/no-unstable-nested-components, @typescript-eslint/no-shadow
          tabBarIcon: ({color, size}) => (
            <FontAwesome5Icon name="user" size={size} color={color} />
          ),
          title: 'Profile',
        }}
      />
    </AuthTabNavigator.Navigator>
  );
}
