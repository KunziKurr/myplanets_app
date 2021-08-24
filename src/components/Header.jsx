import React from 'react';
import Mercury from './Mercury';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const Header = () => {
    return (
        <Router>
        <header className="header_nav">
            <div className="header_nav_container">
                <span className="header_nav_container_span">the planets</span>
            </div>
            <nav className="header_nav_nav">
                <ul className="header_nav_nav_ul">
                    <li className="header_nav_nav_ul_li"><Link to="/Mercury" className="header_nav_nav_ul_li_a">mercury</Link></li>
                    <li className="header_nav_nav_ul_li"><Link to="/Venus" className="header_nav_nav_ul_li_a">venus</Link></li>
                    <li className="header_nav_nav_ul_li"><Link to="/Earth" className="header_nav_nav_ul_li_a">earth</Link></li>
                    <li className="header_nav_nav_ul_li"><Link to="Mars" className="header_nav_nav_ul_li_a">mars</Link></li>
                    <li className="header_nav_nav_ul_li"><Link to="/Jupiter" className="header_nav_nav_ul_li_a">jupiter</Link></li>
                    <li className="header_nav_nav_ul_li"><Link to="/Saturn" className="header_nav_nav_ul_li_a">saturn</Link></li>
                    <li className="header_nav_nav_ul_li"><Link to="/Uranus" className="header_nav_nav_ul_li_a">uranus</Link></li>
                    <li className="header_nav_nav_ul_li"><Link to="/Neptune" className="header_nav_nav_ul_li_a">neptune</Link></li>
                    <li className="header_nav_nav_ul_li"><Link to="/Pluto" className="header_nav_nav_ul_li_a">pluto</Link></li>
                </ul>   
            </nav>
        </header>
        <Switch>
            <Route path="/Mercury">
            <Mercury />
            </Route>
            
</Switch>
        </Router>
    )
}

export default Header
