import React from 'react'
import { Link } from 'react-router-dom'
// import Slider from '../../assets/Slider.png'
import slider from '../../assets/slider.png'
import '../../../styles/home.css'


function Section1() {
  return (
    <>
         <div className="home-bg md:h-[590px] xl:h-[620px] h-[400px] md:px-[4vw] px-[3vw] md:pt-[70px] lg:pt-[130px] pt-[50px]" style={{ backgroundImage: `url(${slider})` }}>
          <div className="max-w-3xl">
            <div className="max-w-2xl mb-8 md:mb-0">
              <h2 className="sm:text-sm md:text-base text-xs tracking-wide text-[#12305B] mb-2">We're here to help you</h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-4 text-[#12305B]">
                Relax & Rest
              </h1>
              <p className="text-base md:text-xl text-[#12305B] mb-6 w-full">
                With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.
              </p>

              <Link to="/shop-page">
                <button className="bg-[#FC5959]  text-white font-semibold py-3 lg:px-16 md:px-10 px-8 rounded-[6px] transition duration-300 ease-in-out transform hover:scale-105">
                    Visit Shop
                </button>
              </Link>
            </div>
         </div>
    </div>
    </>
  )
}

export default Section1