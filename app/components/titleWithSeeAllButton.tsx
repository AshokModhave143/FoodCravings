import React from 'react';
import {color} from '../theme';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';

export interface TitleWithSeeAllButtonProps {
  title: string;
  onSeeAllButtonPress?: () => void;
}

export const TitleWithSeeAllButton: React.FC<TitleWithSeeAllButtonProps> = ({
  title,
  onSeeAllButtonPress,
}) => {
  return (
    <View style={styles.titleContainer}>
      <Text variant="bodyLarge" style={styles.title}>
        {title}
      </Text>
      <Button
        mode="text"
        textColor={color.palette.offWhite}
        labelStyle={styles.seeAllButton}
        onPress={onSeeAllButtonPress}>
        See all
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: color.palette.white,
  },
  seeAllButton: {textDecorationLine: 'underline'},
});
