import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {CartScreen} from './CartScreen';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';

export const CartScreenContainer = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const props = {navigation};

  return <CartScreen {...props} />;
};
