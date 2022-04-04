import React from 'react';
import StepOne from "./formStep/stepOne.jsx"
import StepTwo from "./formStep/stepTwo.jsx"
import StepThree from "./formStep/stepThree.jsx"
import StepFour from "./formStep/fourStep.jsx"
import FourthStep from "./formStep/fourthStep.jsx"
import FifthStep from "./formStep/fifthStep.jsx"
import SeventhStep from "./formStep/seventhStep.jsx"
import FinalStep from "./formStep/finalStep.jsx"
import CompleteMessange from "./formStep/completeMessange.jsx"

import { useSelector } from 'react-redux';
const Form = () =>{
    const step = useSelector(state => state.step)
    const stepper = () =>{
        switch (step) {
            case 1:
                return <StepOne></StepOne>
            case 2:
                return <CompleteMessange></CompleteMessange>
            case 3:
                return <StepTwo></StepTwo>
            case 4:
                return <StepThree></StepThree>
            case 5:
                return <StepFour></StepFour>
            case 6:
                return <FourthStep></FourthStep>
            case 7:
                return <FifthStep></FifthStep>
            case 8:
                return <SeventhStep></SeventhStep>
            case 9:
                return <FinalStep></FinalStep>
        }
    }
    return(
        <div className="form__conteiner">
            { stepper()}
        </div>
    )
}
export default Form;