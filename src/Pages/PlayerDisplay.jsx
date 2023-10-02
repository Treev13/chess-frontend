import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import Player from "../Components/Player";

const fetchPlayer = (id) => {
  return fetch(`/api/players/player/${id}`).then((res) => res.json());
};

const fetchTournaments = (id) => {
  return fetch(`/api/players/player/${id}/tours`).then((res) => res.json());
};

const PlayerDisplayer = () => {
  const { id } = useParams();
  //const navigate = useNavigate();

  const [player, setPlayer] = useState(null);
  const [tournaments, setTournaments] = useState(null);
  //const [updateLoading, setUpdateLoading] = useState(false);
  const [playerLoading, setPlayerLoading] = useState(true);

  useEffect(() => {
    setPlayerLoading(true);
    fetchPlayer(id)
      .then((player) => {
        setPlayer(player);
      });
    fetchTournaments(id)
      .then((tournaments) => {
        setTournaments(tournaments);
        setPlayerLoading(false);
      });
  }, [id]);

  if (playerLoading) {
    return <Loading />;
  }

  return (
    <Player
      player={player}
      tours={tournaments}
    />
  );
};

export default PlayerDisplayer;
