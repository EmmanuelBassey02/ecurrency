import React from 'react'
import Questions from '../faq/Accordion/Questions'


function Section2() {
  return (
    <>
        <section className='md:px-[4vw] px-[3vw] py-6 md:py-12 bg-[#FFFFFF]'>
          <div className='p-2 flex gap-6  justify-between items-start flex-wrap h-fit'>
            <div className='space-y-6 mt-4'>
              <p className='text-[#12305B] font-bold md:text-lg text-base'>Sleepstiq product</p>
              <p className='text-[#12305B]'>Order</p>
              <p className='text-[#12305B]'>Melantonin</p>
            </div>

            <div className=''>
                <Questions />
            </div>
          </div>
        </section>
    </>
  )
}

export default Section2