import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const TournamentTable = ({ tournaments, onDelete }) => (
  <div className="TournamentTable">
    <div style={{ height: 600, width: 1000 }}>
      <DataGrid
        key={tournaments.id}
        rows={tournaments}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 50]}
      />
    </div>
  </div >
);

export default TournamentTable;

const columns = [
  {
    field: 'name',
    headerName: 'Tournament',
    width: 250,
    renderCell: (params) => (
      <Link to={`/tournament/${params.id}`}>{params.value}</Link>
    )
  },
  { field: 'site', headerName: 'Site', width: 200 },
  { field: 'startDate', headerName: 'Start', width: 100 },
  { field: 'endDate', headerName: 'End', width: 100 },
  { field: 'numberOfPlayers', headerName: 'Players', width: 100, type: 'number' },
  {
    field: "action",
    headerName: "Update",
    sortable: false,
    renderCell: (params) => (
      <Link to={`/tournament/update/${params.id}`}>
        <Button >Update</Button>
      </Link>
    )
  }

];
