import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SignupScreenNavigationProp} from '../../navigators/UnAuthNavigator';
import {SignupScreen} from './SignupScreen';

export const SignupScreenContainer = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>();

  const props = {navigation};
  return <SignupScreen {...props} />;
};
