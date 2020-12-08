import React from "react";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartTitle,
  ChartTooltip
} from "@progress/kendo-react-charts";
import { getFundAllocation } from "../services/dataService";
import { Allocation } from "../data/models";

export default function AllocationPanel() {
  const [data, setData] = React.useState<Allocation[]>();
  React.useEffect(() => {
    getFundAllocation().then((data: Allocation[]) => {
      setData(data);
    })
  }, []);

  return (
    /*To use that data in a chart, replace the AllocationPanel.tsx file’s 
    <h2>Allocation Panel</h2> markup with the code below, which renders the 
    file’s data in a KendoReact Chart component.
    <h2>Allocation Panel</h2>
  )
}*/
<Chart>
  <ChartTitle text={"Asset Allocation"}></ChartTitle>
  <ChartSeries>
    <ChartSeriesItem type="donut" data={data}>
    <ChartSeriesLabels
      content={e => `${e.value}%`}
      background="none"
      color="#fff" />
    </ChartSeriesItem>
  </ChartSeries>
  <ChartLegend position={"bottom"} visible={true} />
  <ChartTooltip render={(e: any) => (
    <div>{e.point ? e.point.category : ""}</div>
  )} />
</Chart>
  )}
