import React from "react";
import { VictoryPie, VictoryTheme } from "victory-native";
import {VictoryPieProps} from "victory-pie/es"

interface IFinchPieChart extends VictoryPieProps{
    data: readonly any[];
    xAxisName: string;
    yAxisName: string;
}

const FinchPieChart = (props: IFinchPieChart) => {
    const {data, xAxisName, yAxisName, ...rest} = props
    return (
        <VictoryPie
            data={data}
            theme={VictoryTheme.clean}
            y={xAxisName}
            x={yAxisName}
            animate={{ duration: 1000, easing: "back" }}
            {...rest}
        />
    );
};

export default FinchPieChart;
