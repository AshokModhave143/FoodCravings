import React from 'react';
import {Searchbar} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {color} from '../theme';

export interface SearchBarProps {
  value: string;
  onSearchInputClick?: () => void;
  onTextChange?: (text: string) => void;
}
export const SearchBarViewOnly: React.FC<SearchBarProps> = ({
  onSearchInputClick,
}) => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        value=""
        style={styles.searchbar}
        inputStyle={styles.input}
        textAlign="left"
        textAlignVertical="center"
        onPressOut={onSearchInputClick}
      />
    </View>
  );
};

export const SearchBarInput: React.FC<SearchBarProps> = ({
  onTextChange,
  value,
}) => {
  const handleOnChange = (text: string) => {
    onTextChange && onTextChange(text);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        value={value}
        style={styles.searchbar}
        inputStyle={styles.input}
        textAlign="left"
        textAlignVertical="center"
        onChangeText={handleOnChange}
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
    height: 48,
  },
  input: {
    color: color.palette.white,
    paddingBottom: 6,
  },
});
