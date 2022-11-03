import React from 'react'
import Lottie from 'react-lottie'
import animationData from "../assets/lotties/working.json"

const hero = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };
    return (
        <div className='flex flex-col md:flex-row items-center md:justify-between justify-center md:text-start text-center text-[#000000] px-[4rem] py-[2rem] md:h-[calc(100vh-100px)]'>
            <div className="flex flex-col gap-[2rem]">
                <h1 className="uppercase font-bold leading-[4rem] text-[40px]">Meet <br /> TAIWO AKINDELE, <br />Frontend Developer</h1>
                <p className="capitalize font-normal text-[23px]">I enjoy building products from scratch. Coding is what I love doing.</p>
                {/* <div className="flex flex-col md:flex-row gap-[1rem]">
                    <button className='uppercase font-bold p-[15px] border-solid border-2 hover:bg-[#000000] hover:text-[#FFFFFF]'>Contact</button>
                    <button className="uppercase font-bold p-[15px] border-solid border-2 hover:bg-[#000000] hover:text-[#FFFFFF]">RESUME</button>
                </div> */}
            </div>
            <div onClick={() => null} className="flex items-center justify-center">
            <Lottie options={defaultOptions} />
        </div>
        </div>
    )
}

export default hero