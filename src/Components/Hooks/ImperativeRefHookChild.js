import React, { useImperativeHandle, useState, forwardRef } from 'react';

const ImperativeRefHookChild = forwardRef((props, ref) => {
  const [childState, setChildState] = useState(1);

  const fun = () => {
    return childState;
  };

  useImperativeHandle(props.refer, () => ({
    fun: fun
  }));
  

  return (
    <>
      <div>imperativeHandleChild</div>
      <button onClick={() => setChildState(c => c + 1)}>child button(incement)</button>
    </>
  );
});

export default ImperativeRefHookChild;
