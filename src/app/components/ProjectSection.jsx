import React from 'react'
import project1 from "../../../public/images/project_1.png"
import project2 from "../../../public/images/project_2.png"
import project3 from "../../../public/images/project_3.png"
import Image from 'next/image'

const projects = [
    {
        src:project1,
        title:"Project 1",
        description:"project details"
    },
    {
        src:project2,
        title:"Project 2",
        description:"project details"
    },
    {
        src:project3,
        title:"Project 3",
        description:"project details"
    },
]

const ProjectSection = () => {
  return (
    <div className="w-[90%] mx-auto mt-[77px]" id='projects'>
      <p className="text-[#FF8911] text-center text-[18px] font-semibold leading-[150%] tracking-[-0.36px]">
        PROJECTS
      </p>
      <p className="text-black text-opacity-85 mb-[20px]  text-center text-[25px] sm:text-[38px] font-bold leading-[150%] tracking-[-0.76px]">
      Digital Portfolio Showcase
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((item, index) => {
          return (
            <div
              key={index}
              className={`px-4 py-7 rounded-[20px] 
             flex flex-col justify-self-center`}
            >
              <Image src={item.src} alt={`project-${index}`} width={367} height={242} className={"rounded-[27px"} />
              
              <p className={`mt-2 text-black text-opacity-85 text-left text-[16px] font-semibold leading-normal`}>
                {item.title}
              </p>
              <p className={`text-black text-opacity-60 text-left text-[14px] font-normal leading-[normal]`}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ProjectSection