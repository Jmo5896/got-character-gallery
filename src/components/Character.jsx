import React from "react";

function Character({ spouse, realm, race, death, birth, name, imgUrl }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} />
      <ul>
        <li>Spouse: {spouse}</li>
        <li>Realm: {realm}</li>
        <li>Race: {race}</li>
        <li>Date of Death: {death}</li>
        <li>Date of Birth: {birth}</li>
      </ul>
    </div>
  );
}

export default Character;
