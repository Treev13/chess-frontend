import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { Button, Paper, Typography } from "@mui/material";

const Player = ({ player, tours }) => {

  return (
    <div className="player-card" flex-row='true'>

      <Paper
        elevation={10}
        variant="elevation" square
        id="playerDetails">
        <Typography gutterBottom variant="h4" align="center" component="div" >
          {player.name} - {player.nationality}
        </Typography>

        <Typography gutterBottom variant="body2" align="center" component="div">
          FIDE Id: {player.fideId} - 
          Born: {player.born} in {player.bornPlace} - 
          Earn GM Title: {player.earnGm} for {player.country}
        </Typography>

        <Typography gutterBottom variant="body2" align="center" component="div">
          <Button size="small">FIDE</Button> - 
          <Button size="small">Wikipedia</Button>
        </Typography>
      </Paper>


      <div style={{ height: 500, width: 1150 }}>
        <DataGrid
          rows={tours}
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

export default Player;

const columns = [
  { field: 'start_date', headerName: 'Start', width: 100 },
  {
    field: 'name',
    headerName: 'Tournament',
    width: 200,
    renderCell: (params) => (
      <Link to={`/tournament/${params.id}`}>{params.value}</Link>
    )
  },
  { field: 'site', headerName: 'Site', width: 120 },
  {
    field: 'age', headerName: 'Age', width: 100,
    valueGetter: (params) => {
      return `${params.row.years}y${params.row.months}m`;
    },
  },
  {
    field: 'elo',
    headerName: 'Elo',
    type: 'number',
    width: 100,
  },
  {
    field: 'result',
    headerName: 'result',
    type: 'number',
    width: 120,
    valueGetter: (params) => {
      return `${params.row.points} / ${params.row.games}`;
    },
  },
  {
    field: 'performance',
    headerName: 'Perf',
    type: 'number',
    width: 120,
  },
  /*{
    field: 'move_avg',
    headerName: 'Moves',
    type: 'number',
    width: 120,
  }*/
  {
    field: 'rating_change',
    headerName: 'Change',
    type: 'number',
    width: 120,
  }
];