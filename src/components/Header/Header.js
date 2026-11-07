import React from "react";
import "./Header.css"

function Header() {
    return(
        <header>
        <div className='logo'>
          <img src='./icons/logo.png' />
        </div>
        <div className='navigation'>
          <a>Home</a>
          <a>Service</a>
          <a>Agents</a>
          <a>Contact</a>
        </div>
        <div className='header_btns'>
          <div className='search_icon'>
            <img src='./icons/search.png' />
          </div>
          <div className='user_icon'>
            <img src='./icons/user.png' />
          </div>
          <div>
            <button>Sign up</button>
          </div>
          
        </div>
      </header>
    )
}
export default Header