import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Chip, Text} from 'react-native-paper';
import {color} from '../theme';

export interface CategoriesProps {}

export const Categories: React.FC<CategoriesProps> = () => {
  const quickFilters = [
    {icon: 'rocket', name: 'Burger'},
    {icon: 'information', name: 'Pizza'},
    {icon: 'shopping', name: 'Fries'},
    {icon: 'shopping', name: 'Fries'},
  ];

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text variant="bodyLarge" style={styles.title}>
          Categories
        </Text>
        <Button
          mode="text"
          textColor={color.palette.offWhite}
          labelStyle={styles.seeAllButton}>
          See all
        </Button>
      </View>
      <View style={styles.filterContainer}>
        {quickFilters.map(filter => (
          <Chip icon={filter.icon} style={styles.chip}>
            {filter.name}
          </Chip>
        ))}
      </View>
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
  chip: {
    width: 100,
  },
  filterContainer: {
    columnGap: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'scroll',
  },
});
