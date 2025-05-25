import { View } from "react-native";
import React from "react";
import RewardIcon from "../../../assets/images/reward.svg";
import FinchText from "../../base/FinchText/FinchText";
import { color } from "../../theme/color";

interface IRewardCardListing {
    reward_point: number,
    total_reward_point?: number,
    reward_type: string
}

const RewardCardListing = (props: IRewardCardListing) => {
    return (
        <View style={{borderWidth: 1, borderRadius: 6, paddingHorizontal: 8, justifyContent: 'center',borderColor: color.pale_gray, }}>
            <View style={{ paddingHorizontal: 20,paddingVertical: 10 }}>
                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                    <RewardIcon width={50} height={40} />
                <View style={{ alignItems: 'center', paddingTop: 10}}>
                    <FinchText text={props?.reward_type || ''} style={{ fontSize: 14, fontWeight: "600" }} />
                    <FinchText text={props?.reward_point || ''} style={{ fontSize: 14, fontWeight: "400" }} />
                </View>
                </View>
            </View>
        </View>
    );
};

export default RewardCardListing;

