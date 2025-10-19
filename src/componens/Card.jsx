import React from 'react'

export default function Card({tittle,img,description,color,bgcolor}) {
  return (
    <div className="card">
        <span className='icon' style={{color:color,backgroundColor:bgcolor}}>{img}</span>
        <h2>{tittle}</h2>
        <span className='line'></span>
        <p>{description}</p>
    </div>
  )
}
