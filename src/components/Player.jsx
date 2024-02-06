import { useState } from "react";
export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange =(e)=>{
    setPlayerName(e.target.value);
  }
  const handleEditClick = (e) => {
    setIsEditing(true);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" name="playerName" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <>
      <li>
        <span className="player">
          {editablePlayerName}

          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
