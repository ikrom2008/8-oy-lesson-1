import { CircularProgress } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <div style={{width:'100%',height:'100vh', display: 'flex' , justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress disableShrink />
    </div>
  )
}

export default Loading
