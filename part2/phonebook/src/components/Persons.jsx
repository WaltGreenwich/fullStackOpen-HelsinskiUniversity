const Persons = ({ persons, filter }) => {
  return (
    <div>
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
          ) // Filter logic
          .map((person) => (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Persons;
