import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import CenterContainer from '../../CenterContainer'
import classes from './Footer.module.css'

let navItems = [
  { to: '/', name: 'Home' },
  { to: '/ourwork', name: 'Our Work' },
  { to: '/services', name: 'Services' },
  { to: '/blog', name: 'Blog' },
  { to: '/privacy', name: 'Privacy Policy' },
  // { to: '/quote', name: 'Hire Us' },
]
const year = new Date().getFullYear()

const Footer = () => {
  return (
    <Fragment>
      <div className={classes.backStrip}></div>
      <div className={classes.background}>
        <CenterContainer>
          <div className={classes.innerDiv}>
            <ul>
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link className={classes.a} to={item.to}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <Link className={classes.a} to='/#quote_anchor'>
                Hire Us
              </Link>
            </ul>

            <h2 className={classes.contact}>
              {'(239)-671-7373'} sales@thewebdev.net
            </h2>
            <h3 className={classes.copyRight}>&copy; LemaTech LLC {year} </h3>
          </div>
        </CenterContainer>
      </div>
    </Fragment>
  )
}

export default Footer
