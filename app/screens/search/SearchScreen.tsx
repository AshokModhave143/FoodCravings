import React, {useState} from 'react';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';
import {StyleSheet, View} from 'react-native';
import {SearchBarInput} from '../../components/searchBar';
import {color} from '../../theme';
import {SearchList} from '../../components/searchList';
import {foodItems} from './data';

export interface SearchScreenProps {
  navigation: AuthNavigationProp;
}
export const SearchScreen: React.FC<SearchScreenProps> = _props => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.searchScreenContainer}>
      <SearchBarInput
        value={searchText}
        onTextChange={(text: string) => setSearchText(text)}
      />
      <SearchList foodItems={foodItems} filterText={searchText} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchScreenContainer: {
    backgroundColor: color.background,
    flex: 1,
    paddingHorizontal: 16,
  },
});
