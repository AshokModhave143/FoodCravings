import React from 'react';
import {Button} from 'react-native-paper';
import {Screens} from '../../navigators/ScreenList';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';

export interface NotificationScreenProps {
  navigation: AuthNavigationProp;
}
export const NotificationScreen: React.FC<NotificationScreenProps> = ({
  navigation,
}) => {
  return (
    <Button onPress={() => navigation.navigate(Screens.home)}>
      Go to Home
    </Button>
  );
};
