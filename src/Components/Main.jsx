import React from 'react'
import BodyPart2 from './BodyPar2/BodyPart2'
import Header from './Header/Header'
import BodyPart1 from './BodyPart1/BodyPart1'
import Footer from './Footer/Footer'
function Main() {
  return (
    <>
     <Header/>
    <BodyPart1/>
    {/* <div style={{backgroundColor:"#1E1E1E", borderBottom:"1px solid black",height:"1px"}} >  </div> */}
    <BodyPart2/>
    <Footer/> 
 
    </>
  )
}

export default Main