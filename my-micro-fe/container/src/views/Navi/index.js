import {Link} from 'react-router-dom'
import React from 'react'
import './index'


export default function(){
  return (
    <div>
      <div><Link to='/microApp1'>microApp1</Link></div>
      <div><Link to='/microApp2'>microApp2</Link></div>
    </div>
  )
}