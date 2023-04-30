import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Greetings} from '../../components/greetings';
import {useReduxSelector} from '../../store';
import {SearchBar} from '../../components/searchBar';
import {color} from '../../theme';
import {Categories} from '../../components/categories';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';

export interface HomeScreenProps {
  navigation: AuthNavigationProp;
}

export const HomeScreen: React.FC<HomeScreenProps> = _props => {
  const user = useReduxSelector(state => state.auth.user);
  return (
    <View style={styles.container}>
      {/* Greetings */}
      <Greetings user={user} />
      {/* Search */}
      <SearchBar />
      {/* Categories filter */}
      <Categories />
      {/* New Dishes */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: color.background,
  },
});
