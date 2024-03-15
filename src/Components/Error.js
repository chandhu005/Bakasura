import React from 'react'
import { useRouteError } from 'react-router-dom'
export const Error = () => {
  const error=useRouteError("");
  return (
    <>
    
    <div>OOps!🤭🤭🤭🤭🤭🤭🤭it is an invalid Link🙆🙆🙆🙆🙆</div>
    <div>{error.status}:{error.statusText}</div>
    </>
  )
}
