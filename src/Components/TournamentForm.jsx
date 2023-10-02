import { FormControl } from "@mui/material";

const TournamentForm = ({ onSave, disabled, tournament, onCancel }) => {

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];

    const tournament = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    return onSave(tournament);
  };

  return (
    <form className="TournamentForm" onSubmit={onSubmit}>
      {tournament && (
        <input type="hidden" name="id" defaultValue={tournament.id} />
      )}

      <div className="control">
        <label htmlFor="shortName">Short Name:</label>
        <input
          defaultValue={tournament ? tournament.shortName : null}
          name="shortName"
          id="shortName"
        />
      </div>

      <div className="control">
        <label htmlFor="name">Name:</label>
        <input
          defaultValue={tournament ? tournament.name : null}
          name="name"
          id="name"
        />
      </div>

      <div className="control">
        <label htmlFor="site">Site:</label>
        <input
          defaultValue={tournament ? tournament.site : null}
          name="site"
          id="site"
        />
      </div>

      <div className="control">
        <label htmlFor="start-date">Start date:</label>
        <input
          defaultValue={tournament ? tournament.startDate : null}
          name="startDate"
          id="startDate"
        />
      </div>

      <div className="control">
        <label htmlFor="end-date">End date:</label>
        <input
          defaultValue={tournament ? tournament.endDate : null}
          name="endDate"
          id="endDate"
        />
      </div>

      <div className="control">
        <label htmlFor="number-of-players">Number of players:</label>
        <input
          defaultValue={tournament ? tournament.numberOfPlayers : null}
          name="numberOfPlayers"
          id="numberOfPlayers"
        />
      </div>

      <div className="buttons">
        <button type="submit" disabled={disabled}>
          {tournament ? "Update Tournament" : "Create Tournament"}
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TournamentForm;
