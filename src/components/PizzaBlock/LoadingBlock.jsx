import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <ContentLoader 
    className="pizza-block"
    speed={2}
    width={270}
    height={582}
    viewBox="0 0 270 582"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="-1" rx="6" ry="6" width="227" height="315" /> 
    <rect x="11" y="325" rx="6" ry="6" width="203" height="39" /> 
    <rect x="9" y="482" rx="6" ry="6" width="71" height="28" /> 
    <rect x="133" y="474" rx="21" ry="21" width="91" height="40" /> 
    <rect x="0" y="384" rx="6" ry="6" width="230" height="85" />
  </ContentLoader>
  )
}

export default LoadingBlock
