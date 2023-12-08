import React from 'react';
import hero from '../Assest/Extreme Ride Logo Reveal_free.mp4';

function Herosection() {
  return (
    <div>
      <div className="relative min-h-[70vh] flex items-center justify-center z-[-2]">
        <video
          className="w-full h-full object-cover absolute top-0 left-0"
          autoPlay
          muted
          loop
        >
          <source src={hero} type="video/mp4" />
        </video>
        <div className="hero-overlay absolute w-full h-full bg-black bg-opacity-10" />
        <div className="hero-content text-center text-neutral-content relative z-10">

        </div>
      </div>
    </div>
  );
}

export default Herosection;
