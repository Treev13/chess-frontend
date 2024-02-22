import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const PlayerTable = ({ players }) => {
  return (
    <div className="PlayerTable">
      <div style={{ height: 600, width: 1200 }}>
        <DataGrid
          key={players.id}
          rows={players}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 50]}
        />
      </div>
    </div>
  )
};

export default PlayerTable;

const columns = [
  { field: 'fideId', headerName: 'FideId', width: 100 },
  {
    field: 'name',
    headerName: 'Player',
    width: 200,
    renderCell: (params) => (
      <Link to={`/player/${params.id}`}>{params.value}</Link>
    )
  },
  { field: 'nationality', headerName: 'Nat', width: 120 },
  { field: 'born', headerName: 'Born', width: 150 },
  { field: 'earnGM', headerName: 'Earn GM', width: 100, },
  { field: 'country', headerName: 'Country', width: 150, },
  {
    field: "action",
    headerName: "Update",
    sortable: false,
    renderCell: (params) => (
      <Link to={`/player/update/${params.id}`}>
        <Button >Update</Button>
      </Link>
    )
  }

];
