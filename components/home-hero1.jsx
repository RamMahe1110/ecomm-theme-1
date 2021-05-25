import React from 'react'

const HomeHero1 = () => {
  return (
    <section className="home-hero1">
      <div className="container home-hero1__container">
        <div className="home-hero1__main">
          <div className="home-hero1__main-content">
            <h2 className="hero-heading">
              <span className="hero-heading__sub">Best offer of the Day</span>
              <span className="hero-heading__main">
                Stella Accent Chair With Gold Finish Legs.
              </span>
            </h2>
            <button className="btn-primary">
              <span className="btn-primary__text">Start Shopping</span>
              <img
                src="./png/arrow-right-white.png"
                alt="arrow"
                className="btn-primary__icon"
              />
            </button>
          </div>
        </div>
        <div className="home-hero1__visual">
          <div className="home-hero1__visual-img-cont">
            <img
              src="./png/chair.png"
              alt="pic"
              className="home-hero1__visual-img"
            />
          </div>
        </div>
      </div>
      <div className="home-hero1__slider-arrow home-hero1__slider-arrow--left">
        <img src="./png/arrow-left.png" alt="" />
      </div>
      <div className="home-hero1__slider-arrow home-hero1__slider-arrow--right">
        <img src="./png/arrow-right.png" alt="" />
      </div>
      <div className="home-hero1__circles">
        <div className="home-hero1__circle home-hero1__circle--active"></div>
        <div className="home-hero1__circle"></div>
        <div className="home-hero1__circle"></div>
        <div className="home-hero1__circle"></div>
      </div>
    </section>
  )
}

export default HomeHero1;
