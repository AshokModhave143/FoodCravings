import React from 'react';
import {Alert, Image, ScrollView, StyleSheet, View} from 'react-native';
import {Card, Chip, Text} from 'react-native-paper';
import {color} from '../theme';
import {TitleWithSeeAllButton} from './titleWithSeeAllButton';

export interface CategoriesProps {}

export const Categories: React.FC<CategoriesProps> = () => {
  const quickFilters = [
    {icon: 'rocket', name: 'Burger'},
    {icon: 'information', name: 'Pizza'},
    {icon: 'shopping', name: 'Fries'},
    {icon: 'shopping', name: 'Fries'},
  ];

  const newDishes = [
    {
      name: 'Salmon salad',
      source: require('../../assets/dish-1.png'),
      price: 20,
    },
    {name: 'Salmon Fry', source: require('../../assets/dish-2.png'), price: 34},
    {name: 'Pasta', source: require('../../assets/dish-3.png'), price: 20},
    {name: 'Pizza', source: require('../../assets/dish-4.png'), price: 20},
  ];

  const handleCategoriesSeeAllButtonPress = () => {
    Alert.alert('Categories see all button clicked');
  };

  const handleNewDishesSeeAllButtonPress = () => {
    Alert.alert('Categories see all button clicked');
  };

  return (
    <View>
      <TitleWithSeeAllButton
        title={'Categories'}
        onSeeAllButtonPress={handleCategoriesSeeAllButtonPress}
      />
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.filterContainer}>
        {quickFilters.map((filter, index) => (
          <Chip
            key={`${filter.name}-${index}`}
            icon={filter.icon}
            style={styles.chip}
            textStyle={{color: color.palette.offWhite}}>
            {filter.name}
          </Chip>
        ))}
      </ScrollView>
      <Image
        style={styles.imageAdvertised}
        source={{
          uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/delicious-burger-food-menu-ad-design-template-4018538c19c43e14e6a0e8afbdab6472_screen.jpg?ts=1651640578',
        }}
      />
      <TitleWithSeeAllButton
        title={'New dishes'}
        onSeeAllButtonPress={handleNewDishesSeeAllButtonPress}
      />
      <View style={styles.newDishesContainer}>
        {newDishes.map(dish => (
          <Card key={dish.name} mode="elevated" style={styles.newDishCard}>
            <Card.Content>
              <Image source={dish.source} style={styles.newDishCardImage} />
              <Text variant="titleMedium" style={styles.newDishCardTitle}>
                {dish.name}
              </Text>
            </Card.Content>
          </Card>
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
    backgroundColor: color.palette.offBlack,
  },
  filterContainer: {
    columnGap: 8,
  },
  imageAdvertised: {
    height: 250,
    resizeMode: 'stretch',
    borderRadius: 25,
    marginVertical: 16,
  },
  newDishesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  newDishCard: {width: '48%', backgroundColor: color.palette.offBlack},
  newDishCardImage: {height: 150, width: '100%', resizeMode: 'stretch'},
  newDishCardTitle: {textAlign: 'center', color: color.text},
});
