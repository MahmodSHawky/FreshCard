import React from 'react'
import { SyncLoader } from 'react-spinners'

export default function loading() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <SyncLoader color="#15803D"  size={25}/>
    </div>
  )
}
