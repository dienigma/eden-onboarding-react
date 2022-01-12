import React from 'react';
import edenLogo from '../assets/eden_logo.png';

const Heading = () => {
  return (
    <div className="flex gap-x-2 justify-center mt-[80px]">
      <img alt="logo" className="w-[35px] h-[35px]" src={edenLogo} />
      <h2 className="font-bold text-2xl text-center">Eden</h2>
    </div>
  );
};

export default Heading;
