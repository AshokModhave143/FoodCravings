import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = _props => {
  return (
    <View>
      <Text style={styles.title}>Food Cravings</Text>
      <Text style={styles.description}>
        Your own food delivery junction. Order food from your nearby
        restaurant's to fullfill your craving any time and earn discounts.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  description: {},
});