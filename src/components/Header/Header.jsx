import React, { useEffect, useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
function Header() {

  const [menuOpened,setmenuOpened]=useState(false)

  const  getMenuStyle=(menuOpened)=>{
    if(document.documentElement.clientWidth<=800){
      return{right: !menuOpened && "-100%"}
    }
  }


  return (
    <div className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src='./logo.png' alt='logo' width={100}></img>

        
        
        <OutsideClickHandler
        onOutsideClick={()=>setmenuOpened(false)}
        >
        <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className='button'>
            <a href="">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>

        

        <div className="menu">
          <BiMenuAltRight onClick={()=>setmenuOpened((prev)=>!prev)} size={30} />
        </div>
      </div>

    </div>
  )
}

export default Header