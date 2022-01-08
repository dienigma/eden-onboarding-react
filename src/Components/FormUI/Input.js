import React from 'react';

const Input = (props) => {
  return (
    <input
      {...props}
      className={`${props.className} border ${
        props.error ? 'border-rose-300' : 'border-light-gray'
      } outline-none rounded p-2 text-[12px] placeholder:text-light-gray placeholder:font-bold`}
    />
  );
};

export default Input;
