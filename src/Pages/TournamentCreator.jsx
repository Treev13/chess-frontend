import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TournamentForm from "../Components/TournamentForm";

const createTournament = (tournament) => {
  return fetch("/api/tournaments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tournament),
  }).then((res) => res.json());
};

const TournamentCreator = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreateTournament = (tournament) => {
    setLoading(true);

    createTournament(tournament)
      .then(() => {
        setLoading(false);
        navigate("/tournaments");
      })
  };

  return (
    <TournamentForm
      onCancel={() => navigate("/tournaments")}
      disabled={loading}
      onSave={handleCreateTournament}
    />
  );
};

export default TournamentCreator;
