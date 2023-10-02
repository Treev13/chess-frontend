import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import PlayerOnTournament from "../Components/PlayerOnTournament";

const fetchTournament = (id) => {
  return fetch(`/api/tournament/${id}`).then((res) => res.json());
};

const fetchPlayer = (id, fide_id) => {
  return fetch(`/api/player/${id}/${fide_id}`).then((res) => res.json());
};

const fetchMatches = (id, fide_id) => {
  return fetch(`/api/tournament/${id}/${fide_id}`).then((res) => res.json());
};

const PlayerOnDisplay = () => {
  const { id, type } = useParams();
  //const navigate = useNavigate();

  const [tournament, setTournament] = useState(null);
  const [player, setPlayer] = useState(null);
  const [matches,setMatches] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(true);
  
  useEffect(() => {
    setUpdateLoading(true);
    fetchTournament(id)
      .then((tournament) => {
        setTournament(tournament);
      });
    fetchPlayer(id, type)
      .then((player) => {
        setPlayer(player);
      });
    fetchMatches(id, type)
      .then((matches) => {
        setMatches(matches);
        setUpdateLoading(false);
      });
  }, [id, type]);

  if (updateLoading) {
    return <Loading />;
  }
  
  return (
    <PlayerOnTournament
      tour={tournament}
      player={player}
      matches={matches}
      fide_id={type}
    />
  );
};

export default PlayerOnDisplay;
