const Course = ({}) => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  const totalExercises = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );
  console.log(totalExercises);

  const { id, name, parts } = course;
  return (
    <div>
      <h1>{name}</h1>

      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <p>
        <strong>total of {totalExercises} exercises</strong>
      </p>
    </div>
  );
};

export default Course;
