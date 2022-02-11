import React from 'react'
import { sliderData } from './slider-data';

const Slider = () => {
    return (
        <div>
            <h1>{sliderData.map((slide, i) => {
                return(
                    <div>
                        {/* process.env.PUBLIC_URL - should be replaced with the address leading to the photos */}
                        <img src={process.env.PUBLIC_URL + `/img/${i+1}.jpg`} alt="" />
                        <h1>{slide.heading}</h1>
                        <h3>{slide.subHeading}</h3>
                        <p>{slide.contents}</p>
                        <button>{slide.btn1}</button>
                        <button>{slide.btn2}</button>
                    </div>
                )
            })}</h1>
        </div>
    )
}

export default Slider;