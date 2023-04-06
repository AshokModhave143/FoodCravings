import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {HomeScreen} from './HomeScreen';

export const HomeScreenContainer = () => {
  const navigation = useNavigation();

  const props = {navigation};
  return <HomeScreen {...props} />;
};
