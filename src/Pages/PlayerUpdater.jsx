import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlayerForm from "../Components/PlayerForm";
import Loading from "../Components/Loading";

const updatePlayer = (player) => {
  return fetch(`/api/players/player/${player.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  })
  //.then((res) => res.json());
};

const fetchPlayer = (id) => {
  return fetch(`/api/players/player/${id}`).then((res) => res.json());
};

const PlayerUpdater = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [playerLoading, setPlayerLoading] = useState(true);

  useEffect(() => {
    setPlayerLoading(true);
    fetchPlayer(id)
      .then((player) => {
        setPlayer(player);
        setPlayerLoading(false);
      });
  }, [id]);

  const handleUpdatePlayer = (player) => {
    setUpdateLoading(true);
    updatePlayer(player)
      .then(() => {
        setUpdateLoading(false);
        navigate("/players");
      });
  };

  if (playerLoading) {
    return <Loading />;
  }

  return (
    <PlayerForm
      player={player}
      onSave={handleUpdatePlayer}
      disabled={updateLoading}
      onCancel={() => navigate("/players")}
    />
  );
};

export default PlayerUpdater;
