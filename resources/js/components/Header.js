import React from "react";
import Home from "./Home";
import About from "./About";
import Add from "./categories/Add";
import Listing from "./categories/Listing";
import {Route,Switch,NavLink} from "react-router-dom";
import Error from "./partials/Error404"
import Edit from "./categories/Edit";

function Header() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact={true} activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/about">About Us</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/categories">Categories</NavLink>
                        </li>

                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>


            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/categories" component={Listing}/>
                <Route exact path="/category/add" component={Add}/>
                <Route exact path="/category/edit/:id" component={Edit}/>
                <Route exact path="/*" component={Error}/>
            </Switch>
        </div>

    )

}


export default Header