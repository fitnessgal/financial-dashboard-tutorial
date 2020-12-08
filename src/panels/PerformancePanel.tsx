import React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  
} from "@progress/kendo-react-charts";
import { getPerformance } from "../services/dataService";

export default function PerformancePanel() {
  const [data, setData] = React.useState<string[]>();
  React.useEffect(() => {
    getPerformance().then((results: string[]) => {
      setData(results);
    })
  }, []);

  return (
    /*To see this further, let’s add a second chart to this sample app. 
    To do that, open your src/panels/PerformancePanel.tsx file, and replace the 
    <h2>Performance Panel</h2> markup with the code below.
    <h2>Performance Panel</h2>
  )
}
*/
<Chart>
  <ChartTitle text="Fund Performance" />
  <ChartCategoryAxis>
    <ChartCategoryAxisItem categories={["2014", "2015", "2016", "2017", "2018", "2019", "2020"]} />
  </ChartCategoryAxis>
  <ChartSeries>
    <ChartSeriesItem type="line" data={data} />
  </ChartSeries>
  </Chart>
  )}
