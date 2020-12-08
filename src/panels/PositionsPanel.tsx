import React from "react";
import { Grid, GridCellProps, GridColumn } from "@progress/kendo-react-grid";
import { getPositions } from "../services/dataService";
import { Position } from "../data/models";
/*Next, add the following constant to the top of the same file 
(just below the import statements).*/
const ChangeCell = (props: GridCellProps) => {
  const value = props.dataItem[props.field || ""];
  return (
    <td style={{ color: value > 0 ? "green" : "red" }}>
      {value}%
    </td>
  )
}



export default function PositionsPanel() {
  const [positions, setPositions] = React.useState<Position[]>();
  React.useEffect(() => {
    getPositions().then((data: Position[]) => {
      setPositions(data);
    });
  }, []);

  return (
    /*The file also contains some data in a positions constant. 
    To use it, replace the file’s 
    <h2>Positions Panel</h2> markup with the following code.
    <h2>Positions Panel</h2>
  );
} */

<Grid
  data={positions}
  style={{ height: 700 }}
>
  <GridColumn title="Symbol" field="symbol" locked={true} width={100} />
  <GridColumn title="Name" field="name" />
  {/*changing the code due to the assignment
  <GridColumn title="Change" field="day_change" />
  <GridColumn title="% Change" field="change_pct" />*/}

 <GridColumn title="Change" field="day_change" cell={ChangeCell} />
<GridColumn title="% Change" field="change_pct" cell={ChangeCell} />

  <GridColumn title="Volume" field="volume" />
  <GridColumn title="Market Cap" field="market_cap" />
</Grid>
  )}
