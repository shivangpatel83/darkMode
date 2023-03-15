import React, {useState} from "react"

const TextArea = (props)=>{

    const handleUpClick=()=>{
        // console.log(`onclick is click`)
        setText(text.toUpperCase())
    }

    const handleChange=(e)=>{
        // console.log(`onclick is click2`)
        setText(e.target.value)
    }

    const [text, setText] = useState(``)

    return (
    <>
    <div className='mb-3 container' style={{color : props.mode===`dark`?`white`:`black`}}>
  <h2>{props.heading}</h2>
  <textarea type="email" className="form-control" id="exampleFormControlInput1" value={text} onChange={handleChange} placeholder="name@example.com" rows="5" style={{backgroundColor : props.mode===`dark`?`grey`:`white`,color : props.mode===`dark`?`white`:`black` }}></textarea>
  <button className="btn my-3 btn-primary" onClick={handleUpClick}>Convert to upperacse</button>
  </div>
  <div className='container my-3' style= {{color: props.mode===`dark`?`white`:`black`}}>
    <h2>Your text summary</h2>
    <p>your textarea conatains {text.split(` `).length} words and {text.length} characters</p>
  </div>
 
    </>
    )
}

TextArea.defaultProps = {
    heading : `Enter text here`
}

export default TextArea