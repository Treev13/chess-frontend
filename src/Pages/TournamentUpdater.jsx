import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TournamentForm from "../Components/TournamentForm";
import Loading from "../Components/Loading";

const updateTournament = (tournament) => {
  console.log(tournament)
  return fetch(`/api/tours/tour/${tournament.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tournament),
  })
  //.then((res) => res.json());
};

const fetchTournament = (id) => {
  return fetch(`/api/tours/tour/${id}`).then((res) => res.json());
};

const TournamentUpdater = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tournament, setTournament] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [tournamentLoading, setTournamentLoading] = useState(true);

  useEffect(() => {
    setTournamentLoading(true);
    fetchTournament(id)
      .then((tournament) => {
        setTournament(tournament);
        setTournamentLoading(false);
      });
  }, [id]);

  const handleUpdateTournament = (tournament) => {
    setUpdateLoading(true);
    updateTournament(tournament)
      .then(() => {
        setUpdateLoading(false);
        navigate("/tournaments");
      });
  };

  if (tournamentLoading) {
    return <Loading />;
  }

  return (
    <TournamentForm
      tournament={tournament}
      onSave={handleUpdateTournament}
      disabled={updateLoading}
      onCancel={() => navigate("/tournaments")}
    />
  );
};

export default TournamentUpdater;
