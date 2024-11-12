import React from 'react'
import { motion } from 'framer-motion';
import Carousel from 'react-bootstrap/Carousel';
import b1 from '../assets/banners/b1.jpg';
import b2 from '../assets/banners/b2.jpg';
import b3 from '../assets/banners/b3.jpg';
import b4 from '../assets/banners/b4.jpg';
import b5 from '../assets/banners/b5.jpg';
import b6 from '../assets/banners/b6.jpg';
import b7 from '../assets/banners/b7.jpg';
import b8 from '../assets/banners/b8.jpg';
import b9 from '../assets/banners/b9.jpg';
import b10 from '../assets/banners/drum.png';
import b11 from '../assets/banners/drumt.png';
import vid from '../assets/vid.mp4';



const Home = () => {
  return (
    <>
    <div className='container-fluid px-0'>
        <div className='row'>
            <div className='col-sm-12'>
            <Carousel>
      <Carousel.Item>
      <img src={b1} className='d-block w-100' style={{opacity:'0.8'}} height={600} />
        <Carousel.Caption className='top-0 mt-5'>
          <motion.h3
          initial={{x:-100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          viewport={{once: true}}
          transition={{delay:0.2, x:{type:'spring',stiffness:60},opacity:{duration: 1},ease:"easeIn",duration: 1,}}
          className='mt-5 text-dark display-1'>Welcome to Oil Drum Entertainment</motion.h3>
           <p className='mt-5 h5 text-dark'>"Feel the Rhythm, Live the Beat."</p> 
          <motion.button 
          initial={{x:100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          viewport={{once:true}}
          transition={{delay:0.2, x:{type:'spring',stiffness:30},opacity:{duration: 1},ease:"easeIn",duration: 1,}}
          className='btn mt-5 px-3 py-2 fw-bolder display-1' style={{background:'#d4ae01'}}>CALL NOW</motion.button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b2} className='d-block w-100' style={{opacity:'0.8'}} height={600} />
        <Carousel.Caption className='top-0 mt-5'>
          <h3 className='mt-5 text-dark display-1'>Welcome to Oil Drum Entertainment</h3>
           <p className='mt-5 h5 text-white'>"Drumming Up a World of Energy and Joy!"</p> 
          <button className='btn mt-5 px-3 py-2 fw-bolder display-1' style={{background:'#d4ae01'}}>CALL NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
        </div>
    </div>

    <section className='hsec'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                    <motion.h2 
                     initial={{y:100,opacity:0}}
                     whileInView={{y:0,opacity:1}}
                     transition={{delay:0.2, y:{type:'spring',stiffness:30},opacity:{duration: 0.6},ease:"easeIn",duration: 1,}}
                    className='text-center mb-5'>OVERVIEW
                    </motion.h2>
                    
                  
                    <motion.p 
                      initial={{x:100,opacity:0}}
                      whileInView={{x:0,opacity:1}}
                      transition={{delay:0.4, x:{type:'spring',stiffness:30},opacity:{duration: 0.6},ease:"easeIn",duration: 1,}}
                    style={{textAlign:'center'}}>Oil Drum Entertainment was formed out a passion for cross cultural musical and artistic expression.</motion.p>
                    <motion.p 
                     initial={{x:100,opacity:0}}
                     whileInView={{x:0,opacity:1}}
                     transition={{delay:0.4, x:{type:'spring',stiffness:30},opacity:{duration: 0.6},ease:"easeIn",duration: 1,}}
                    style={{textAlign:'center'}}>Founded by Anthony Harris, Executive Director - a native of the Caribbean Island of Trinidad and Tobago, now living in Florida USA.</motion.p>
                    <motion.p 
                     initial={{x:100,opacity:0}}
                     whileInView={{x:0,opacity:1}}
                     transition={{delay:0.4, x:{type:'spring',stiffness:30},opacity:{duration: 0.6},ease:"easeIn",duration: 1,}}
                    style={{textAlign:'center'}}>Appreciating the web of talent and establishing opportunities for creative musical fusions.</motion.p>
                    
                </div>
                <div className='col-sm-12 text-center'>
                    <button className='btn btn-dark'>EXPLORE</button>
                </div>
            </div>
        </div>
    </section>

    <section className='hsec'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 text-center'>
                <motion.h2 
                     initial={{y:100,opacity:0}}
                     whileInView={{y:0,opacity:1}}
                     transition={{delay:0.2, y:{type:'spring',stiffness:30},opacity:{duration: 0.6},ease:"easeIn",duration: 1,}}
                    className='text-center mb-5'>"Experience the Power of Drums: Where Beats Come Alive"
                    </motion.h2>
                    <video className='respvideo' src={vid} muted controls autoPlay loop >

                    </video>
                </div>
            </div>
        </div>
    </section>

    <section style={{padding:'50px'}}>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                <motion.h2 
                     initial={{y:100,opacity:0}}
                     whileInView={{y:0,opacity:1}}
                     transition={{delay:0.2, y:{type:'spring',stiffness:30},opacity:{duration: 0.6},ease:"easeIn",duration: 1,}}
                    className='text-center mb-5'>ODE CONCEPTS
                    </motion.h2>
                </div>

            <div className='col-sm-4'>
                <motion.div 
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{delay:0.2, x:{type:'spring',stiffness:30},opacity:{duration: 0.6},ease:"easeIn",}}
                className='d-flex flex-column justify-space-between align-items-center'>
                    <h5 className='mb-3'>OIL DRUMS FROM ROOTS</h5>
                    <a href='#'>
                        <img src={b10} className='circ' />
                    </a>
                    <p className='text-center mt-3'>Always keeping close to our roots. 
from discarded oil drums came a unique musical instrument.
</p>
                </motion.div>
            </div>
            <div className='col-sm-4'>
            <motion.div 
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:0.4, x:{type:'spring',stiffness:30},opacity:{duration: 0.8},ease:"easeIn",}}
            className='d-flex flex-column justify-space-between align-items-center'>
                    <h5 className='mb-3'>OIL DRUMS EVOLUTION</h5>
                    <a href='#'>
                        <img src={b11} className='circ' />
                    </a>
                    <p className='text-center mt-3'>The evolution continues to enhance instruments. 
New technology and variations continue.
</p>
                </motion.div>
            </div>
            <div className='col-sm-4'>
            <motion.div 
             initial={{x:-100,opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{delay:0.6, x:{type:'spring',stiffness:30},opacity:{duration: 0.8},ease:"easeIn",}}
            className='d-flex flex-column justify-space-between align-items-center'>
                    <h5 className='mb-3'>DRUMMING IN VARIOUS FORMS</h5>
                    <a href='#'>
                        <img src={b8} className='circ' />
                    </a>
                    <p className='text-center mt-3'>Another form of drum. 
All with its own significance and sound and style.
</p>
                </motion.div>
            </div>

          </div>
          </div>
    </section>


    <section style={{padding:'50px'}}>
    <div className='container'>
          <div className='row pt-5'>

            <div className='col-sm-4'>
                <motion.div 
                 initial={{x:-100,opacity:0}}
                 whileInView={{x:0,opacity:1}}
                 transition={{delay:0.2, x:{type:'spring',stiffness:30},opacity:{duration: 0.8},ease:"easeIn",}}
                className='d-flex flex-column justify-space-between align-items-center'>
                    <h5 className='mb-3'>CARNIVAL CULTURE</h5>
                    <a href='#'>
                        <img src={b9} className='circ' />
                    </a>
                    <p className='text-center mt-3'>Carnivals allow for artistic expression in many ways.
Celebrated worldwide with unique styles and format.
</p>
                </motion.div>
            </div>
            <div className='col-sm-4'>
            <motion.div 
             initial={{x:-100,opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{delay:0.4, x:{type:'spring',stiffness:30},opacity:{duration: 0.8},ease:"easeIn",}}
            className='d-flex flex-column justify-space-between align-items-center'>
                    <h5 className='mb-3'>MUSICAL CONCERTS</h5>
                    <a href='#'>
                        <img src={b4} className='circ' />
                    </a>
                    <p className='text-center mt-3'>A wonderful way to relax indoors or outdoors and appreciate talent in various forms.
                    </p>
                </motion.div>
            </div>
            <div className='col-sm-4'>
            <motion.div
             initial={{x:-100,opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{delay:0.6, x:{type:'spring',stiffness:30},opacity:{duration: 0.8},ease:"easeIn",}}
            className='d-flex flex-column justify-space-between align-items-center'>
                    <h5 className='mb-3'>DANCE AND EXPRESSIONS</h5>
                    <a href='#'>
                        <img src={b7} className='circ' />
                    </a>
                    <p className='text-center mt-3'>Freedom to be creative to move to the rhythms and vibes of the music.
                    </p>
                </motion.div>
            </div>

          </div>
          </div>
    </section>

    <section style={{padding:'50px'}}>
    <div className='container'>
          <div className='row pt-5'>

            <div className='col-sm-6'>
                <motion.div 
                 initial={{x:-100,opacity:0}}
                 whileInView={{x:0,opacity:1}}
                 transition={{delay:0.4, x:{type:'spring',stiffness:30},opacity:{duration: 0.8},ease:"easeIn",}}
                className='d-flex flex-column justify-space-between align-items-center'>
                    <h5 className='mb-3'>GLOBAL MUSICAL CULTURE</h5>
                    <a href='#'>
                        <img src={b6} className='circ' />
                    </a>
                    <p className='text-center mt-3'>Allowing opportunities to learn and appreciate global music.
</p>
                </motion.div>
            </div>
            <div className='col-sm-6'>
            <motion.div 
             initial={{x:-100,opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{delay:0.6, x:{type:'spring',stiffness:30},opacity:{duration: 0.8},ease:"easeIn",}}
            className='d-flex flex-column justify-space-between align-items-center'>
                    <h5 className='mb-3'>MUSICAL THEORY</h5>
                    <a href='#'>
                        <img src={b1} className='circ' />
                    </a>
                    <p className='text-center mt-3'>We need to appreciate some theory.
Understanding some basics can allow for further development.

                    </p>
                </motion.div>
            </div>
            

          </div>
          </div>
    </section>


        
   

    
    </>
  )
}

export default Home