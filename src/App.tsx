import "./styles.css";

import SelectTable from "./SelectTable/SelectTable";
import SelectProvider from "./providers/SelectProvider";
import { useState } from "react";
import { Button } from "@mui/material";

const rows: Record<string, string>[] = [
  { id: "id1", a: "a1", b: "b1", c: "c1", d: "d1", e: "e1" },
  { id: "id2", a: "a2", b: "b2", c: "c2", d: "d2", e: "e2" },
  { id: "id3", a: "a3", b: "b3", c: "c3", d: "d3", e: "e3" }
];

const App = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="App">
      <SelectProvider>
        {show1 && <SelectTable rows={rows} />}
        <Button onClick={() => setShow1(!show1)}>SHOW/HIDE</Button>
        {show2 && <SelectTable rows={rows} />}
        <Button onClick={() => setShow2(!show2)}>SHOW/HIDE</Button>
      </SelectProvider>
    </div>
  );
};

export default App;
