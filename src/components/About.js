import React from 'react'

export default function About(props) {

    let myStyle =  {
        color: props.Mode === 'dark'?'white':'#212529',
        backgroundColor: props.Mode === 'dark'?'#212529':'white'
    }

  return (
        <div className="container-fluid p-0" style={myStyle}>
            <div className='container vh-100' style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion my-2" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
                </button>
            </h2>
            <div style={myStyle} id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count , character count or
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
                </button>
            </h2>
            <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                TextUtils is a free character Counter tool that proides instant character count & word count statistics for a given text.
                TextUtils reports the number of words and characters. Thus it is suitable for writng text with words / character limit. 
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatiable</strong>
                </button>
            </h2>
            <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                This word counter software works in any web browser such as chrome , firefox , internet explorer , safari , opera. It suits to count characters in facebook , blog , excel document , pdf document , etc.
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}