import React from 'react';
import {Button} from 'react-native-paper';
import {Screens} from '../../navigators/ScreenList';
import {SignupScreenNavigationProp} from '../../navigators/UnAuthNavigator';

export interface SignupScreenProps {
  navigation: SignupScreenNavigationProp;
}

export const SignupScreen: React.FC<SignupScreenProps> = ({navigation}) => {
  return (
    <Button onPress={() => navigation.navigate(Screens.login)}>
      Go to Login
    </Button>
  );
};
