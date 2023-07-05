import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const expenseValue = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMaximum = Math.max(...expenseValue);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={totalMaximum}
            label={datapoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
