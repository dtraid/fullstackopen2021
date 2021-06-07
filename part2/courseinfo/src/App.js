import React from 'react';

const Header = ({ course }) => <h1>{course.name}</h1>;

const Content = ({ course }) => (
  <div>
    {course.parts.map((part) => (
      <p id={part.id}>
        {' '}
        <Part part={part} />
      </p>
    ))}
  </div>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ course }) => (
  <p>
    Number of exercises{' '}
    {course.parts.reduce((total, part) => part.exercises + total, 0)}
  </p>
);

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
);

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  };
  return <Course course={course} />;
};

export default App;