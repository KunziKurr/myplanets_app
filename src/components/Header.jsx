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
                  <li className="header_nav_nav_ul_li" onClick={()=>{handleClick("mercury")}} >mercury</li>
                    <li className="header_nav_nav_ul_li" onClick={()=>{handleClick("venus")}}  >venus</li>
                    <li className="header_nav_nav_ul_li" onClick={()=>{handleClick("earth")}}  >earth</li>
                    <li className="header_nav_nav_ul_li" onClick={()=>{handleClick("mars")}} >mars</li>
                    <li className="header_nav_nav_ul_li" onClick={()=>{handleClick("jupiter")}} >jupiter</li>
                    <li className="header_nav_nav_ul_li" onClick={()=>{handleClick("saturn")}} >saturn</li>
                    <li className="header_nav_nav_ul_li" onClick={()=>{handleClick("uranus")}} >uranus</li>
                    <li className="header_nav_nav_ul_li" onClick={()=>{handleClick("neptune")}} >neptune</li>
                    <li className="header_nav_nav_ul_li" onClick={()=>{handleClick("pluto")}} >pluto</li>
                </ul>   
            </nav>
        </header>
     
    )
}

export default Header
