import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import PlayerTable from "../Components/PlayerTable";

const fetchPlayers = () => {
  return fetch("/api/players").then((res) => res.json());
};

const PlayerList = () => {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([1]);

useEffect(() => {
    fetchPlayers()
      .then((players) => {
        setLoading(false);
        setPlayers(players);
      })
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <PlayerTable players={players} />;
};

export default PlayerList;
