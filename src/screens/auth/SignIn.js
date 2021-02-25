import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  UIManager,
  LayoutAnimation,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';
import {color} from '../../css/Colors';
import {scale, font} from '../../css/Style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {loginFB} from '../../config/firebase/Auth';

UIManager.setLayoutAnimationEnabledExperimental(true);

const SignIn = ({route, navigation}) => {
  const [signInAction, setSignInAction] = useState(false);
  const {bgColor} = route.params;

  const userSignIn = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(200, 'linear', 'opacity'),
    );
    setSignInAction((prev) => !prev);
    setTimeout(() => {
      setSignInAction((prev) => !prev);
      LayoutAnimation.configureNext(
        LayoutAnimation.create(200, 'linear', 'opacity'),
      );
    }, 3000);
    Keyboard.dismiss();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bgColor,
        padding: scale(18),
      }}>
      <ScrollView contentContainerStyle={{flexGrow: 1, flexShrink: 0}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', marginBottom: scale(8)}}>
            <View
              style={{
                flexGrow: 1,
                padding: scale(8),
                backgroundColor: color.bgInputAuth,
                borderRadius: scale(100),
                paddingLeft: scale(80),
                paddingRight: scale(40),
              }}>
              <TextInput
                placeholder="Username/Email"
                placeholderTextColor={color.white}
                selectionColor={bgColor}
                textContentType="emailAddress"
                autoCapitalize="none"
                autoCompleteType="off"
                style={{
                  color: color.white,
                  fontSize: scale(16),
                  fontFamily: font('semibold'),
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                padding: scale(18),
                width: scale(65),
                height: scale(65),
                backgroundColor: color.white,
                borderRadius: scale(100),
                alignItems: 'center',
              }}>
              <FontAwesome5
                name={'user'}
                color={bgColor}
                size={scale(26)}
                solid
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', marginBottom: scale(8)}}>
            <View
              style={{
                flexGrow: 1,
                padding: scale(8),
                backgroundColor: color.bgInputAuth,
                borderRadius: scale(100),
                paddingLeft: scale(80),
                paddingRight: scale(40),
              }}>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor={color.white}
                selectionColor={bgColor}
                textContentType="password"
                autoCapitalize="none"
                autoCompleteType="off"
                style={{
                  color: color.white,
                  fontSize: scale(16),
                  fontFamily: font('semibold'),
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                padding: scale(18),
                width: scale(65),
                height: scale(65),
                backgroundColor: color.white,
                borderRadius: scale(100),
                alignItems: 'center',
              }}>
              <FontAwesome5
                name={'lock'}
                color={bgColor}
                size={scale(26)}
                solid
              />
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginBottom: scale(8)}}>
            <Text
              style={{
                fontSize: scale(14),
                fontFamily: font('semibold'),
                letterSpacing: 1,
                color: color.white,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => loginFB()}
            style={{
              padding: scale(10),
              width: scale(50),
              height: scale(50),
              backgroundColor: color.white,
              borderRadius: scale(100),
              alignItems: 'center',
              elevation: 1,
            }}>
            <FontAwesome5
              name={'facebook-f'}
              color={color.fb}
              size={scale(26)}
              brand
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              padding: scale(10),
              width: scale(50),
              height: scale(50),
              backgroundColor: color.white,
              borderRadius: scale(100),
              alignItems: 'center',
              elevation: 1,
            }}>
            <FontAwesome5
              name={'google'}
              color={color.google}
              size={scale(26)}
              brand
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              padding: scale(10),
              width: scale(50),
              height: scale(50),
              backgroundColor: color.white,
              borderRadius: scale(100),
              alignItems: 'center',
              elevation: 1,
            }}>
            <FontAwesome5
              name={'twitter'}
              color={color.twitter}
              size={scale(26)}
              brand
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={signInAction ? true : false}
        style={{
          flex: 0,
          paddingVertical: signInAction ? scale(13) : scale(18),
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: color.white,
          elevation: 1,
          borderRadius: signInAction ? 100 : scale(5),
          width: signInAction ? scale(64) : '100%',
        }}
        onPress={userSignIn}>
        <Text
          style={{
            fontSize: scale(16),
            fontFamily: font('bold'),
            letterSpacing: 1,
            color: bgColor,
          }}>
          {signInAction ? (
            <ActivityIndicator size={scale(34)} color={bgColor} />
          ) : (
            'SIGN IN'
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
