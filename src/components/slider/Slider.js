import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../styles/Slider.scss";
import { sliderData } from "./slider-data";

const Slider = () => {
  // set current slide
  const [slideIndex, setSlideIndex] = useState(1);

  // set autoscroll
  const [autoScroll, setAutoScroll] = useState(true);

  // variables to autosrcoll slide
  let slideInterval;
  const intervalTime = 10000;

  // autoscroll function
  const auto = () => {
    slideInterval = setInterval(() => {
      setSlideIndex(slideIndex === sliderData.length ? 1 : slideIndex + 1);
    }, intervalTime);
  };

  // useEffet co call autoscroll function
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [slideIndex]);

  // function to set current slide and active dot
  const moveDot = (i) => {
    setSlideIndex(i);
    setAutoScroll(false);
  };

  return (
    <main>
      <div className="opacityLayout"></div>
      {sliderData.map((slide, i) => {
        return (
          <div
            className={slideIndex === i + 1 ? "slide activeSlide" : "slide"}
            key={slide.id}
          >
            {/* process.env.PUBLIC_URL - should be replaced with the address leading to the photos */}
            {i + 1 === slideIndex && (
              <img
                src={process.env.PUBLIC_URL + `/img/${i + 1}.jpg`}
                alt="House interior"
              />
            )}
            <section
              className={
                slideIndex === i + 1
                  ? "slideHeading activeContent"
                  : "slideHeading"
              }
            >
              {slide?.heading.length > 0 && <h1>{slide.heading}</h1>}
              {slide?.subHeading.length > 0 && <h3>{slide.subHeading}</h3>}
              {(slide?.heading.length > 0 || slide?.subHeading.length > 0) && (
                <div
                  className={
                    slideIndex === i + 1
                      ? "rectangle activeContent"
                      : "rectnagle"
                  }
                >
                  <div></div>
                </div>
              )}
            </section>
            {slide?.content.length > 0 && (
              <p
                className={
                  slideIndex === i + 1 ? "content activeContent" : "content"
                }
              >
                {slide.content}
              </p>
            )}

            <div
              className={
                slideIndex === i + 1
                  ? "btnContainer activeContent"
                  : "btnContainer"
              }
            >
              {slide?.btn1 && <button className="btn1">{slide.btn1}</button>}
              {slide?.btn2 && <button className="btn2">{slide.btn2}</button>}
            </div>
          </div>
        );
      })}
      <div className="vericalElem">Lorem ipsum dolor sit amet</div>
      <div className="dots">
        {Array.from({ length: sliderData.length }).map((dot, i) => (
          <div
            onClick={() => moveDot(i + 1)}
            className={slideIndex === i + 1 ? "activeDot" : "dot"}
            key={uuidv4()}
          ></div>
        ))}
      </div>
    </main>
  );
};

export default Slider;
