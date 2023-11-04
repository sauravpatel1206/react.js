import React, { useReducer } from 'react'

export const ReducerHook = () => {
  function reducer(state, action) {
    if (action.type == "inc") {
      return {
        age: state.age + 1
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, { age: 22 });

  return (<>

    <div onClick={() => {
      dispatch({ type: "inc" })
    }} style={{marginTop:"30px"}}> Use Reducer Hook(click me)</div>
    <div>{state.age}</div>
  </>
  )
}
