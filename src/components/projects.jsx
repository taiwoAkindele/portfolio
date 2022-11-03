import React from 'react'
import { PROJECTS } from '../data'

const projects = () => {
    return (
        <div className='flex flex-col items-center justify-center px-[2rem] py-[3rem] gap-[2rem] bg-[#000080] w-[100%]'>
            <h1 className="capitalize text-[20px] leading-[20px] font-[500] text-[#FFFFFF] bg-[#000000] bg-opacity-[25%] rounded-[25px] p-[15px]">My projects</h1>
            <div className=" w-full grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-[2.5rem]">
                {PROJECTS.map((project, i) => (
                    <div key={i} className="flex bg-[#FFFFFF] rounded-[10px] flex-col px-[1rem] py-[1rem] gap-[1rem] h-[440px] md:w-[300px]">
                        <img src={project.image} alt="" className="object-cover w-[270px] h-[150px]" />
                        <h2 className="capitalize font-bold text-[25px] leading-[30px]">{project.title}</h2>
                        <p className="font-normal text-[18px] leading-[25px]">{`${project.description.substring(0, 50)}...`}</p>
                        <div className="flex gap-[.5rem]">
                        {project.stacks?.map((stack, i) => (
                            <img key={i} src={stack.image} alt="" className="" />
                            ))}
                            </div>
                        <div className="flex justify-between items-center">
                            <a className='hover:underline' href={project.gitHub} target="_blank" rel="noopener noreferrer"><span>GITHUB</span></a>
                            <a className='hover:underline' href={project.live} target="_blank" rel="noopener noreferrer"><span>LIVE</span></a>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default projects