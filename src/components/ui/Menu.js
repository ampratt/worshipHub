import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
// import HomeIcon from 'react-icons/lib/fa/home'
// import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
// import ListDaysIcon from 'react-icons/lib/fa/table'
// import '../../stylesheets/Menu.scss'

const logo = {
    width: 80
}

const Search = () =>
    <div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>

const Menu = () => 
        <div className="">
            <nav className="navbar navbar-toggleable-sm bg-primary navbar-inverse">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="/">Worship Hub</a>

              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                  <li className="nav-item">
                     <Link to="/songs" activeClassName="selected" className="nav-link">
                         Songs
                     </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/services" activeClassName="selected" className="nav-link">
                         Services
                     </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/people" activeClassName="selected" className="nav-link">
                        People
                    </Link>
                  </li>
                </ul>
                { }
              </div>
            </nav>
            
        </div>

// const Menu = () => (
//   <AppBar
//     title="Worship Hub"
//     iconClassNameRight="muidocs-icon-navigation-expand-more"
//   />
// );


export default Menu



// <nav className="navbar navbar-toggleable-sm bg-primary navbar-inverse">
//                   <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                   </button>
//                 <div className="collapse navbar-collapse" id="navbarToggler">    
//                   <div className="navbar-nav mr-auto mt-2 mt-md-0">
//                     <a href="/" className="navbar-brand">
//                         <img src="../images/wisdompetlogo.svg" alt="" style={logo} />
//                         Worship Hub
//                     </a>
//                     <Link to="/songs" activeClassName="selected" className="nav-item nav-link">
//                         Songs <span className="sr-only">(current)</span>
//                     </Link>
//                     <Link to="/services" activeClassName="selected" className="nav-item nav-link">
//                         Services
//                     </Link>
//                     <Link to="/people" activeClassName="selected" className="nav-item nav-link">
//                         People
//                     </Link>
//                   </div>
//                 </div>
//               </nav>
            // <nav className="">
            //     <Link to="/" activeClassName="selected">Dashboard
            //     </Link>
            //     <Link to="/songs" activeClassName="selected">Songs
            //     </Link>
            //     <Link to="/services" activeClassName="selected">Services
            //     </Link>
            //     <Link to="/people" activeClassName="selected">People
            //     </Link>
            // </nav> 