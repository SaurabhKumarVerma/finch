import { barChart } from "./barchar";
import { pieChart } from "./piechart";
import { rewardData } from "./rewad";

export const dashboardData = [
  {
    id: 1,
    title: 'Transaction',
    data: [rewardData],
  },
  {
    id: 2,
    title: 'Pie Chart',
    data: [pieChart],
  },
  {
    id: 3,
    title: 'Bar Chart',
    data: [barChart],
  },
];