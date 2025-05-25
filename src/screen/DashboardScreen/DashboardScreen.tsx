import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Dashboard from "../../component/Dashboard/Dashboard";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "../../theme/color";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DashboardScreen = () => {
    
  return (
    <View style={[styles.container,]}>
      <Dashboard />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
