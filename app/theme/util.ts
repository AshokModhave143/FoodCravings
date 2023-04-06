import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

const DEVICE_SIZE = {
  X_WIDTH: 720,
  X_HEIGHT: 1024,
};

export const wp = (dimension: number) =>
  wp2dp((dimension / DEVICE_SIZE.X_WIDTH) * 100 + '%');

export const hp = (dimension: number) =>
  hp2dp((dimension / DEVICE_SIZE.X_HEIGHT) * 100 + '%');
