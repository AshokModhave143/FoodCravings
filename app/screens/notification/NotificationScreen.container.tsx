import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {NotificationScreen} from './NotificationScreen';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';

export const NotificationScreenContainer = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const props = {navigation};

  return <NotificationScreen {...props} />;
};
