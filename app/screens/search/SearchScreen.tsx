import React from 'react';
import {Button} from 'react-native-paper';
import {Screens} from '../../navigators/ScreenList';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';

export interface SearchScreenProps {
  navigation: AuthNavigationProp;
}
export const SearchScreen: React.FC<SearchScreenProps> = ({navigation}) => {
  return (
    <Button onPress={() => navigation.navigate(Screens.home)}>
      Go to Home
    </Button>
  );
};
