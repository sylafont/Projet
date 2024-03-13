
export function MyChoiceofNumber({handleChange, nb_tracks }) {

    return (
      <>
        <label>Nombre de musiques à afficher</label>
        <input  type="number" value={nb_tracks} onChange={handleChange} />
      </>
    );
  }
  