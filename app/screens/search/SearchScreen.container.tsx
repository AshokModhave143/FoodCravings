import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SearchScreen} from './SearchScreen';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';

export const SearchScreenContainer = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const props = {navigation};

  return <SearchScreen {...props} />;
};
