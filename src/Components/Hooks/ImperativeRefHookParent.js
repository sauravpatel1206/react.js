import React, { useRef, useState, useEffect } from 'react';
import ImperativeRefHookChild from './ImperativeRefHookChild';

const ImperativeRefHookParent = () => {
  const myRef = useRef(null);
  const [childData, setChildData] = useState(null);

  useEffect(() => {
    if (myRef.current && myRef.current.fun) {
      setChildData(myRef.current.fun());
    }
  }, [myRef]);


  console.log("we are ",myRef?.current?.fun())


  return (
    <>
      <div style={{ marginTop: '30px'  ,padding:"2px"}}>imperativeHandleParent</div>
      <div >I need child component data here {childData !== null ? childData : ''}</div>
      <button onClick={()=>{
         console.log("we are ",myRef?.current?.fun())
         setChildData(myRef?.current?.fun());
      }}>get letest data</button>
      <ImperativeRefHookChild refer={myRef} />
    </>
  );
};

export default ImperativeRefHookParent;
