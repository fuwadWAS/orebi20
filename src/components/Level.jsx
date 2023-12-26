import React from 'react'

const Level = ({levelName, className}) => {
  return (
    <div className={`${className} font-DM font-bold text-[#262626] text-[16px] leading-[23px] pb-[10px]`}>{levelName}</div>
  )
}

export default Level