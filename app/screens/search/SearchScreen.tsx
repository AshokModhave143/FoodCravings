import React from 'react';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';
import {StyleSheet, View} from 'react-native';
import {SearchBarInput} from '../../components/searchBar';
import {color} from '../../theme';
import {SearchList} from '../../components/searchList';

export interface SearchScreenProps {
  navigation: AuthNavigationProp;
}
export const SearchScreen: React.FC<SearchScreenProps> = _props => {
  return (
    <View style={styles.searchScreenContainer}>
      <SearchBarInput />
      <SearchList />
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
