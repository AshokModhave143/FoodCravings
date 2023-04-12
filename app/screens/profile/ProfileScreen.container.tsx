import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ProfileScreen} from './ProfileScreen';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';

export const ProfileScreenContainer = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const props = {navigation};

  return <ProfileScreen {...props} />;
};
