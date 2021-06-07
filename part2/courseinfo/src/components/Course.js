import React from 'react';

const Header = ({ course }) => <h1>{course.name}</h1>;

const Content = ({ course }) => (
  <div>
    {course.parts.map((part) => (
      <p key={part.id}>
        {' '}
        <Part part={part} />
      </p>
    ))}
  </div>
);

const Part = ({ part }) => (
  <>
    {part.name} {part.exercises}
  </>
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

export default Course;
