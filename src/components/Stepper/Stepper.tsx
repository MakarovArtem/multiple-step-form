import React, { FC, useState, useEffect } from "react";

import "./Stepper.css";

interface StepperProps {
  currentStep: number;
  steps: string[];
}

const Stepper: FC<StepperProps> = ({currentStep, steps}) => {

  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    currentStep === steps?.length
    ? setComplete(true)
    : setComplete(false)
  }, [currentStep])

  return (
    <div className="stepperContainer">
      {
        steps.map((step, i) =>(
          <div
            key={i}
            className={`stepItem ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step"></div>
            <p className="text">{step}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Stepper;