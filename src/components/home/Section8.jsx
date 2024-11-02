import React from 'react'
import item from '../../assets/item.jpg'
import stars from '../../assets/stars.png'

function Section8() {
  return (
    <>
      <section className='md:px-[4vw] px-[3vw] md:py-12 py-6 mb-20'>
        <h1 className='font-bold md:text-3xl text-2xl text-[#4D533C] mb-4'>Product Reviews</h1><br />
        <div className='flex flex-wrap gap-4 justify-between items-center'>
            <div className='h-[400px] w-[280px] shadow m-auto'  style={{ boxShadow: '10px 15px 40px 10px rgba(0, 0, 0, 0.2)' }}>
                <img src={item} alt="item"/>
                <div className='p-4'>
                    <p className='italic md:text-base text-sm text-[#4D533C] mb-4'>Works great! Just use it and then relax, I fall asleep with no problem every time I use it.</p><br />
                    <h3 className='font-bold md:text-lg text-base text-[#4D533C] mb-2'>Rachael Dill</h3>
                    <img src={stars} alt="stars"  className='h-4' />
                </div>
            </div>


            <div className='h-[400px] w-[280px] shadow m-auto' style={{ boxShadow: '10px 15px 40px 10px rgba(0, 0, 0, 0.2)' }}>
                <img src={item} alt="item" />
                <div className='p-4'>
                    <p className='italic md:text-base text-sm text-[#4D533C] mb-10'>It really helps me fall right to sleep compared to melatonin pills.</p><br />
                    <h3 className='font-bold md:text-lg text-base text-[#4D533C] mb-2'>Javier Mendez</h3>
                    <img src={stars} alt="stars" className='h-4' />
                </div>
            </div>


            <div className='h-[400px] w-[280px] shadow m-auto' style={{ boxShadow: '10px 15px 40px 10px rgba(0, 0, 0, 0.2)' }}>
                <img src={item} alt="item" />
                <div className='p-4'>
                    <p className='italic md:text-base text-sm text-[#4D533C]'>I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.</p><br />
                    <h3 className='font-bold md:text-lg text-base text-[#4D533C] mb-1'>Naomi Nwazurike</h3>
                    <img src={stars} alt="stars" className='h-4' />
                </div>
            </div>


            <div className='h-[400px] w-[280px] shadow m-auto' style={{ boxShadow: '10px 15px 40px 10px rgba(0, 0, 0, 0.2)' }}>
                <img src={item} alt="item" />
                <div className='p-4'>
                    <p className='italic md:text-base text-sm text-[#4D533C] mb-12'>I have been falling asleep faster and sleeping thru the night.</p><br />
                    <h3 className='font-bold md:text-lg text-base text-[#4D533C] mb-1'>Nate Jacobs</h3>
                    <img src={stars} alt="stars" className='h-4' />
                </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Section8