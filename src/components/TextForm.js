import React , {useState} from 'react'

export default function TextForm(props) {

    const [Text , setText] = useState("");

    const wordCount = Text.split(/\s+/).filter((word) => word.trim() !== "").length;

    const characterCount = Text.replace(/\s+/g, "").length;

    //change to uppercase
    const upclicked = () => {
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Changed To UpperCase!","success");
    }

    //change to lower case
    const loclicked = () => {
      let newText = Text.toLowerCase();
      setText(newText);
      props.showAlert("Changed To LowerCase!","success");
    }

    //clear text 
    const clclicked = () => {
      let newText = "";
      setText(newText);
      props.showAlert("Text Cleared!","success");
    }

    //remove extra space
    const removeclicked = () => {
      var newText = Text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Space Removed!","success");
    }

    //text copied
    const copyclicked = () => {
      var copytext = document.getElementById("mytext");
      copytext.select();
      navigator.clipboard.writeText(copytext.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Text Copied!","success");
    }

    const onchangefun =(event) => {
        setText(event.target.value);
    }


  return (
    <>
        <div className="mb-3" style={{color: props.Mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={Text} onChange={onchangefun} id="mytext" rows="10" style={{backgroundColor: props.Mode === 'dark'?'#212529':'white',color: props.Mode === 'light'?'black':'white'}}></textarea>
        </div>
        <button disabled={Text.length===0} className='btn btn-primary mx-2 my-2' onClick={upclicked}>To Up-Case</button>
        <button disabled={Text.length===0} className='btn btn-primary mx-2 my-2' onClick={loclicked}>To LowerCase</button>
        <button disabled={Text.length===0} className='btn btn-primary mx-2 my-2' onClick={removeclicked}>Clear Ex-Space</button>
        <button disabled={Text.length===0} className='btn btn-primary mx-2 my-2' onClick={copyclicked}>Copy Text</button>
        <button disabled={Text.length===0} className='btn btn-primary float-end my-2' onClick={clclicked}>Clear</button>


        <div className='container my-3' style={{color: props.Mode === 'light'?'black':'white'}}>
          <h2>Your text summary</h2>
          <p>{wordCount} words and {characterCount} character</p>
          <p >Approximate time to read : {0.008*Text.split(" ").filter((element) => element.trim() !== "").length} minutes</p>
        </div>
        <div className='container my-3' style={{color: props.Mode === 'light'?'black':'white'}}>
          <h2>Preview</h2>
          <p>{Text.length>0?Text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}