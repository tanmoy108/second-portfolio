import React from 'react'
import skill1 from "../../../public/images/skill1.png"
import Image from 'next/image'
const skills = [
  {
    src:skill1,
    title:"Next.js",
    level:"Expert"
  },
  {
    src:skill1,
    title:"Next.js",
    level:"Intermediate"
  },
  {
    src:skill1,
    title:"Next.js",
    level:"Expert"
  },
  {
    src:skill1,
    title:"Next.js",
    level:"Expert"
  },
  {
    src:skill1,
    title:"Next.js",
    level:"Expert"
  },
  {
    src:skill1,
    title:"Next.js",
    level:"Expert"
  },
  {
    src:skill1,
    title:"Next.js",
    level:"Intermediate"
  },
  {
    src:skill1,
    title:"Next.js",
    level:"Expert"
  },
  {
    src:skill1,
    title:"Next.js",
    level:"Expert"
  },
  {
    src:skill1,
    title:"Next.js",
    level:"Intermediate"
  },
]

const SkillSection = () => {
  return (
    <div className="w-[90%] mx-auto mt-[77px]" id='skills'>
    <p className="text-[#FF8911] text-center text-[18px] font-semibold leading-[150%] tracking-[-0.36px]">
      Skills
    </p>
    <p className="text-black text-opacity-85 mb-[30px] text-center text-[25px] sm:text-[38px] font-bold leading-[150%] tracking-[-0.76px]">
    My Expert Areas
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {
        skills.map((item,index)=>{
          return(
            <div key={index} className='flex items-center gap-1 sm:gap-2'>
              <Image alt={`skill_icon-${index}`}src={item.src} width={70} height={70} className='rounded-full'/>
              <div>
                <p className='text-black text-opacity-85 text-[14px] sm:text-[16px] font-medium leading-[150%] tracking-[-0.32px]'>{item.title}</p>
                <p className='text-black text-opacity-60 text-[12px] sm:text-[14px] font-normal leading-[150%] tracking-[-0.20px]'>{item.level}</p>
              </div>
              </div>
          )
        })
      }
    </div>
  </div>
  )
}

export default SkillSection