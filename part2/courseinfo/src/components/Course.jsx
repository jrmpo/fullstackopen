const Header = ({course}) => {
  console.log(course.name)
  return(
  <h2>{course.name}</h2>
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

export default Course