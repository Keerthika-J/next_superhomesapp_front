import '../Price Chart/Price.css';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id,title, info }) => 
{
  const [expanded, setExpanded] = useState(false);
  const [flag,setFlag]=useState(0);
  const handleClick=()=>
  {
    setExpanded(!expanded); 
  }
  return (
    <article className='question'>
      <header className="flex justify-between">
        <h4 onClick={handleClick} className='question-title'>
          {title}
        </h4>
        <button className='btn' onClick={handleClick}>
        {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <ol>{info.map((i,j)=>React.createElement("li",{key:j},i))}</ol>}
    </article>
  )
}
export default Question;