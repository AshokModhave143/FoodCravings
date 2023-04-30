import React from 'react';
import {ChatScreen} from './ChatScreen';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';

export const ChatScreenContainer: React.FC = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const props = {navigation};
  return <ChatScreen {...props} />;
};
