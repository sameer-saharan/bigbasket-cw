import React from 'react'

function ListItem({text}) {
  return (
    <li className='text-sm py-1 text-[#e2dede] cursor-pointer hover:underline hover:font-semibold hover:text-[#A0CD4A]'>{text}</li>
  )
}

export default ListItem