import React from 'react'
import "./Header.css"
function Header() {
  return (
<div className="headmain">
    <div className="logo"> <a href="/l">Logo</a> </div>
    <div className="searchAreacom"> <div className="inputraper"> <input type="text" name="name" placeholder='Search Member By Address ' id="" /><button className='Searchbtn'>Search</button></div><button  className='Contextbtn'>Connect Wallet</button></div>
</div>
  )
}

export default Header