import React from "react";
import Image from "next/image";

const GetSkills = async () => {
  const fetchData = await fetch("http://localhost:3000/api/skills", {
    next: { revalidate: 10 },
  });
  const data = await fetchData.json();
  return data.result;
};

const SkillSection = async () => {
  const skills = await GetSkills();
  return (
    <div className="w-[90%]  2xl:w-[60%] mx-auto mt-[77px]" id="skills">
      <p className="text-[#FF8911] text-center text-[18px] font-semibold leading-[150%] tracking-[-0.36px]">
        Skills
      </p>
      <p className="text-black text-opacity-85 mb-[30px] text-center text-[25px] sm:text-[38px] font-bold leading-[150%] tracking-[-0.76px]">
        My Expert Areas
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {skills &&
          Array.isArray(skills) &&
          skills?.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-1 sm:gap-2">
                <Image
                  alt={`skill_icon-${index}`}
                  src={item.imageUrl}
                  width={70}
                  height={70}
                  className="rounded-full"
                />
                <div>
                  <p className="text-black text-opacity-85 text-[14px] sm:text-[16px] font-medium leading-[150%] tracking-[-0.32px]">
                    {item.name}
                  </p>
                  <p className="text-black text-opacity-60 text-[12px] sm:text-[14px] font-normal leading-[150%] tracking-[-0.20px]">
                    {item.role}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SkillSection;
