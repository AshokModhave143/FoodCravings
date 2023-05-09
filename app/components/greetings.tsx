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

  const getGreetingText = (): string => {
    let greeting = '';
    const hour = new Date().getHours();

    if (hour >= 5 && hour <= 11) {
      greeting = 'Good Morning';
    } else if (hour >= 12 && hour <= 16) {
      greeting = 'Good Afternoon';
    } else if (hour >= 17 && hour <= 20) {
      greeting = 'Good Evening';
    } else {
      greeting = 'Good Night';
    }

    return greeting;
  };
  return (
    <View style={styles.container}>
      <View style={styles.greetingTextContainer}>
        <Text variant="bodyMedium" style={styles.greetingText}>
          {getGreetingText()}
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
    alignItems: 'center',
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
