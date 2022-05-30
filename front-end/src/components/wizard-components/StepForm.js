import React, {useState} from "react";
import Step1 from "./Step1.js";
import Step2 from "./Step2.js";
import Step3 from "./Step3.js";
import Step4 from "./Step4.js";
import StepSubmit from "./StepSubmit.js";

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import "../../Wizard.css"

const activitiesFileData = require('../../data/activities.json');

export default function StepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [activitiesData] = useState(activitiesFileData);
    
    const [entry, setEntry] = useState({
        userid: localStorage.getItem("userid"),
        mood: "",
        interest: "",
        activity: "",
    });

    const next = () => setCurrentStep(currentStep + 1);

    const back = () => setCurrentStep(currentStep - 1);

    switch (currentStep) {
        case 1: return <Step1 progressBarComponent = {<Progress type="circle" strokeWidth={6} width={200} percent={25} status="active" style={{fontSize: '100px'}} theme={{active: {symbol:'‍🤔', color: '#FC2F22'}}}/>} entry = {entry} setEntry = {setEntry} next = {next} />;
        case 2: return <Step2 progressBarComponent = {<Progress type="circle" strokeWidth={6} width={200} percent={50} status="active" style={{fontSize: '100px'}} theme={{active: {symbol:'‍🙂', color: '#FC9E22'}}}/>} entry = {entry} setEntry = {setEntry} next = {next} back = {back} />;
        case 3: return <Step3 progressBarComponent = {<Progress type="circle" strokeWidth={6} width={200} percent={75} status="active" style={{fontSize: '100px'}} theme={{active: {symbol:'‍😀', color: '#fce849'}}}/>} entry = {entry} setEntry = {setEntry} next = {next} back = {back} activitiesData = {activitiesData} />;
        case 4: return <Step4 progressBarComponent = {<Progress type="circle" strokeWidth={6} width={200} percent={100} status="active" style={{fontSize: '100px'}} theme={{active: {symbol:'‍😬', color: '#32C20E'}}}/>} entry = {entry} next = {next} back = {back} activitiesData = {activitiesData} />;
        default: return <StepSubmit entry = {entry} back = {back} />;
    }
}