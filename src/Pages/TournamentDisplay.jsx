import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import Tournament from "../Components/Tournament";

const fetchTournament = (id) => {
  return fetch(`/api/tournament/${id}`).then((res) => res.json());
};

const fetchPlayers = (id) => {
  return fetch(`/api/tournament/${id}/players`).then((res) => res.json());
};

const TournamentDisplayer = () => {
  const { id } = useParams();
  //const navigate = useNavigate();

  const [tournament, setTournament] = useState();
  const [players, setPlayers] = useState([1]);
  //const [updateLoading, setUpdateLoading] = useState(false);
  const [tourLoading, setTourLoading] = useState(true);

  useEffect(() => {
    setTourLoading(true);
    fetchTournament(id)
      .then((tournament) => {
        setTournament(tournament);
      });
    fetchPlayers(id)
      .then((players) => {
        setPlayers(players);
        setTourLoading(false);
      });
  }, [id]);

  if (tourLoading) {
    return <Loading />;
  }

  return (
    <Tournament
      tour={tournament}
      players={players}
    />
  );
};

export default TournamentDisplayer;
