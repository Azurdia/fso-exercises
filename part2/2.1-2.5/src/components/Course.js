const Course = (props) => {
    console.log(props);
    return (
      <div>
        <Header name={props.course.name}/>
        <Content parts={props.course.parts}/>
      </div>
    )
  }
  
  const Header = ({name}) => <h1>{name}</h1>
  
  const Content = ({parts}) => {
    let exercise = parts.map(part => part.exercises)
    let sum = exercise.reduce((current, total) => current + total, 0)
    return (
      <>
        <div>{parts.map(part => <Part part={part} />)}</div> 
        <strong>Total number of exercises:{sum}</strong>
      </>
    )
  }
  
  
  const Part = ({part}) => <p>{part.name} {part.exercises}</p>

  export default Course