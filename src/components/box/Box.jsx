import React from 'react'
import { Button } from './Box.style'

export default function Box({value,onClick}){
    
  return (
    <Button  value={value} onClick={onClick}>{value}</Button>
  )
}
