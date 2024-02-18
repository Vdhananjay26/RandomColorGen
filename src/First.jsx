import React,{useState} from 'react'
import '../src/First.css'

export const First = ({username="Verma",btn}) => {
  const [color,setColor] = useState("#000000")
  const update = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor)
  }
  return (
    <>
        <div className="main" style={{backgroundColor : color}}>
        <h1 className='head'>Random Color Generator</h1>
        <div className="container">
          <h1 className='colorText'>{color}</h1>
          <button onClick={update}>Click</button>
        </div>
        </div>
    </>
  )
}
export default First
