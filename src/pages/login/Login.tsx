import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {color, hp, wp} from '../../theme';
import {Welcome} from './Welcome';

export const LoginUI: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if (validateCredentials(username, password)) {
      Alert.alert('Login successful');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  const handleForgotPasswordPress = () => {
    Alert.alert('You forgot your password. Click "Ok" to recover it.');
  };
  return (
    <View style={styles.loginContainer}>
      <View style={styles.introduction}>
        <Welcome user="ASHOK" />
      </View>
      <View style={styles.detailSection}>
        <View style={styles.loginSection}>
          <TextInput
            label="Username"
            value={username}
            dense
            mode="outlined"
            textColor={color.palette.black}
            activeOutlineColor={color.palette.black}
            left={<TextInput.Icon icon="account" />}
            style={styles.input}
            onChangeText={setUsername}
          />
          <TextInput
            label="Password"
            value={password}
            dense
            mode="outlined"
            textColor={color.palette.black}
            activeOutlineColor={color.palette.black}
            secureTextEntry
            left={<TextInput.Icon icon="lock" />}
            style={styles.input}
            onChangeText={setPassword}
          />
          <Button
            mode="text"
            style={styles.forgotPasswordLink}
            textColor={color.palette.offWhite}
            onPress={handleForgotPasswordPress}>
            Forgot password..?
          </Button>
          <Button
            mode="contained"
            style={styles.loginBtn}
            onPress={handleLoginPress}>
            Log in
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  introduction: {
    flex: 1,
  },
  detailSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.palette.lightGrey,
    height: hp(720),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: -20,
    paddingHorizontal: 16,
  },
  loginSection: {
    paddingVertical: 16,
    width: wp(500),
  },
  input: {
    marginVertical: 8,
    backgroundColor: color.palette.lighterGrey,
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: color.primary,
  },
  forgotPasswordLink: {alignItems: 'flex-end'},
});

const validateCredentials = (username: string, password: string) => {
  if (
    username.toString().toLowerCase() === 'admin' &&
    password.toString() === 'admin'
  ) {
    return true;
  } else {
    return false;
  }
};
