import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FinchImage from "../../base/FinchImage/FinchImage";
import FinchText from "../../base/FinchText/FinchText";
import RewardCard from "./RewardCard";
import FinchButton from "../../base/FinchButton/FinchButton";
import { color } from "../../theme/color";
import { images } from "../../../assets";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DashboardHeader = () => {
    const insets = useSafeAreaInsets();
    return (
        <View>
            <View style={{ marginBottom: 20 }}>
                <FinchImage source={images.rewardBg} style={styles.imageStyle} />
                <View style={[styles.rewardContainer, { paddingTop: insets.top }]}>
                    <View>
                        <FinchText
                            text={"Your Points"}
                            style={{ fontWeight: "100", fontSize: 40 }}
                            textColorType={color.pale_gray}
                        />
                        <RewardCard />
                    </View>
                    <View>
                        <FinchButton
                            buttonContainerStyle={styles.buttonStyle}
                            buttonCta="Open Chart"
                            buttonBackgroundColor={color.white}
                            buttonTextColor={color.black}
                        />
                        <FinchButton
                            buttonContainerStyle={styles.buttonStyle}
                            buttonCta="Redeem"
                            buttonBackgroundColor={color.white}
                            buttonTextColor={color.black}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default DashboardHeader;

const styles = StyleSheet.create({
    buttonStyle: {
        width: "80%",
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 1,
    },
    rewardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        position: "absolute",
        marginHorizontal: 20,
        marginTop: 20,
    },
    imageStyle: {
        width: "100%",
        aspectRatio: 2,
    },
});
