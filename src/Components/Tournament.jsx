import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Typography } from "@mui/material";

const Tournament = ({ tour, players }) => {

  return (
    <div className="tournament-card">

      <Paper
        elevation={10}
        variant="elevation" square
        id="tourDetails">
        <Typography align='center' variant="h4" gutterBottom>
          {tour.name} - {tour.site}
        </Typography>
        <Typography align='center' variant="h5" gutterBottom>
          {tour.startDate} - {tour.endDate} - {tour.numberOfPlayers} players
        </Typography>
      </Paper>
      <div style={{ height: 500, width: 1150 }}>
        <DataGrid
          key={players.id}
          rows={players}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 15 },
            },
          }}
          pageSizeOptions={[5, 15, 50]}
        />
      </div>

    </div>
  )
};

export default Tournament;

const columns = [
  {
    field: 'player',
    headerName: 'Player',
    width: 200,
    renderCell: (params) => (
      <Link to={`/player/${params.id}`}>{params.value}</Link>
    )
  },
  {
    field: 'age', headerName: 'Age', width: 100,
    valueGetter: (params) => {
      return `${params.row.years}y${params.row.months}m`;
    },
  },
  {
    field: 'nationality',
    headerName: 'Nat',
    width: 80,
  },
  {
    field: 'elo',
    headerName: 'Elo',
    type: 'number',
    width: 100,
  },
  {
    field: 'result',
    headerName: 'Result',
    type: 'number',
    width: 120,
    valueGetter: (params) => {
      return `${params.row.points} / ${params.row.games}`;
    },
  },
  {
    field: 'o_elo_avg',
    headerName: 'OppElo Avg',
    type: 'number',
    width: 120,
  },
  {
    field: 'performance',
    headerName: 'Perf',
    type: 'number',
    width: 120,
  },
  {
    field: 'move_avg',
    headerName: 'Moves',
    type: 'number',
    width: 120,
  },
  {
    field: 'rating_change',
    headerName: 'Change',
    type: 'number',
    width: 120,
  },
];
