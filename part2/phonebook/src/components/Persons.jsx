const Persons = ({ persons, filter = "", onDelete }) => {
  return (
    <div>
      <ul>
        {persons
          .filter((person) =>
            person.name?.toLowerCase().includes(filter?.toLowerCase() || "")
          )
          .map((person) => (
            <li key={person.id}>
              {person.name} {person.number}
              <button onClick={() => onDelete(person.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Persons;
