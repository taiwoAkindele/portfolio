import React from "react";
import { SKILLS } from "../data";

const skills = () => {
    return (
        <div className="flex w-[100%] flex-col items-center justify-center px-[2.5rem] py-[3rem] gap-[2rem]">
            <h1 className="font-[500] text-[20px] rounded-[25px] text-[#FFFFFF] bg-[#000FFF] bg-opacity-[40%] p-[15px] leading-[1rem]">
                My Tech Stack:
            </h1>
            <div className="md:flex md:w-[100%] md:flex-row md:items-center md:justify-evenly grid grid-cols-3 gap-[.6rem]">
                {SKILLS.map((skill, i) => (
                    <img
                        className="md:w-[100px] md:h-[100px]"
                        key={i}
                        src={skill.image}
                        alt=""
                    />
                ))}
            </div>
        </div>
    );
};

export default skills;
