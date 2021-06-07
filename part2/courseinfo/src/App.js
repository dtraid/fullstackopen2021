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
    <strong>
      total of {course.parts.reduce((total, part) => part.exercises + total, 0)}{' '}
      exercises
    </strong>
  </p>
);

const Course = ({ course }) => (
  <>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </>
);

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      {courses.map((course) => (
        <div id={course.id}>
          <Course course={course} />
        </div>
      ))}
    </>
  );
};

export default App;
