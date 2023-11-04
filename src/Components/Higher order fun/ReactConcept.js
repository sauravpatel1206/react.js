import React from 'react'
import { HigherOrderFunction } from './HigherOrderFunction'
import { CallBackFun } from './CallBackFun'

export const ReactConcept = () => {
  return (<>

    <div>ReactConcept</div>
<div>Higher order function:</div>
{
    HigherOrderFunction(CallBackFun)
}
  </>
  )
}
