import React from 'react'

const List = ({text,href,className}) => {
  return (
    <li><a href={href} className={`${className} font-DM font-regular text-[#6D6D6D] text-[14px]`}>{text}</a></li>
  )
}

export default List