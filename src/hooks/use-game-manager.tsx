import * as React from "react";
import { type Ressel_Tabacc_Table } from "~/utils/classes";


export function useGameManager() {
  const [table, setTable] = React.useState<Ressel_Tabacc_Table | null>(null);

  const updateTable = (newTable: Ressel_Tabacc_Table) => {
    setTable(newTable);
  };


  return { table, updateTable };
};
