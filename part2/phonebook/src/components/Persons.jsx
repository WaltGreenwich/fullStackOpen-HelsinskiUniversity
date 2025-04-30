// components/Persons.js
import React from "react";

const Persons = ({ persons, filter, onDelete }) => {
  return (
    <div>
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((person) => (
            <li key={person.id}>
              {" "}
              {/* ¡Importante usar el ID como key! */}
              {person.name} {person.number}
              <button onClick={() => onDelete(person.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Persons;
