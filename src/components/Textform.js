import React, {useState} from "react";
import PropTypes from 'prop-types'
// "use strict";

function Textform(props) {

     const [text, setText] = useState('Enter text here');

    const handleUpClick =() =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase letters","success");
    }
    const handleLowClick =() =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase letters","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleClear = () =>{
        setText('');
        props.showAlert("Cleared text","success");
    }

    const handleInverse = () =>{
        let i=0;
        let s =''
        while(i<text.length){
          let n = text.charAt(i);
          if(n === n.toUpperCase())
            n = n.toLowerCase();
          else
            n = n.toUpperCase();
          i +=1;
          s +=n;
        }
        setText(s);
        props.showAlert("Converted to InVeRsE","success");
    }

    
  return (
    <>
    <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowecase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>

        <button className="btn btn-primary mx-2" onClick={handleInverse}>InVeRsE</button>
    </div>

    <div className="container my-2">
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes needed to read</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text: "Enter content to preview here" }</p>
    </div>
    </>
  );
}


export default Textform;
