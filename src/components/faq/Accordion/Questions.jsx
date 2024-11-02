import React from "react";
import Accordion from "./Accordion";

const Questions = () => {
  return (
    <div className="rounded-lg m-auto max-w-4xl">

      <Accordion
        title="Q1: How does it work?"
        answer="Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile."
      />
      <Accordion
        title="Q2: Why inhale melatonin?"
        answer="This is a dummy text. Lorem ipsum dolor sit amet consecteur adipiscing. This is a dummy text. Lorem ipsum dolor sit amet consecteur adipiscing"
      />
      <Accordion 
      title="Q3: How much melatonin is there per inhale?"
      answer="This is a dummy text. Lorem ipsum dolor sit amet consecteur adipiscing. This is a dummy text. Lorem ipsum dolor sit amet consecteur adipiscing" />


      <Accordion
        title="Q4: Is it an e-cigarette or tobacco product?"
        answer="This is a dummy text. Lorem ipsum dolor sit amet consecteur adipiscing"
      />
      
      <Accordion 
      title="Q5: What's in it?" 
      answer="This is a dummy text. Lorem ipsum dolor sit amet consecteur adipiscing. This is a dummy text. Lorem ipsum dolor sit amet consecteur adipiscing" 
      />
    
     <Accordion 
      title="Q5: What's not in it?" 
      answer="This is a dummy text. Lorem ipsum dolor sit amet consecteur adipiscing. This is a dummy text. Lorem ipsum dolor sit amet consecteur adipiscing" 
      />

     <Accordion 
      title="Q7: How long does it last?" 
      answer="This is a dummy text. Lorem ipsum dolor sit amet consecteur adipiscing. This is a dummy text. Lorem ipsum dolor sit amet consecteur adipiscing" 
      />

     <Accordion 
      title="Q8: How do I know it has run out/died?" 
      answer="This is a dummy text. Lorem ipsum dolor sit amet consecteur adipiscing. This is a dummy text. Lorem ipsum dolor sit amet consecteur adipiscing" 
      />
    </div>
  );
};

export default Questions;




