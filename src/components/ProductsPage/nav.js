import React from 'react'
import "./nav.css"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GoPerson } from 'react-icons/go'
import { ImExit } from 'react-icons/im'

function Nav() {
  return (
    <nav className="nav">
      <div className="shopping" onClick={() => window.location.reload()}>
        Shop
      </div>
      <div className="nav_buttons">
        <AiOutlineShoppingCart className="button"/>
        <GoPerson className="button"/>
        <ImExit className="button"/>
      </div>
    </nav>
  )
}

export default Nav