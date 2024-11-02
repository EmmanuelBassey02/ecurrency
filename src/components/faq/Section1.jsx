import React from 'react'

function Section1() {
  return (
    <>
       <section className="home-bg bg-[#FBF9F2] md:h-[520px] xl:h-[555px] h-[320px] md:px-[4vw] px-[3vw] md:pt-[70px] lg:pt-[150px] pt-[100px]">
         <div className="text-left text-[#12305B] space-y-6">
            <p className="text-xl md:text-2xl">We're here to help you</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">How can we assist?</h1>
            <div className='max-w-3xl rounded-[10px] bg-white p-2 pl-4 flex gap-4 items-center justify-start'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_1942)">
                    <path d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z" stroke="#2C3E50" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28 28L20 20" stroke="#2C3E50" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1942">
                      <rect width="32" height="32" fill="white"/>
                    </clipPath>
                  </defs>
              </svg>


                <input type="text" name="" id="" className='h-10 md:h-12 max-w-xl w-[500px] placeholder:text-[#12305B] outline-none' placeholder='Search FAQs here'/>
            </div>
         </div>
       </section>
    </>
  )
}

export default Section1