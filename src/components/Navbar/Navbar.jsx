import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';

// let c1 = "item"
// let c2 = "active"
// "item active"
// let classes = c1 + " " + c2
// let classesNew = `${classes.item} ${c2}`

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to="/profile" className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/dialogs" className = { navData => navData.isActive ? classes.active : classes.item }>Messages</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/news" className = { navData => navData.isActive ? classes.active : classes.item }>News</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/music" className = { navData => navData.isActive ? classes.active : classes.item }>Music</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/settings" className = { navData => navData.isActive ? classes.active : classes.item }>Settings</NavLink>
          </div>
          </nav> 
    
}

export default Navbar;