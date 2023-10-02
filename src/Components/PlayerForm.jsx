

const PlayerForm = ({ onSave, disabled, player, onCancel }) => {

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];

    const player = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    return onSave(player);
  };

  return (
    <form className="PlayerForm" onSubmit={onSubmit}>
      {player && (
        <input type="hidden" name="id" defaultValue={player.id} />
      )}

      <div className="control">
        <label htmlFor="name">Name:</label>
        <input
          defaultValue={player ? player.name : null}
          name="name"
          id="name"
        />
      </div>

      <div className="control">
        <label htmlFor="fideId">Fide Id:</label>
        <input
          defaultValue={player ? player.fideId : null}
          name="fideId"
          id="fideId"
        />
      </div>

      <div className="control">
        <label htmlFor="nationality">Nationality:</label>
        <input
          defaultValue={player ? player.nationality : null}
          name="nationality"
          id="nationality"
        />
      </div>

      <div className="control">
        <label htmlFor="born">Born:</label>
        <input
          defaultValue={player ? player.born : null}
          name="born"
          id="born"
        />
      </div>

      <div className="control">
        <label htmlFor="bornPlace">Born Place:</label>
        <input
          defaultValue={player ? player.bornPlace : null}
          name="bornPlace"
          id="bornPlace"
        />
      </div>

      <div className="control">
        <label htmlFor="earnGm">Earn GM Title:</label>
        <input
          defaultValue={player ? player.earnGm : null}
          name="earnGm"
          id="earnGm"
        />
      </div>

      <div className="control">
        <label htmlFor="country">Country:</label>
        <input
          defaultValue={player ? player.country : null}
          name="country"
          id="country"
        />
      </div>

      <div className="buttons">
        <button type="submit" disabled={disabled}>
          {player ? "Update Player" : "Create Player"}
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PlayerForm;
