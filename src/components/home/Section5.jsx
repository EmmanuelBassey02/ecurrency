import React from 'react'
import group3 from '../../assets/group3.png'

function Section5() {
  return (
    <>
    <div className="md:px-[4vw] px-[3vw] pt-20 md:mb-6 -mb-4">
      <div className="flex flex-wrap justify-between max-w-7xl items-center md:gap-6 gap-4 m-auto">
        <div className="md:max-w-sm max-w-xl m-auto">
          <div className="rounded-lg overflow-hidden w-fit m-auto">
            <img
              src={group3}
              alt="sleepstiq personal melatonine diffuser"
              className="w-full h-full m-auto"
            />
          </div>
        </div>
        <div className="w-full max-w-[400px] space-y-6 m-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-[#12305B]">Shop Now</h1>
          <p className="md:mtext-base text-sm text-[#21384299] md:mb-0 -mb-1">
            Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and
            chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p> 
          <button className="md:w-[200px] w-[120px] h-[40px] font-[500] sm:w-auto text-sm text-white bg-[#FC5959] rounded-[5px]">
            Visit Shop
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Section5