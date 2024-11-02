import React from 'react'
import stars from '../../assets/stars.png'

function Section3() {
  return (
    <>
     <section className='md:px-[4vw] px-[3vw] pt-2 mb-20 flex flex-wrap gap-4 justify-between items-center'>
        <div className='h-[200px] w-[280px] bg-[#FBF9F2] shadow m-auto'>
          <div className='p-4'>
            <p className='italic md:text-base text-sm text-[#4D533C] mb-10'>Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.</p>
            <h3 className='font-bold md:text-lg text-base text-[#4D533C] mb-2'>John Matthews</h3>
            <img src={stars} alt="stars" className='h-4' />
          </div>
        </div>


        <div className='h-[200px] w-[280px] bg-[#FBF9F2] shadow m-auto'>
          <div className='p-4'>
            <p className='italic md:text-base text-sm text-[#4D533C] mb-4'>I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.</p>
            <h3 className='font-bold md:text-lg text-base text-[#4D533C] mb-2'>Eunice Oliver</h3>
              <img src={stars} alt="stars" className='h-4' />
          </div>
        </div>


        <div className='h-[200px] w-[280px] bg-[#FBF9F2] shadow m-auto'>
          <div className='p-4'>
            <p className='italic md:text-base text-sm text-[#4D533C] mb-16'>It’s a really good product and helps me sleep better at night!</p>
            <h3 className='font-bold md:text-lg text-base text-[#4D533C] mb-2'>Laura Davies</h3>
            <img src={stars} alt="stars" className='h-4' />
          </div>
        </div>


        <div className='h-[200px] w-[280px] bg-[#FBF9F2] shadow m-auto'>
          <div className='p-4'>
            <p className='italic md:text-base text-sm text-[#4D533C] mb-10'>Helps me relax and remember to breathe. Stress level definitely goes down.</p>
            <h3 className='font-bold md:text-lg text-base text-[#4D533C] mb-2'>Jane Bocks</h3>
            <img src={stars} alt="stars" className='h-4' />
          </div>
        </div>
    </section>
    </>
  )
}

export default Section3