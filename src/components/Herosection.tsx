import React from "react";
import "./HeroSection.css";
import anime from "../assets/images/anime.jpg";

const Herosection: React.FC = () => {
  return (
    <>
      <div className="hero-main">
        <div className="herosection">
          <img src={anime} alt="" />

          <div className="herosection-detail">
            <div className="blur-detail">
              <h1>A healthy meal deliverd to your door, every single day</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
                quidem cumque ex a accusantium earum aliquid autem repudiandae
                sed, voluptate eos fugit fuga repellat quod possimus laudantium
                quia sunt maxime?
              </p>
              <button>start eating well</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
