import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import TournamentTable from "../Components/TournamentTable";

const fetchTournaments = () => {
    return fetch("/api/tours").then((res) => res.json());
};

const TournamentList = () => {
    const [loading, setLoading] = useState(true);
    const [tournaments, setTournaments] = useState([1]);

    useEffect(() => {
        fetchTournaments()
            .then((tournaments) => {
                setLoading(false);
                setTournaments(tournaments);
            })
    }, []);

    if (loading) {
        return <Loading />;
    }

    return <TournamentTable tournaments={tournaments} />;
};

export default TournamentList;
