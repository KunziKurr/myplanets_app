import React from 'react';
import planets from 'npm-solarsystem';
import BackVideo from '../assets/video.mp4';

const PlanetContent = (props) => {

const activePlanet = props.planetName.charAt(0).toUpperCase() + props.planetName.slice(1).toLowerCase();

const planetDetails = planets['get'+activePlanet]();
console.log(activePlanet);
console.log(planets.getEarth());
var imagee = {
    "mercury":"https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png",
    "earth":"https://cdn.pixabay.com/photo/2016/02/04/13/49/the-earth-1179212_960_720.png",
    "uranus":"https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png",
    "neptune":"https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png",
    "saturn":"https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png",
    "venus":"https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png",
    "mars":"https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png",
    "jupiter":"https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png",
    "pluto":"https://cdn.pixabay.com/photo/2017/04/04/14/26/pluto-2201446_960_720.png"

}
var planet_=props.planetName
var displayImage = imagee+'.'+planet_;

console.log((displayImage));
var planetImage={
    backgroundImage: `url(${imagee[props.planetName]})`,
    
}
    return (
       
       <div className="planet_content">
        
           <div className="planet_content_image_wrapper">
            <span style={planetImage} alt="Planets" className="planet_content_image_wrapper_img"> </span>
           </div>

           <video className='videoTag' autoPlay loop muted>
            <source src={BackVideo} type='video/mp4' />
        </video>
           <div className="planet_content_sidebar">

               <h1 className="planet_content_sidebar_title">
               { props.planetName }
               </h1>
               <p className="planet_content_sidebar_p">
                   {planetDetails.description}
               </p>
               <ul className="planet_content_sidebar_ul">
                   <li className="planet_content_sidebar_ul_li active">  <span className="planet_content_sidebar_ul_li_no ">01</span> Overview</li>
                   <li className="planet_content_sidebar_ul_li"><span className="planet_content_sidebar_ul_li_no">02</span>Internal Structures</li>
                   <li className="planet_content_sidebar_ul_li"><span className="planet_content_sidebar_ul_li_no">03</span>Surface Geology</li>
               </ul>
           </div>

             <div className="planet_content_footer">
                <ul className="planet_content_footer_ul">
                    <li className="planet_content_footer_ul_li"><span className="planet_content_footer_ul_li_span">Distance From Sun </span><span className="planet_content_footer_ul_li_data">{planetDetails.distanceFromSun}</span></li>
                    <li className="planet_content_footer_ul_li"><span className="planet_content_footer_ul_li_span">Revolution Time</span><span className="planet_content_footer_ul_li_data">{planetDetails.yearLength}</span></li>
                    <li className="planet_content_footer_ul_li"><span className="planet_content_footer_ul_li_span">Radius</span><span className="planet_content_footer_ul_li_data">{planetDetails.radius}Km</span></li>
                    <li className="planet_content_footer_ul_li"><span className="planet_content_footer_ul_li_span">No of Moons</span><span className="planet_content_footer_ul_li_data">{planetDetails.moons} Moons</span></li>
                </ul>
            </div> 
       </div>
    )
}

export default PlanetContent