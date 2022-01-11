import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`${props.className} border ${
        props.error ? 'border-rose-300' : 'border-light-gray'
      } outline-none rounded p-2 text-[10px] placeholder:text-light-gray`}
    />
  );
});

export default Input;
