import React from 'react'
import girlonbed from '../../assets/girlonbed.png'

function Section6() {
  return (
    <section className="mx-auto md:px-[4vw] px-[3vw] pt-16 pb-3">
      <div className="flex flex-wrap gap-8 items-center justify-between max-w-[1400px] m-auto">
        <div className="space-y-6 max-w-sm m-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-[#0A2472]">
            Our Mission
          </h1>
          <p className="text-base text-[#21384299] leading-relaxed">
            We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That&apos;s why we created products that aim to -
          </p>
          <ul className="space-y-0 text-sm">
            {[
              "Promote Calm",
              "Support Sleep",
              "Reduce Stress",
              "Aid Relaxation"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#21384299]">
                ✔️
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="m-auto h-[400px] max-w-2xl overflow-hidden">
          <img
            src={girlonbed}
            alt="Person relaxing in comfortable navy blue pajamas with a sleep mask"
            fill
            className="max-w-2xl"
            priority
          />
        </div>
      </div>
  </section>
  )
}

export default Section6