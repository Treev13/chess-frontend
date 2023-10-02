import { Link } from "react-router-dom";

const PlayerOnTournament = ({ player, tour, matches, fide_id }) => {
  return (
    <div className="player-result">

      <div id="tourDetail">
        <h3>
          <Link to={`/tournament/${tour.id}`}>
            {tour.name}
          </Link> - {tour.site} - {tour.start_date} - {tour.end_date}
        </h3>
      </div>
      <div>
        <h3>
          {player.player} - {player.years}y{player.monthes}m - {player.elo} - {player.points}/{player.games} - {player.o_elo_avg} - {player.performance}
        </h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Round</th>
            <th>Color</th>
            <th>Opponent</th>
            <th>Opp_nat</th>
            <th>Opp_elo</th>
            <th>Result</th>
            <th>Moves</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.opponent}>
              
              <td>{match.date}</td>
              <td>{match.round}</td>
              <td>{match.color}</td>
              <td>
                  {match.opponent}
              </td>
              <td>{match.opp_nat}</td>
              <td>{match.opp_elo}</td>
              <td>{match.result}</td>
              <td>{match.moves}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
};

export default PlayerOnTournament;
