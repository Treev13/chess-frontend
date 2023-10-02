import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerForm from "../Components/PlayerForm";

const createPlayer = (player) => {
  console.log(player)
  return fetch("/api/players/player/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  })
  //.then((res) => res.json());
};

const PlayerCreator = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreatePlayer = (player) => {
    setLoading(true);

    createPlayer(player)
      .then(() => {
        setLoading(false);
        navigate("/players");
      })
  };

  return (
    <PlayerForm
      onCancel={() => navigate("/players")}
      disabled={loading}
      onSave={handleCreatePlayer}
    />
  );
};

export default PlayerCreator;
