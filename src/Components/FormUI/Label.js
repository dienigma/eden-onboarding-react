import React from 'react';

const Label = (props) => {
  return (
    <label className={`${props.className} flex flex-col gap-y-2`}>
      <span className="text-[12px] font-bold">{props.name}</span>
      {props.children}
    </label>
  );
};

export default Label;
