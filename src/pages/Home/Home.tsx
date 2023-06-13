import React, { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

  const pageSize = 5;
  const columns = [
    {
      field: "action",
      headerName: "",

      minWidth: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>{<Checkbox size="small" />}</>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "categories",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
    <DataGrid
      rows={People}
      columns={columns}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[5, 10, 20]}
      getRowId={(row: any) => row.id}
    />
  );
};

export default Home;
