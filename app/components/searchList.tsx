import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, List, Menu, Provider, Text} from 'react-native-paper';
import {color} from '../theme';

export const SearchList: React.FC = () => {
  const foodItems = [
    {
      name: 'Pizza',
      description: 'Cheese garlic pizza with tomato toppings',
      price: 30,
      starRatings: 4,
      reviewCount: 107,
      imageUrl: require('../../assets/dish-1.png'),
    },
    {
      name: 'Pizza',
      description: 'Cheese garlic pizza with tomato toppings',
      price: 30,
      starRatings: 4,
      reviewCount: 107,
      imageUrl: require('../../assets/dish-2.png'),
    },
    {
      name: 'Pizza',
      description: 'Cheese garlic pizza with tomato toppings',
      price: 30,
      starRatings: 4,
      reviewCount: 107,
      imageUrl: require('../../assets/dish-3.png'),
    },
    {
      name: 'Pizza',
      description: 'Cheese garlic pizza with tomato toppings',
      price: 30,
      starRatings: 4,
      reviewCount: 107,
      imageUrl: require('../../assets/dish-4.png'),
    },
  ];

  return (
    <List.Section style={styles.searchListContainer}>
      <List.Subheader>
        <View style={styles.searchListHeader}>
          <Text variant="titleMedium" style={styles.searchListHeaderTitle}>
            Filtered
          </Text>
          <FilteredMenu />
        </View>
      </List.Subheader>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {foodItems.map((item, index) => (
          <List.Item
            key={`${item.name}-${index}`}
            title={item.name}
            description={item.description}
            descriptionStyle={styles.listDescription}
            // eslint-disable-next-line react/no-unstable-nested-components
            left={props => (
              <List.Image {...props} source={item.imageUrl} variant="image" />
            )}
            // eslint-disable-next-line react/no-unstable-nested-components
            right={props => (
              <Text variant="labelLarge" {...props} style={styles.priceLabel}>
                ${item.price}
              </Text>
            )}
            titleStyle={styles.listTitle}
            style={styles.listItem}
          />
        ))}
      </ScrollView>
    </List.Section>
  );
};

const FilteredMenu = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => setShow(prevState => !prevState);

  return (
    <Provider>
      <Menu
        visible={show}
        onDismiss={toggleMenu}
        anchor={<Button onPress={toggleMenu}>See options</Button>}
        style={styles.filteredOptionsMenu}>
        <Menu.Item title="Item 1" />
        <Menu.Item title="Item 2" />
        <Menu.Item title="Item 3" />
      </Menu>
    </Provider>
  );
};

const styles = StyleSheet.create({
  searchListContainer: {},
  searchListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchListHeaderTitle: {color: color.palette.offWhite},
  filteredOptionsMenu: {
    backgroundColor: color.palette.offBlack,
  },
  listContainer: {rowGap: 16},
  listItem: {
    backgroundColor: color.palette.offBlack,
    borderRadius: 10,
  },
  listTitle: {
    color: color.palette.offWhite,
  },
  listDescription: {
    color: color.palette.offWhite,
  },
  priceLabel: {color: color.primary},
});
