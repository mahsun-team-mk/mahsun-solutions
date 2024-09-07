'use client';
import { use, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const CounterTimer = () => {
    const [start, setStart] = useState(true)
    const [isRunning, setIsRunning] = useState(false)
    const [inputValue, setInputValue] = useState(0)
    const [finalValue, setFinalValue] = useState(0)
    const [forNumber, setForNumber] = useState(true)
    const getValue = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(event.target.value))
    }
    const finalValueF = ()=>{
        setFinalValue(inputValue)
        setForNumber(false)
    }
    const Pause = () => {
        setIsRunning(false)
        setStart(false)
    }
    const againStart = () => {
        setStart(true)
        setIsRunning(true)
    }
    useEffect(() => {
        let interval :number;
        if (isRunning) {
            interval = window.setInterval(() => {
                setFinalValue((pre )=>{
                    if(pre>0){
                        return pre-1
                    }
                    else{
                        setIsRunning(false)
                        return 0
                    }
                })
            }, 1000);
        }
        return () => clearInterval(interval)
    }, [isRunning])
    const resetValue = () => {
        setFinalValue(0)
        setIsRunning(false)
    }
    return (
        <>
        <Navbar/>
            <div className="bg-blue-200 h-screen items-center justify-center flex">
                <div className="h-96 w-96 bg-black rounded-lg flex  justify-center">
                    <div className="mt-12">
                        <h1 className="text-white text-2xl mb-4"> Countdown Timer</h1>
                        <div className="flex   ">
                            <input type="text" className="  mr-2 p-1 rounded-lg"  onChange={getValue} />
                            <button className="bg-white p-1   rounded-lg" onClick={finalValueF}>Set</button>
                        </div>
                        <h2 className="text-white text-6xl mt-4 text-center">00:{forNumber ? "00":`${finalValue}` }</h2>
                        <div className="space-x-4  mt-6 justify-center flex">
                            <button className="bg-white p-1 px-3  rounded-lg" onClick={againStart}>{start ? "start " : "Resume"} </button>
                            <button className="bg-white p-1  px-1.5 rounded-lg" onClick={Pause}>Pause</button>
                            <button className="bg-white p-1   px-1.5 rounded-lg" onClick={resetValue}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default CounterTimer;
