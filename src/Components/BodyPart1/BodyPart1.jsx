import React from 'react'
import "./BodyPart1.css"
import img from "./img/download.jpg"
function BodyPart1() {
  return (
<>
<div className="parent">
  <div className=" wid">
                 <div className='cardbody1' >
                    <img className='img' src={img} alt="" /> 
                    <div className="block"> <p className='info'>My Info</p> <div className="block1 "> <p>Address</p> <p>0x553f....23</p>   </div>  <div className="block2 "> <p>Matic</p> <p>0.09034</p>   </div>  <div className="block3 "> <p>DAI</p> <p>0.00</p>   </div> <div className="block4 "> <p>Level</p> <p>08</p>   </div>
                     </div> </div></div>
  

<div className="wid2">                   
                   <div className="child1"> <p className='title' >My Link</p> <p className='dis'>meta-force.space/r/tfQl833h...</p> <p className='explain' > Share the link and invite your friends to the Meta Force to build your team.</p></div>
                   <div className="parent3part1"> 
                                <div className="child31"><div className="linkBody"> <p  className='title3'>My Referrals</p> <p className='dis3'>0.00</p> <p className='explain'>Stable Force Classic</p></div></div>
                                <div className="child32"><div className="linkBody"> <p  className='title3'>My Total Earnings</p> <p className='dis3'>0.00</p> <p className='explain'>Stable Force Classic</p> </div></div>
                                </div> 

</div> 



<div className="wid3">


                   <div className="child2"><p className='title'>Latest Update</p> <p className='explain' >Share the link and invite your friends to the Meta Force to build your team.</p>
               </div>
               <div className="parent4">    <div className="imgb"><img className='img' src={img} alt="" /></div>   <div className="lastbody"><p className='info' >Upline</p> <div className="block31 "> <p>Address</p> <p>0x553f....23</p>   </div> <div className="block4 "> <p>Level</p> <p>08</p></div></div>   </div> 
                    
</div>
</div>
<div className="lineparent">
  <div className="line"></div>
</div>
{/* <div style={{backgroundColor:"#1E1E1E", borderBottom:"1px solid black",height:"1px"}} >  </div> */}

   </>)
}

export default BodyPart1