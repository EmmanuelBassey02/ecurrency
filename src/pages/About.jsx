import React from 'react'
import Navbar2 from '../components/shared/Navbar2'
import Footer from '../components/shared/Footer'

function About() {
  return (
    <>
        <Navbar2 />
        <section className="home-bg bg-[#FBF9F2] md:h-[500px] xl:h-[545px] h-[300px] md:px-[4vw] px-[3vw] md:pt-[70px] lg:pt-[150px] pt-[100px]">
          <div className="text-left text-[#12305B]">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Sleeptiq</h1>
            <p className="text-xl md:text-2xl">We're here to help you</p><br />
            <p className='text-base md:text-lg'>There was no UI design for the About page in the figma file.</p>
          </div>
        </section>
        <Footer />
    </>
  )
}

export default About