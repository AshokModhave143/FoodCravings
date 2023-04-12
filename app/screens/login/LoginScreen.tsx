import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {Screens} from '../../navigators/ScreenList';
import {LoginScreenNavigationProp} from '../../navigators/UnAuthNavigator';
import {color, wp} from '../../theme';
import {Introduction} from './elements/Introduction';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5Pro';
import {useReduxDispatch, useReduxSelector} from '../../store';
import {login} from '../../store/auth/auth.slice';

export interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {isAuthenticated, error} = useReduxSelector(state => state.auth);
  const dispatch = useReduxDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!isAuthenticated && error) {
      Alert.alert(error.message);
    }
  }, [isAuthenticated, error]);

  const handleLoginPress = () => {
    if (username && password) {
      dispatch(login({username, password}));
    } else {
      Alert.alert('Please enter credentials');
    }
  };

  const handleForgotPasswordPress = () => {
    Alert.alert('You forgot your password. Click "Ok" to recover it.');
  };

  const handleSignupPress = () => {
    navigation.navigate(Screens.signup);
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.introduction}>
        <Introduction />
      </View>
      <View style={styles.detailSection}>
        <View style={styles.loginSection}>
          <TextInput
            label="Username"
            value={username}
            mode="outlined"
            textColor={color.palette.offWhite}
            placeholderTextColor={color.palette.offWhite}
            activeOutlineColor={color.palette.orange}
            left={<TextInput.Icon icon="account" />}
            style={styles.input}
            onChangeText={setUsername}
            outlineStyle={styles.inputOutline}
          />
          <TextInput
            label="Password"
            value={password}
            mode="outlined"
            textColor={color.palette.offWhite}
            placeholderTextColor={color.palette.offWhite}
            activeOutlineColor={color.palette.orange}
            secureTextEntry
            left={<TextInput.Icon icon="lock" />}
            style={styles.input}
            onChangeText={setPassword}
            outlineStyle={styles.inputOutline}
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
        <Text style={styles.text}>OR</Text>
        <View style={styles.socialIconContainer}>
          <View>
            <FontAwesomeIcon
              name="facebook"
              solid
              color="#3b5998"
              allowFontScaling
              size={24}
              style={styles.socialIcon}
            />
          </View>
          <View>
            <FontAwesomeIcon
              name="google"
              solid
              allowFontScaling
              size={24}
              style={styles.socialIcon}
            />
          </View>
        </View>
        <Text style={styles.text}>Don't have an account?</Text>
        <Button
          mode="text"
          textColor={color.primary}
          style={styles.signupBtn}
          onPress={handleSignupPress}>
          Sign up
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: color.background,
  },
  introduction: {
    flex: 1,
  },
  detailSection: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.palette.offBlack,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  loginSection: {
    paddingVertical: 16,
    width: wp(500),
  },
  input: {
    marginVertical: 8,
    backgroundColor: color.background,
    width: '100%',
  },
  inputOutline: {borderRadius: 25},
  loginBtn: {
    marginTop: 20,
    backgroundColor: color.primary,
  },
  forgotPasswordLink: {alignItems: 'flex-end'},
  text: {color: color.palette.offWhite},
  signupBtn: {
    marginTop: -10,
  },
  socialIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    gap: 16,
  },
  socialIcon: {
    backgroundColor: 'white',
  },
});
