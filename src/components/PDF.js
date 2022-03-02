import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const PDF = (props) => {
let contextColor = props.text
  return (
    <>
      <div className="Post" ref={ref}>
        <div className="head">
          <h1 style={{display:'none'}}>{props.title}</h1>
          <img src={props.frame} style={{width:'100%'}} alt=""/>
        </div>
        <img src={props.baloon} style={{width:'40%'}} alt=""/>
        <img src={props.image} style={{position: 'absolute',top:' 35%',left: '43%'}} alt={props.title} />
        <p style={{ width: '50%',
                    margin: 'auto',
                    // position: 'absolute',
                    // left: '30%',
                    // bottom: '25%',
                    color:contextColor}}>
            {props.content}
        </p>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button style={{margin:'1em'}} onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;