import React from 'react'
import '../styles/banner.scss';
import BannerReuse from './BannerReuse';





const Hero = () => {
    return (
        <div className="banner-main">
            <div className="banner">
                <div className="banner-heading">
                    <span className="heading-1">REACTJS</span>
                    <span className="heading-2">JAVASCRIPT  </span>
                    <span className="heading-3"> PYTHON </span>
                    <span className="heading-4">MACHINE LEARNING </span>
              
                </div>
                <p className="banner-para">GLOCAL TECHNOLOGY GIVES YOU WINGS</p>
                <button className="banner-btn">DISCOVER NOW</button>

<div className="mt-5 banner-reuse">
    <h1>WEB TECHNOLOGY </h1>
<BannerReuse />
</div>
            </div>

       
         
         
       
        </div>
    )
}

export default Hero
