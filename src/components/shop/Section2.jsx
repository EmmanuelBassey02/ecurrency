import React from 'react'
import group3 from '../../assets/group3.png'

function Section2() {
  return (
    <>
      <section className=" md:px-[4vw] px-[3vw] md:py-20 py-12 ">
           <div className="flex flex-wrap items-center justify-between  gap-6 xl:max-w-[1080px] m-auto">
             <div className="md:max-w-sm max-w-xl m-auto">
               <div className="rounded-lg overflow-hidden w-fit m-auto">
                 <img
                  src={group3}
                  alt="sleepstiq personal melatonine diffuser"
                  className="w-full h-full m-auto"
                 />
              </div>
           </div>


            <div className="w-full max-w-sm m-auto">
                <h2 className="text-3xl font-bold mb-4">About Product</h2>
                <p className="text-[#21384299] md:text-base text-sm mb-4">
                  Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will relieve your mind, quiet the mind, and set you for rest.
                </p>
                  <ul className="mb-6 text-[#4D533C] italic">
                    <li className="flex items-center mb-2">
                      <span className="text-yellow-400 mr-2">✓</span>
                      Promotes calm and relaxation
                    </li>
                    <li className="flex items-center mb-2">
                      <span className="text-yellow-400 mr-2">✓</span>
                      Inhalation allows for a rapid effect
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">✓</span>
                      100% drug-free plant-based ingredients
                    </li>
                  </ul>

                  <div className="flex items-center justify-between mb-4 max-w-[190px]">
                    <div className="space-y-2">
                      <p className='font-bold'>Price</p>
                      <p className='text-neutral-600'>USD $50</p>
                    </div>

                    <div className="flex items-center ">
                        <p className="mr-2">Unit</p>
                       <div>
                          <select className="border rounded px-2 py-1">
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                    </div>
                  </div>
                  <button className="md:w-[180px] w-[120px] bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-300">
                    Buy
                  </button>
              </div>
            </div>
        </section>
    </>
  )
}

export default Section2