import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Greetings} from '../../components/greetings';
import {useReduxSelector} from '../../store';
import {SearchBarViewOnly} from '../../components/searchBar';
import {color} from '../../theme';
import {Categories} from '../../components/categories';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';
import {Screens} from '../../navigators/ScreenList';

export interface HomeScreenProps {
  navigation: AuthNavigationProp;
}

export const HomeScreen: React.FC<HomeScreenProps> = _props => {
  const user = useReduxSelector(state => state.auth.user);
  return (
    <ScrollView style={styles.container}>
      {/* Greetings */}
      <Greetings user={user} />
      {/* Search */}
      <SearchBarViewOnly
        onSearchInputClick={() => _props.navigation.navigate(Screens.search)}
      />
      {/* Categories filter */}
      <Categories />
      {/* New Dishes */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: color.background,
  },
});
