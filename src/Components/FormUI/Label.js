import React from 'react';

const Label = (props) => {
  return (
    <label className={`${props.className} flex flex-col gap-y-2`}>
      <div className="flex gap-x-2">
        <span className="text-[12px] font-bold">{props.name}</span>{' '}
        {props.isOptional && (
          <span className="text-light-gray text-[12px]">(optional)</span>
        )}
      </div>
      {props.children}
    </label>
  );
};

export default Label;
