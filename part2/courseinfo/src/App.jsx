const Header = ({course}) => {
  console.log(course.name)
  return(
  <h1>{course.name}</h1>
 )
}

const Part = ({section}) => {
  console.log(section.name)
  console.log(section.exercises)
  return (
    <>
    <p>{section.name}: {section.exercises} exercises</p>
    </>
  )
}

const Content = ({course}) => {
  return (
    <div>
      {course.parts.map(part =>
        <Part key={part.id} section={part}/>
      )}
    </div>
  )
}

const Total = ({parts}) => {

  const exercisesArr = parts.map(part => part.exercises)
  console.log(exercisesArr);
  
  const total = exercisesArr.reduce((accumulator, currentVal) => accumulator + currentVal, 0)
  return (
    <div>
      <p>Number of exercises: {total}</p>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  )
}


/* App for exercises 1.3-1.5 */
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  return (

    <Course course={course} />
    
    // <div>
    //   <Header course={course} />
    //   <Content course={course} />
    //   <Total course={course} />
    // </div>
  )
}

export default App
