import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {color, hp, typography, wp} from '../../theme';

export interface WelcomeProps {
  user?: string;
}
export const Welcome: React.FC<WelcomeProps> = _props => {
  return (
    <View style={styles.introductionContainer}>
      <View style={styles.logoAnimationContainer}>
        <LottieView
          source={require('../../../assets/food-delivery-process.json')}
          style={styles.logoAnimation}
          autoPlay
          loop
          autoSize
        />
        <Text style={styles.title}>Food Cravings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  introductionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: color.text,
    fontFamily: typography.primary,
    top: '-15%',
  },
  logoAnimationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoAnimation: {
    width: wp(250),
    height: hp(300),
    aspectRatio: 1,
  },
});
