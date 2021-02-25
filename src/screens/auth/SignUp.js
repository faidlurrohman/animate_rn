import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {color} from '../../css/Colors';
import {scale, font} from '../../css/Style';

UIManager.setLayoutAnimationEnabledExperimental(true);

const SignUp = ({route, navigation}) => {
  const [signUpAction, setSignUpAction] = useState(false);
  const {bgColor} = route.params;

  const userSignUp = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(200, 'linear', 'opacity'),
    );
    setSignUpAction((prev) => !prev);
    setTimeout(() => {
      setSignUpAction((prev) => !prev);
      LayoutAnimation.configureNext(
        LayoutAnimation.create(200, 'linear', 'opacity'),
      );
    }, 3000);
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: bgColor,
        padding: scale(18),
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Bla Bla Bla</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={signUpAction ? true : false}
        style={{
          paddingVertical: signUpAction ? scale(13) : scale(18),
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: color.white,
          elevation: 1,
          borderRadius: signUpAction ? 100 : scale(5),
          width: signUpAction ? scale(58) : '100%',
        }}
        onPress={userSignUp}>
        <Text
          style={{
            fontSize: scale(16),
            fontFamily: font('bold'),
            letterSpacing: 1,
            color: bgColor,
          }}>
          {signUpAction ? (
            <ActivityIndicator size={scale(30)} color={bgColor} />
          ) : (
            'SIGN UP'
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
