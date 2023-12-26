import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`${className} w-[1604px] mx-auto`}>{children}</div>
  )
}

export default Container