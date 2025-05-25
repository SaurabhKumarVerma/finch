import {
    Pressable,
    PressableProps,
    StyleProp,
    StyleSheet,
    TextStyle,
    View,
} from "react-native";
import React from "react";
import FinchText from "../FinchText/FinchText";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "../../theme/color";

interface IFinchButton extends PressableProps {
    buttonCta: string;
    buttonCtaStyle?: StyleProp<TextStyle>;
    isGradient?: boolean;
    linearColor?: string[];
    buttonTextColor: string;
}

const FinchButton = (props: IFinchButton) => {
    const {
        buttonCta,
        buttonCtaStyle,
        isGradient,
        linearColor,
        buttonTextColor,
        ...rest
    } = props;

    const renderButton = () => {
        if (isGradient) {
            return (
                <Pressable {...rest} style={[styles.linearGradientStyle, {backgroundColor: 'red'}]}>
                    <LinearGradient
                        colors={linearColor || color.buttonGradientColor}
                        style={styles.buttonStyle}
                        start={{ x: -1, y: 1 }}
                        end={{ x: -1, y: 1 }}
                    >
                        <FinchText
                            text={buttonCta}
                            style={[styles.buttonTextStyle, buttonCtaStyle]}
                            textColorType={color.white}
                        />
                    </LinearGradient>
                </Pressable>
            );
        } else {
            return (
                <View style={[styles.linearGradientStyle]}>
                    <Pressable
                        {...rest}
                        style={[
                            styles.buttonStyle,
                            { borderWidth: 1, borderColor: color.grey },
                        ]}
                    >
                        <FinchText
                            text={buttonCta}
                            style={[styles.buttonTextStyle, buttonCtaStyle]}
                            textColorType={buttonTextColor || color.white}
                        />
                    </Pressable>
                </View>
            );
        }
    };
    return <View style={{ flex: 1 }}>{renderButton()}</View>;
};

export default FinchButton;

const styles = StyleSheet.create({
    buttonTextStyle: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "500",
    },
    linearGradientStyle: {
        justifyContent: "center",
        alignItems: "center",
        // flex: 1,
        flexDirection: "row",
        borderRadius: 8,
        overflow: "hidden",
    },
    buttonStyle: {
        paddingVertical: 14,
        flex: 1,
        justifyContent: "center",
        borderRadius: 8,
    },
});
