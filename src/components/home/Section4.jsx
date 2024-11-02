import React from 'react'
import stars from '../../assets/stars.png'

function Section4() {
  return (
    <section className='md:px-[4vw] px-[3vw] pt-2 mb-4 flex flex-wrap gap-4 justify-between items-center'>
       <div className='md:h-[200px] h-[170px] w-[280px] bg-[#FBF9F2] shadow m-auto'>
          <div className='p-4'>
            <p className='italic md:text-base text-sm text-[#4D533C] md:mb-10 mb-8'>Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.</p>
            <h3 className='font-bold md:text-lg text-base text-[#4D533C] mb-2'>John Matthews</h3>
            <img src={stars} alt="stars" className='h-4' />
          </div>
       </div>


        <div className='md:h-[200px] h-[170px] w-[280px] bg-[#FBF9F2] shadow m-auto'>
          <div className='p-4'>
            <p className='italic md:text-base text-sm text-[#4D533C] md:mb-4 mb-8'>I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.</p>
            <h3 className='font-bold md:text-lg text-base text-[#4D533C] mb-2'>Eunice Oliver</h3>
              <img src={stars} alt="stars" className='h-4' />
          </div>
        </div>


        <div className='md:h-[200px] h-[170px] w-[280px] bg-[#FBF9F2] shadow m-auto'>
          <div className='p-4'>
            <p className='italic md:text-base text-sm text-[#4D533C] md:mb-16 mb-12'>It’s a really good product and helps me sleep better at night!</p>
            <h3 className='font-bold md:text-lg text-base text-[#4D533C] mb-2'>Laura Davies</h3>
            <img src={stars} alt="stars" className='h-4' />
          </div>
        </div>


        <div className='md:h-[200px] h-[170px] w-[280px] bg-[#FBF9F2] shadow m-auto'>
          <div className='p-4'>
            <p className='italic md:text-base text-sm text-[#4D533C] md:mb-10 mb-7'>Helps me relax and remember to breathe. Stress level definitely goes down.</p>
            <h3 className='font-bold md:text-lg text-base text-[#4D533C] mb-2'>Jane Bocks</h3>
            <img src={stars} alt="stars" className='h-4' />
          </div>
        </div>
    </section>
  )
}

export default Section4