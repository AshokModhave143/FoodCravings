import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {color} from '../theme';

export const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        textAlignVertical="center"
        iconColor={color.palette.lightGrey}
        value={search}
        style={styles.searchbar}
        inputStyle={styles.input}
        onChangeText={(text: string) => setSearch(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  searchbar: {
    backgroundColor: color.palette.offBlack,
    paddingHorizontal: 16,
    height: 50,
  },
  input: {
    color: color.palette.white,
    textAlignVertical: 'center',
    height: 40,
  },
});
