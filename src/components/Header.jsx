import React from 'react'

const Header = ({className, text}) => {
  return (
    <div className={`${className} font-DM font-bold text-[#262626] text-[49px]`}>{text}</div>
  )
}

export default Header