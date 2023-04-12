import React from 'react';
import {Button} from 'react-native-paper';
import {Screens} from '../../navigators/ScreenList';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';

export interface CartScreenProps {
  navigation: AuthNavigationProp;
}
export const CartScreen: React.FC<CartScreenProps> = ({navigation}) => {
  return (
    <Button onPress={() => navigation.navigate(Screens.home)}>
      Go to Home
    </Button>
  );
};
