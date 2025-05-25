import React from "react";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { color } from "../../../theme/color";
import {VictoryBarProps} from "victory-bar/es"

interface IFinchBarChart extends VictoryBarProps {
    data: readonly any[];
    xAxisName: string;
    yAxisName: string;
}
const FinchBarChart = (props: IFinchBarChart) => {
    const {data, xAxisName, yAxisName, ...rest} = props
    return (
        <VictoryChart domainPadding={{ x: 14 }} theme={VictoryTheme.material}>
            <VictoryBar
                data={data}
                x={xAxisName}
                y={yAxisName}
                animate={{ duration: 1000, easing: "cubicIn" }}
                style={{
                    data: {
                        fill: color.slightly_blue,
                    },
                }}
                {...rest}
            />
        </VictoryChart>
    );
};

export default FinchBarChart;
