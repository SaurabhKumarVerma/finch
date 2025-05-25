import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import FinchTextInput from "../../base/FinchTextInput/FinchTextInput";
import Fontisto from "@expo/vector-icons/Fontisto";
import { color } from "../../theme/color";
import FinchText from "../../base/FinchText/FinchText";
import FinchImage from "../../base/FinchImage/FinchImage";
import { images } from "../../../assets";
import Feather from "@expo/vector-icons/Feather";
import FinchButton from "../../base/FinchButton/FinchButton";
import { StackActions, useNavigation } from "@react-navigation/native";
import { ESCREEN_NAME } from "../../types/screenName";

const Login = () => {
  const navigation = useNavigation()

  const navigateToDashboard = () => {
    // navigation.dispatch(
    //   StackActions.replace(ESCREEN_NAME.DASHBOARD_SCREEN)
    // )
  }

  const leftIcon = () => {
    return <Fontisto name="email" size={20} color={color.pale_gray} />;
  };

  const rightIcon = () => {
    return (
      <Feather
        name="eye-off"
        size={16}
        color={color.pale_gray}
        style={{ paddingRight: 8 }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoItem}>
          <FinchImage source={images.logo} style={styles.logoImage} />
          <FinchText
            text={"Finch"}
            style={styles.logoText}
            textColorType={color.white}
          />
        </View>
        <FinchText
          text={"Get Started now"}
          style={styles.startedText}
          textColorType={color.white}
        />
      </View>
      <View style={styles.loginContainer}>
        <FinchText
          text={"Email"}
          style={styles.ctaTextStyle}
          textColorType={color.grey}
        />
        <FinchTextInput leftIcon={leftIcon()} placeholder="Enter Email" />
        <FinchText
          text={"Password"}
          style={styles.ctaTextStyle}
          textColorType={color.grey}
        />
        <FinchTextInput
          rightIcon={rightIcon()}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.forgotTextContainer}>
          <FinchText
            text={"Forgot Password ?"}
            style={styles.forgotTextCta}
            textColorType={color.slightly_blue}
          />
        </View>
        <FinchButton onPress={navigateToDashboard} buttonCta="Log In" buttonTextColor='red' isGradient />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    marginHorizontal: 24,
    marginBottom: 20,
  },
  logoItem: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 32 
  },
  logoImage: { 
    width: 20, 
    height: 20, 
    borderRadius: 5
  },
  logoText: { 
    fontSize: 16, 
    fontWeight: "bold", 
    marginLeft: 10 
  },
  startedText: { 
    fontSize: 40, 
    fontWeight: "bold" 
  },
  loginContainer: {
    backgroundColor: color.white,
    flex: 1,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    paddingHorizontal: 24,
    top: "20%",
  },
  ctaTextStyle: {
    fontSize: 12,
    fontWeight: "medium",
    marginLeft: 10,
    marginTop: 24,
    marginBottom: 10,
  },
  forgotTextContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    marginBottom: '10%'
  },
  forgotTextCta: {
    fontSize: 12,
    fontWeight: "semibold",
    marginLeft: 10,
    marginBottom: 10,
  },
});
