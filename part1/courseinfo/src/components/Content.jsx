const Part = ({ part, exercises }) => {
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((item, index) => (
        <Part key={index} part={item.part} exercises={item.exercises} />
      ))}
    </div>
  );
};

export default Content;
