import React from 'react';

const LargeBtn = (props) => {
  return (
    <button
      {...props}
      className={`${props.className} text-white bg-accent font-bold text-[12px] px-1 py-2 rounded hover:bg-accent-two`}
    >
      {props.text}
    </button>
  );
};

export default LargeBtn;
