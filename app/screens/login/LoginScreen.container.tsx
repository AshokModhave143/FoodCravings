import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {LoginScreen} from './LoginScreen';
import {LoginScreenNavigationProp} from '../../navigators/UnAuthNavigator';

export const LoginScreenContainer: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const props = {navigation};

  return <LoginScreen {...props} />;
};
