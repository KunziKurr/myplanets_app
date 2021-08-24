import React from 'react'
import planets from 'npm-solarsystem';

let mercury = planets.getSaturn();
console.log(mercury);
const PlanetContent = () => {
    return (
       <div className="planet_content">
           <div className="planet_content_image_wrapper">
            <img src="" alt="Planets" className="planet_content_image_wrapper_img" />
           </div>
           <div className="planet_content_sidebar">
               <h1 className="planet_content_sidebar_title">
                    earth
               </h1>
               <p className="planet_content_sidebar_p">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                   Iusto beatae nulla accusamus error nobis magnam necessitatibus 
                   voluptatibus accusantium eaque non aliquam, quas, fugiat id labore,
                    eum distinctio? Neque, sapiente repellat?
               </p>
               <ul className="planet_content_sidebar_ul">
                   <li className="planet_content_sidebar_ul_li active">  <span className="planet_content_sidebar_ul_li_no ">01</span> Overview</li>
                   <li className="planet_content_sidebar_ul_li"><span className="planet_content_sidebar_ul_li_no">02</span>Internal Structures</li>
                   <li className="planet_content_sidebar_ul_li"><span className="planet_content_sidebar_ul_li_no">03</span>Surface Geology</li>
               </ul>
           </div>

             <div className="planet_content_footer">
                <ul className="planet_content_footer_ul">
                    <li className="planet_content_footer_ul_li"><span className="planet_content_footer_ul_li_span">Rotation Time</span><span className="planet_content_footer_ul_li_data">0.99 Days</span></li>
                    <li className="planet_content_footer_ul_li"><span className="planet_content_footer_ul_li_span">Revolution Time</span><span className="planet_content_footer_ul_li_data">365.26Days</span></li>
                    <li className="planet_content_footer_ul_li"><span className="planet_content_footer_ul_li_span">Radius</span><span className="planet_content_footer_ul_li_data">6,371Km</span></li>
                    <li className="planet_content_footer_ul_li"><span className="planet_content_footer_ul_li_span">Average Temp</span><span className="planet_content_footer_ul_li_data">16C</span></li>
                </ul>
            </div> 
       </div>
    )
}

export default PlanetContent
