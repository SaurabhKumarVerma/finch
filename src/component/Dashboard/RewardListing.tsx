import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { rewardData } from "./rewad";
import RewardCardListing from "./RewardCardListing";

const RewardListing = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginHorizontal: 10 }}>
                <RewardCardListing
                    reward_point={item?.reward_earn}
                    total_reward_point={item?.total_reward}
                    reward_type={item?.reward_type}
                />
            </View>
        );
    };
    return (
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={rewardData}
                renderItem={renderItem}
                keyExtractor={(item, index) => item?.id.toString()}
            />
        </View>
    );
};

export default RewardListing;

const styles = StyleSheet.create({});
