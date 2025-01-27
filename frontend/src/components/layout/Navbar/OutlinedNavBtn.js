import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Radium from 'radium'
import classes from './Navbar.module.css'
import { eventTrack } from '../../functions'

// Assets

const OutlinedNavBtn = ({ to, content, children, mobile, clicked }) => {
  let currentlyActiveStyle = { color: '#4bb781' }
  const currentClass = mobile
    ? classes.mobile_outlined_nav_li
    : classes.outlined_nav_li

  const quotebuttonHandler = () => {
    eventTrack('navigation/layout', 'Nav_Hire_Us_Button_Clicked', 'live')
  }
  return (
    <li className={currentClass}>
      <button className={classes.tracking_button} onClick={quotebuttonHandler}>
        {/* Version < 2.2 */}

        <Link
          className={classes.wideLink}
          to={to}
          activeStyle={currentlyActiveStyle}
          onClick={clicked}
        >
          {content ? content : children}
        </Link>
      </button>
    </li>
  )
}

export default Radium(OutlinedNavBtn)
