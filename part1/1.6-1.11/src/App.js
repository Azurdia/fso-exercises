import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stateArray = [good, neutral, bad]

  const setValue = (type, newValue) => {
    switch (type) {
      case 'good':
        setGood(newValue);
        break;
      case 'neutral' :
        setNeutral(newValue);
        break;
      case 'bad' :
        setBad(newValue)
        break;
      default: 
      return null;
    }
  }

  return (
    <div>
      <Button handleClick={() => setValue('good', good+1)} text='good'/>
      <Button handleClick={() => setValue('neutral', neutral+1)} text='neutral'/>
      <Button handleClick={() => setValue('bad', bad+1)} text='bad'/>
      <Statistics stateArray = {stateArray}/>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  let stateArray = props.stateArray
  let sumArray = props.stateArray.reduce((value, total) => value+total, 0)
  if (sumArray === 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    )
  } else {
    return (
      <>
        <h2>statistics</h2>
        <StatisticLine text="good" value={stateArray[0]} />
        <StatisticLine text="neutral" value={stateArray[1]} />
        <StatisticLine text="bad" value={stateArray[2]} />
        <StatisticLine text="all" value={sumArray} />
        <StatisticLine text="average" value={(stateArray[0]-stateArray[1])/sumArray} />
        <StatisticLine text="positive" value={stateArray[0]/sumArray+' %'} />
      </>
    )
  }
}

const StatisticLine = (props) => {
  return (
    <table>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </table>
  )

}

export default App