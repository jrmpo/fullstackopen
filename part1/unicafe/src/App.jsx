import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text}) => <button onClick = {onClick}> {text} </button>

const StatisticsLine = ({ text, value }) => <div>{text}: {value}</div>

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0){
    return(
      <div>
        No feedback given yet
      </div>
    )
  }
  
  return(
    <div>
      <StatisticsLine text='good' value={good}/>
      <StatisticsLine text='neutral' value={neutral}/>
      <StatisticsLine text='bad' value={bad}/>
      <StatisticsLine text='total' value={total}/>
      <StatisticsLine text='average' value={average}/>
      <StatisticsLine text='positive' value={positive}/>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  const addGood = () => {
    const updatedCount = good + 1
    const updatedTotal = updatedCount + neutral + bad
    setGood(updatedCount)
    setTotal(updatedTotal)
    setAverage(((updatedCount) + (neutral * 0) + (bad *- 1)) / updatedTotal)
    setPositive(updatedCount / updatedTotal * 100)
  }
  const addNeutral = () => {
    const updatedCount = neutral + 1
    const updatedTotal = updatedCount + good + bad
    setNeutral(updatedCount)
    setTotal(updatedTotal)
    setAverage(((updatedCount*0) + (good) + (bad*-1)) / updatedTotal)
    setPositive(good / updatedTotal * 100)
  }
  const addBad = () => {
    const updatedCount = bad + 1
    const updatedTotal = updatedCount + good + neutral
    setBad(updatedCount)
    setTotal(updatedTotal)
    setAverage(((updatedCount * -1) + (neutral * 0) + (good)) / updatedTotal)
    setPositive(good / updatedTotal * 100)
  }


  return (
    <div>
      <Header text='give feedback'/>
      <Button onClick={addGood} text='good'/>
      <Button onClick={addNeutral} text='neutral'/>
      <Button onClick={addBad} text='bad'/>
      <Header text='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
      {/* <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>total ratings: {total}</div>
      <div>average rating: {average}</div>
      <div>positive percent: {positive}%</div> */}
    </div>
  )
}

export default App