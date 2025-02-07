import React from 'react'
import shopbg from '../../assets/shopbg.png'

function Section1() {
  return (
    <>
       <section className="home-bg md:h-[520px] xl:h-[555px] h-[320px] md:px-[4vw] px-[3vw] md:pt-[70px] lg:pt-[150px] pt-[100px]" style={{ backgroundImage: `url(${shopbg})` }}>
            <div className="text-left text-[#12305B]">
            <p className="text-xl md:text-2xl md:mb-6 mb-4">We're here to help you</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Relax & Rest</h1>
            </div>
        </section>
    </>
  )
}

export default Section1