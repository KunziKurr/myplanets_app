import React from 'react';
const Header = (props) => {

  const  handleClick =(_planet) =>{
        props.setPlanetName(_planet);
    }
    return (
      
        <header className="header_nav">
            <div className="header_nav_container">
                <span className="header_nav_container_span">the planets</span>
            </div>
            <nav className="header_nav_nav">
                <ul className="header_nav_nav_ul">
                  <li className="header_nav_nav_ul_li"><span  onClick={()=>{handleClick("mercury")}}  className="header_nav_nav_ul_li_a">mercury</span></li>
                    <li className="header_nav_nav_ul_li"><span  onClick={()=>{handleClick("venus")}}  className="header_nav_nav_ul_li_a">venus</span></li>
                    <li className="header_nav_nav_ul_li"><span  onClick={()=>{handleClick("earth")}}  className="header_nav_nav_ul_li_a">earth</span></li>
                    <li className="header_nav_nav_ul_li"><span  onClick={()=>{handleClick("mars")}} className="header_nav_nav_ul_li_a">mars</span></li>
                    <li className="header_nav_nav_ul_li"><span  onClick={()=>{handleClick("jupiter")}} className="header_nav_nav_ul_li_a">jupiter</span></li>
                    <li className="header_nav_nav_ul_li"><span  onClick={()=>{handleClick("saturn")}} className="header_nav_nav_ul_li_a">saturn</span></li>
                    <li className="header_nav_nav_ul_li"><span  onClick={()=>{handleClick("uranus")}} className="header_nav_nav_ul_li_a">uranus</span></li>
                    <li className="header_nav_nav_ul_li"><span  onClick={()=>{handleClick("neptune")}} className="header_nav_nav_ul_li_a">neptune</span></li>
                    <li className="header_nav_nav_ul_li"><span  onClick={()=>{handleClick("pluto")}} className="header_nav_nav_ul_li_a">pluto</span></li>
                </ul>   
            </nav>
        </header>
     
    )
}

export default Header
