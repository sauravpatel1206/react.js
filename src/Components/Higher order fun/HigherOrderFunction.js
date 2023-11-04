import React from 'react'

export const HigherOrderFunction = (CallBackFun) => {

return (<>

    <div>HigherOrderFunction-My code</div>
    {
        CallBackFun()
    }
  </>
  )
}
