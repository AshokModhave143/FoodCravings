import React from 'react';
import {User} from '../store/auth/auth.types';
import {StyleSheet, View} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import {color} from '../theme';

export interface GreetingsProps {
  user?: User | null;
}

export const Greetings: React.FC<GreetingsProps> = ({user}) => {
  const {firstName, lastName} = user ?? {};
  return (
    <View style={styles.container}>
      <View style={styles.greetingTextContainer}>
        <Text variant="bodyMedium" style={styles.greetingText}>
          Good morning
        </Text>
        <Text
          variant="bodyLarge"
          style={[styles.greetingText, styles.username]}>
          {`${firstName} ${lastName}`}
        </Text>
      </View>
      <Avatar.Image size={36} source={require('../../assets/user.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 16,
  },
  greetingTextContainer: {},
  greetingText: {
    color: color.palette.white,
  },
  username: {
    fontWeight: 'bold',
  },
});
