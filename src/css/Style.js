import {StyleSheet, Dimensions} from 'react-native';
import {color} from './Colors';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const scale = (_number) => {
  return parseInt(_number + HEIGHT / WIDTH);
};

const font = (_type) => {
  if (_type.toLowerCase() === 'thin') {
    return 'ProximaSoft-Thin';
  }
  if (_type.toLowerCase() === 'light') {
    return 'ProximaSoft-Light';
  }
  if (_type.toLowerCase() === 'regular') {
    return 'ProximaSoft-Regular';
  }
  if (_type.toLowerCase() === 'medium') {
    return 'ProximaSoft-Medium';
  }
  if (_type.toLowerCase() === 'semibold') {
    return 'ProximaSoft-SemiBold';
  }
  if (_type.toLowerCase() === 'bold') {
    return 'ProximaSoft-Bold';
  }
  if (_type.toLowerCase() === 'extrabold') {
    return 'ProximaSoft-ExtraBold';
  }
  if (_type.toLowerCase() === 'black') {
    return 'ProximaSoft-Black';
  }
};

export {WIDTH, HEIGHT, scale, font};
