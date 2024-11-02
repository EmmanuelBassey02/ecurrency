import React from 'react'
import miller from '../../assets/miller.jpg'

function Section3() {
  return (
    <>
         <section className="md:px-[4vw] px-[3vw] py-6 md:py-12 2xl:py-20 w-full m-auto mb-20">
          <div className="flex flex-wrap gap-16 justify-between items-center max-w-5xl m-auto">
            <div className="space-y-3 max-w-[440px] m-auto">
              <h2 className="text-sm font-semibold text-gray-600">Our Amazing Story</h2>
              <h1 className="text-2xl md:text-4xl font-bold">10k+ Happy Customers</h1><br />
              <p className="text-[#21384299] text-base sm:mt-0 -mt-3">
                  There's no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a
                  framework that fosters candid collaboration.
              </p>
              <button className="text-blue-600 font-semibold flex items-center">
                More know About us
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="bg-[#FBF9F2] m-auto p-6 rounded-lg shadow max-w-sm text-[#4D533C] font-it" style={{ boxShadow: '10px 15px 40px 10px rgba(0, 0, 0, 0.2)' }}>
            <div className="mb-6 ">
                <p className="text-[#4D533C] italic mb-4">
                "I'm a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq."
                </p>
                <div className="flex items-center">
                <img
                    src={miller}
                    alt="James Miller"
                    width={55}
                    height={55}
                    className="rounded-full mr-4"
                />
                <div>
                    <h3 className="font-semibold text-gray-800">James Miller</h3>
                    <p className="text-sm text-gray-600">CEO, Techbias</p>
                </div>
                </div>
            </div>
            <div className="flex justify-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
         </div>
    </section>
    </>
  )
}

export default Section3