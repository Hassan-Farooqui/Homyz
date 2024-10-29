import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';
import logo from "../../Images/logo.png"
import { Link } from 'react-scroll';


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800){
      return{right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={logo} alt="logo" width={100} />

        <OutsideClickHandler
        onOutsideClick={()=>{
          setMenuOpened(false)
        }}
        >
        <div className="flexCenter h-menu"
        style={getMenuStyles(menuOpened)}>
          
          <a><Link to='r-wrapper'>Residencies</Link> </a>
          <a ><Link to='v-wrapper'>Our Value</Link></a>
          <a ><Link to='contactPage'>Contact Us</Link></a>
          <a ><Link to='g-wrapper'>Get Started</Link></a>
          <button className="button">
             <a ><Link to='contactPage'>Contact</Link></a>
          </button>
        </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiMenuAltRight size={30} />
        </div>

      </div>
    </section>
  )
}

export default Header