import React from 'react'
import oil from '../assets/images/oildrumlogo.png'
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className='container-fluid py-4 ftr'>
        <div className='row align-items-center text-white'>
          <div className='col-sm-4 text-center'>
            <img src={oil} style={{width:'300px',height:'250px'}} />
            
          </div>
          <div className='col-sm-4 text-center'>
            <h5 className='text-center mb-3'>Get in Touch</h5>
            <div className='d-flex justify-content-around align-items-center p-2' style={{background:'white',borderRadius:50}}>
                  <a href='' className='text-dark'><FaFacebookF style={{fontSize:20}}  /></a>  
                  <a href='' className='text-dark'><FaInstagram  style={{fontSize:20}} /></a>  
                 <a href='' className='text-dark'><FaXTwitter style={{fontSize:20}} /></a>   
                 <a href='' className='text-dark'><FaYoutube style={{fontSize:20}} /></a>   
                  </div>
          </div>
            <div className='col-sm-4 ps-5'>
                   <div className='mb-2' >
                    <FaLocationDot className='iconbg2' />
                   </div>
                   <div className='mb-3'>
                   <p style={{margin:0}}>494 Tropicaire Avenue. </p>
                   <p style={{margin:0}}>SW Palm Bay, FL. 32908 </p>
                   </div>
                   <div className='mb-2'>
                    <FaPhone className='iconbg2' />
                   </div>
                   <div className='mb-2'><p>347 995 7685 </p></div>
                   <div className='mb-2'>
                    <FaEnvelope className='iconbg2' />
                   </div>
                   <div className='mb-2'>
                   <p style={{margin:0}}>Oildrumentertainment24@gmail.com </p>
                   <p style={{margin:0}}>www.oildrumentertainment.com</p>
                   </div>
                 
               
                 
            </div>
           
        </div>
       
         
      
    </div>
    <div className='container-fluid ftr'>
      <div className='row'>
      <div className='col-sm-12 text-center text-white border-top border-white'>
            <p className='pt-4'>&#169; 2024 Copyright Oil Drum Entertainment</p>
          </div>
      </div>
    </div>
    </>
  )
}

export default Footer