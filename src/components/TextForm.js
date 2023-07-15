import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked "+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","Success");
    }
    const handleLoClick=()=>{
        // console.log("UpperCase was clicked "+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","Success");

    }
    const handleClrClick=()=>{
        // console.log("UpperCase was clicked "+text);
        let newText="";
        setText(newText);
        props.showAlert("text are clear","Success");

    }
    const handleCopyClick=()=>{
        // console.log("UpperCase was clicked "+text);
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        // setText(newText);
        props.showAlert("text are copy","Success");

    }
    const handleExtaSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("spaces are remove","Success");

    }
    const handleOnChange=(event)=>{
        // console.log("OnChange");
        setText(event.target.value);
    }
    
    const[text,setText]=useState('Enter your text (Delete it before write)');
    // setText
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 >{props.heading}</h1>
       <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}
     id="mybox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mt-3 mx-2' onClick={handleUpClick}>Conver To UpperCase</button>
    <button className='btn btn-primary mt-3 mx-2' onClick={handleLoClick}>Conver To LowerCase</button>
    <button className='btn btn-primary mt-3 mx-2' onClick={handleClrClick}>Clear Text</button>
    <button className='btn btn-primary mt-3 mx-2' onClick={handleCopyClick}>Copy Text</button>
    <button className='btn btn-primary mt-3 mx-2' onClick={handleExtaSpaces}>Remove Extra space</button>
    </div>
    
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>

        <h2>Your text summry</h2>
        <p className='text-primary'><b>{text.split(" ").length-1}words and {text.length} characters </b></p>
        <p>{0.008*text.split(" ").length} Minutes resd</p>
        <h2>preview</h2>
        <p>{text.lenght>0?text:"Enter Something in the textbox above to preview it here "}</p>
    </div>
</>
  )
}
