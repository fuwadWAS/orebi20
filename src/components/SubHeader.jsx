import React from 'react'

const SubHeader = ({ text, className}) => {
  return (
    <div className={`${className} text-[#262626] text-[39px] font-DM font-bold`}>{text}</div>
  )
}

export default SubHeader