import React from 'react'
import b3 from '../assets/banners/b3.jpg';
import pgban from '../assets/banners/pgban.jpg'

const HeroBanner = ({title}) => {
  return (
    <>
    <div>
        <img src={pgban} className='w-100 d-block' style={{height:'350px'}}/>
    </div>
    <div className="text-center heading">{title}</div>
    </>
  )
}

export default HeroBanner