import { SectionList, View } from "react-native";
import React from "react";
import { dashboardData } from "./dashboardData";
import DashboardHeader from "./DashboardHeader";
import FinchText from "../../base/FinchText/FinchText";
import RewardListing from "./RewardListing";
import FinchBarChart from "../../base/FinchChart/FinchBarChart/FinchBarChart";
import FinchPieChart from "../../base/FinchChart/FinchPieChart/FinchPieChart";

const Dashboard = () => {
    const header = () => {
        return <DashboardHeader />;
    };

    const renderSectionHeader = (title: string) => {
        return (
            <View style={{ marginLeft: 10, marginVertical: 20 }}>
                <FinchText text={title} style={{ fontSize: 20, fontWeight: "700" }} />
            </View>
        );
    };

    const renderItem = (title: string, item: any[]) => {
        return <View>{renderSectionItem(title, item)}</View>;
    };

    const renderSectionItem = (title: string, item: any[]) => {
        if (title === "Transaction") {
            return <RewardListing />;
        } else if (title === "Bar Chart") {
            return (
                <FinchBarChart data={item} xAxisName="month" yAxisName="rewardPoints" />
            );
        } else if (title === "Pie Chart") {
            return (
                <FinchPieChart data={item} xAxisName="category" yAxisName="amount" />
            );
        } else {
            return null;
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <SectionList
                stickySectionHeadersEnabled={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
                keyExtractor={(item, index) => index.toString()}
                sections={dashboardData as any}
                ListHeaderComponent={header}
                renderSectionHeader={({ item, index, section: { title } }) =>
                    renderSectionHeader(title)
                }
                renderItem={({ item, index, section: { title } }) =>
                    renderItem(title, item)
                }
            />
        </View>
    );
};

export default Dashboard;
