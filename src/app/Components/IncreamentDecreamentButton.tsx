"use client"
import { useState } from "react";
function IncreamentDecreament() {
    const [increament, setIncreament] = useState(0)
    const handleValue = () => {
        setIncreament(increament + 1)
    }
    const handleValueDecreament = () => {
        setIncreament(increament - 1)
    }
    const resetValue = () => {
        setIncreament(0)
    }
    return (
        <>
            <div className="relative   py-16 font-[sans-serif]  border-4 border-red-600 rounded-10" >
                <div className="absolute inset-0">
                    <img src="bg.png" alt="Background Image" className="w-full h-full object-cover " />
                </div>
                <div className="relative max-w-screen-xl mx-auto px-8 z-10  text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-extrabold  leading-tight mb-6">Welcome to my another project </h1>
                    <p className="text-lg md:text-xl mb-12">this is simploe project but it is based on modern or cutting edge language ie Reat.js, Next.js and Tailwind css.</p>
                    <p className="text-lg  md:text-xl mb-12"><span className="border-black  border-2 p-4 rounded-full">Your Total Count is [<span className="text-red-600"> {increament}</span> ]</span></p>
                    <button type="button" className="bg-indigo-600 mt-4 hover:bg-indigo-700 text-white text-base tracking-wide px-6 py-3 rounded-full 
                    transition duration-300 ease-in-out shadow-lg hover:shadow-xl" onClick={handleValue}>Increament + 1</button>
                    <button type="button" className="bg-red-600 hover:bg-indigo-700 text-white text-base tracking-wide px-6 py-3 rounded-full 
                    transition duration-300 ease-in-out shadow-lg hover:shadow-xl" onClick={resetValue}>Reset 0</button>
                    <button type="button" className="bg-black hover:bg-indigo-700 text-white text-base tracking-wide px-6 py-3 rounded-full 
                    transition duration-300 ease-in-out shadow-lg hover:shadow-xl border-2 border-blue-600" onClick={handleValueDecreament} >Decreament -1</button>
                </div>
            </div>
        </>
    )
}

export default IncreamentDecreament;