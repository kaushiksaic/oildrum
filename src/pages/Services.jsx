import React from 'react'
import HeroBanner from '../components/HeroBanner'

const Services = () => {
  return (
    <div>
      <HeroBanner title='SERVICES' />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <div style={{padding: "30px 50px"}}>
          <p>Oil Drum Entertainment is  a reputable entertainment hub. We provide the following :</p>
      <p>
      <ol className='lispc'>
        <li>Provides cross-cultural artistic experience in music, song and dance.</li>
        <li>Provides a variety of entertainment concepts at various types of events.</li>
        <li>Provides entertainment liaison services at special events.</li>
        <li>Provides an opportunity for young people to showcase their talents.</li>
        <li>Provides a platform for musical fusions and expression.</li>
      </ol>
      </p>
      </div>
          </div>
        </div>
     
      
      </div>
     
    </div>
  )
}

export default Services