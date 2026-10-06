import React, {useState} from 'react'

export default function Textform( props) {
  const handleUpClick = ()=>{
    setText(text.toUpperCase());
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState("enter text here");
  
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="12"></textarea>
      </div>
       <button className="btn" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn ms-2" onClick={()=>setText(text.toLowerCase())}>Convert to Lowercase</button>
       <button className="btn ms-2" onClick={()=>setText("")}>Clear Text</button>
      
    </div>
  )
}