import React from 'react'

const Button = ({className, text}) => {
  return (
    <button className={`${className} text-center border-2 border-[#262626] font-DM font-bold text-[#262626] hover:text-[#FFF] text-[14px] hover:bg-[#262626]`}>{text}</button>
  )
}

export default Button