import React, {useState} from 'react'

export default function (props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }

  const handleLowClick = ()=>{
    let changeText = text.toLowerCase();
    setText(changeText);
    props.showAlert("Converted to lowercase", "success");
  }

  const handleClearClick = ()=>{
    let clearText = '';
    setText(clearText);
    props.showAlert("Text has been clear successfully", "success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }


  const handleCopyClick = ()=>{
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text has been copied successfully", "success");
  }

  const handleextraSpaces = ()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success");
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="conatiner" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'rgb(101 109 116)':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear all above Text</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleCopyClick}> Copy Whole Text</button>
        <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleextraSpaces}> Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
