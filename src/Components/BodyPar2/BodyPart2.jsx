import React from 'react'
import "./BodyPart2.css"
import Design from './Design'
import Designb from './Designb'
function BodyPart2() {
  return (
    <div className="par2Container">
      <div className="childParent2">  
            <div className="btnParent">
            <button className="btn1">MLM Markating Plan
</button>
            <button className="btn2">Digitel Product Plan</button>
        </div>
        <div className="row1"> <div className="con1"> <Designb/></div>
        <div className="row2"><Design/><Design/>  </div></div>
<div className="rowrappe">
        <div className="row3"> <div className="con2"><Design/></div> <div className="con2"><Design/></div>    <div className="con2"><Design/></div>       </div>
        </div>
<div className="rowrappe">
        <div className="row4"> <div className="con2"><Design/></div> <div className="con2"><Design/></div>    <div className="con2"><Design/></div>       </div>
        </div>
        <div className="conten">
          <p>Pay Developer Fees 
To Activate Locked Plans</p>
<button>Unlock Plan Now</button>
        </div>
        </div>
    </div>
  )
}

export default BodyPart2