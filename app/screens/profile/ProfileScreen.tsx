import React from 'react';
import {Button} from 'react-native-paper';
import {Screens} from '../../navigators/ScreenList';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';
import {useReduxDispatch} from '../../store';
import {logout} from '../../store/auth/auth.slice';

export interface ProfileScreenProps {
  navigation: AuthNavigationProp;
}
export const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const dispatch = useReduxDispatch();

  return (
    <>
      <Button onPress={() => navigation.navigate(Screens.home)}>
        Go to Home
      </Button>
      <Button onPress={() => dispatch(logout({}))}>Logout</Button>
    </>
  );
};
