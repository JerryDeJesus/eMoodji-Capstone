import React, {useState} from "react";
import Step1 from "./Step1.js";
import Step2 from "./Step2.js";
import Step3 from "./Step3.js";
import Step4 from "./Step4.js";
import StepSubmit from "./StepSubmit.js";

export default function StepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    
    const [entry, setEntry] = useState({
        date_created: "",
        mood: "",
        interest: "",
        activity: "",
    });

    // const handleText = (e) => setEntry({...entry, [e.target.id]: e.target.value});

    const next = () => setCurrentStep(currentStep + 1);

    const back = () => setCurrentStep(currentStep - 1);

    switch (currentStep) {
        case 1: return <Step1 entry = {entry} setEntry = {setEntry} next = {next} />;
        case 2: return <Step2 entry = {entry} setEntry = {setEntry} next = {next} back = {back} />;
        case 3: return <Step3 entry = {entry} setEntry = {setEntry} next = {next} back = {back} />;
        case 4: return <Step4 entry = {entry} next = {next} back = {back} />;
        default: return <StepSubmit entry = {entry} back = {back} />;
    }
}