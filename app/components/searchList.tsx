import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, List, Menu, Provider, Text} from 'react-native-paper';
import {color} from '../theme';
import {FoodItem} from '../screens/search/data';

export interface SearchListProps {
  foodItems: FoodItem[];
  filterText: string;
}
export const SearchList: React.FC<SearchListProps> = ({
  filterText,
  foodItems,
}) => {
  const filteredFoodItems = foodItems.filter(
    item =>
      item.name.includes(filterText) || item.description.includes(filterText),
  );

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
        {filteredFoodItems.map((item, index) => (
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
