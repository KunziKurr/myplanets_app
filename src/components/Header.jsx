import React from 'react'

const Header = () => {
    return (
        <header className="header_nav">
            <div className="header_nav_container">
                <span className="header_nav_container_span">the planets</span>
            </div>
            <nav className="header_nav_nav">
                <ul className="header_nav_nav_ul">
                    <li className="header_nav_nav_ul_li"><a href="#" className="header_nav_nav_ul_li_a">mercury</a></li>
                    <li className="header_nav_nav_ul_li"><a href="#" className="header_nav_nav_ul_li_a">venus</a></li>
                    <li className="header_nav_nav_ul_li"><a href="#" className="header_nav_nav_ul_li_a">earth</a></li>
                    <li className="header_nav_nav_ul_li"><a href="#" className="header_nav_nav_ul_li_a">mars</a></li>
                    <li className="header_nav_nav_ul_li"><a href="#" className="header_nav_nav_ul_li_a">jupiter</a></li>
                    <li className="header_nav_nav_ul_li"><a href="#" className="header_nav_nav_ul_li_a">saturn</a></li>
                    <li className="header_nav_nav_ul_li"><a href="#" className="header_nav_nav_ul_li_a">uranus</a></li>
                    <li className="header_nav_nav_ul_li"><a href="#" className="header_nav_nav_ul_li_a">neptune</a></li>
                    <li className="header_nav_nav_ul_li"><a href="#" className="header_nav_nav_ul_li_a">pluto</a></li>
                </ul>   
            </nav>
        </header>
    )
}

export default Header
