import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Button } from "@mui/material";
import useSlection from "../hooks/useSelection";

interface Props {
  rows: Record<string, string>[];
}
const SelectTable = ({ rows }: Props) => {
  const [state, dispatch] = useSlection("111");
  const [selected, setSelected] = useState<readonly string[]>([]);

  const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelected = event.target.checked ? rows.map((row) => row.id) : [];
    setSelected(newSelected);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    setSelected(
      selected.indexOf(id) === -1
        ? [...selected, id]
        : selected.filter((rowId) => id !== rowId)
    );
  };

  return (
    <>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={
                      selected.length > 0 && selected.length < rows.length
                    }
                    checked={rows.length > 0 && selected.length === rows.length}
                    onChange={onSelectAllClick}
                    inputProps={{
                      "aria-label": "select all"
                    }}
                  />
                </TableCell>
                <TableCell>ID</TableCell>
                <TableCell>1</TableCell>
                <TableCell>2</TableCell>
                <TableCell>3</TableCell>
                <TableCell>4</TableCell>
                <TableCell>5</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    onClick={(event) => handleClick(event, row.id)}
                    key={row.id}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        inputProps={{
                          "aria-labelledby": `id${index}`
                        }}
                        checked={selected.indexOf(row.id) !== -1}
                      />
                    </TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.a}</TableCell>
                    <TableCell>{row.b}</TableCell>
                    <TableCell>{row.c}</TableCell>
                    <TableCell>{row.d}</TableCell>
                    <TableCell>{row.e}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {/* <Button onClick={() => dispatch(reset())}>reset</Button>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={() => dispatch(set(10))}>setToTen</Button> */}
      {JSON.stringify(state)}
    </>
  );
};

export default SelectTable;
