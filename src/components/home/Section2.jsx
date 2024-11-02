import React from 'react'
import google from '../../assets/google.jpg'
import forbes from '../../assets/forbes.jpg'
import bloomberg from '../../assets/bloomberg.jpg'
import influence from '../../assets/influence.jpg'
import sleep from '../../assets/sleep.jpg'

function Section2() {
  return (
    <>
      <div className="wrapper relative top-[-40px] shadow grid md:grid-cols-5 grid-cols-3 md:w-[80%] w-[90%] md:gap-6 gap-3 items-center py-4 md:py-6 bg-white px-10 m-auto rounded-[6px] justify-center space-y-6 md:flex-row md:space-y-0 md:space-x-8" style={{ boxShadow: '10px 15px 40px 10px rgba(0, 0, 0, 0.2)' }}>
          <div className="marquee">
              <img src={google} alt="" className="md:h-8 h-7"/>
              <img src={forbes} alt="" className="md:h-8 h-[18px] hover:scale-[1.13] transition-all"/>
              <img src={bloomberg} alt="" className="md:h-8 h-[18px] hover:scale-[1.13] transition-all"/>
              <img src={sleep} alt="" className="md:h-8 h-[18px] hover:scale-[1.13] transition-all"/>
              <img src={influence} alt="" className="md:h-8 h-[18px] hover:scale-[1.13] transition-all"/>

              <img src={google} alt="" className="md:h-8 h-7"/>
              <img src={forbes} alt="" className="md:h-8 h-5 hover:scale-[1.13] transition-all"/>
              <img src={bloomberg} alt="" className="md:h-8 h-[18px] hover:scale-[1.13] transition-all"/>
              <img src={sleep} alt="" className="md:h-8 h-[18px] hover:scale-[1.13] transition-all"/>
              <img src={influence} alt="" className="md:h-8 h-5 hover:scale-[1.13] transition-all"/>
          </div>
       </div>
    </>
  )
}

export default Section2