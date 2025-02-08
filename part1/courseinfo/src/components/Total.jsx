const Total = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (sum, item) => sum + item.exercises,
    0
  );

  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  );
};

export default Total;
