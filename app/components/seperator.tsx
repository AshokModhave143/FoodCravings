import React from 'react';
import {StyleSheet, View} from 'react-native';
import {color} from '../theme';

export const Seperator: React.FC = () => {
  return <View style={styles.seperator} />;
};
const styles = StyleSheet.create({
  seperator: {
    marginVertical: 8,
    borderBottomColor: color.palette.lightGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
