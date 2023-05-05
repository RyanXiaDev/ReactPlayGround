import {useState, useRef, useEffect} from "react"

export default function Timer(){
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [timeDisplay, setTimeDisplay] = useState("00")
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(()=>{
    if(isRunning){
      intervalRef.current = setInterval(()=>{
        console.log("test", timeDisplay)
        setTimeDisplay((prev)=>(parseInt(prev)-1).toString())
        console.log("why?")
      }, 1000)
    }
    
  },[isRunning,])

  const handleStart = () =>{
    //clearInterval(intervalRef.current);
    setTimeDisplay(seconds)
    setIsRunning(true)

  }

  const handlePause = () =>{
    clearInterval(intervalRef.current)
    setIsRunning(!isRunning)
  }

  const handleReset = () =>{
    clearInterval(intervalRef.current);
    setMinutes(0)
    setSeconds(0)
    setTimeDisplay("00")
    setIsRunning(false)
  }

  return (
    <>
      <h2>Timer</h2>
      <div>{timeDisplay}</div>
      <input
        value={minutes}
        onChange={(e)=>{setMinutes(e.target.value)}}
      />
      <input
        value={seconds}
        onChange={(e)=>{setSeconds(e.target.value)}}
      />
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}