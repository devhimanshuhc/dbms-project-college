import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="hero">
      <div className="hero_content">
        <h1 className="animate-hero">SVPCET, NAGPUR</h1>
        <p className="animate-hero">
          <Typewriter
            options={{
              strings: [
                "Placement Management System",
                "Developed by Himanshu Chauhan, Nathaniel Padhiar & Onkar Sinha",
              ],
              autoStart: true,
              loop: true,
              delay: 10,
            }}
          />
        </p>
      </div>
    </div>
  );
}

export default Hero;
