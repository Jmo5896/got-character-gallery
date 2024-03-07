import React from "react";
import characterData from "../data/characterData.json";
import Character from "./Character";
function CharacterGallery() {
  return (
    <div>
      {characterData.map((char) => (
        <Character key={char._id} {...char} />
      ))}
    </div>
  );
}

export default CharacterGallery;
