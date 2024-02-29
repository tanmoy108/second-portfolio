import { BASE_URL } from "@/lib/constant";
import React from "react";

const experiences = [
  {
    year: "3+ Years",
    place: "Chattogram, Bangladesh",
    degree: "Personal Experience",
    institute: "",
  },
];

const GetEducations = async () => {
  const fetchData = await fetch(`${BASE_URL}/api/educations`, {
    next: { revalidate: 10 },
  });
  const data = await fetchData.json();
  return data.result;
};

const EducationExperienceSection = async () => {
  if(!BASE_URL)
  {
    return null
  }
  const educations = await GetEducations();
  return (
    <div className="mt-[77px]" id="educations">
      <div className="w-[90%]  2xl:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-[#FF8911] text-[18px] font-semibold leading-[150%] tracking-[-0.36px] mb-[37px]">
            Education
          </p>
          <div className="border-[#FF8911] border-l-2 px-2">
            {educations &&
              Array.isArray(educations) &&
              educations.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#FFECCE] rounded-[10px] flex flex-col justify-center ml-5 py-5 px-3 md:pl-5 mb-6 relative"
                  >
                    <div className="before:bg-[#FF8911] before:w-[14px] before:h-[14px] before:rounded-full before:absolute before:top-0 before:-left-9 "></div>

                    <p className="text-black text-opacity-50 text-[14px] font-normal leading-[150%] tracking-[-0.28px]">
                      {item?.time}
                    </p>
                    <p className="text-black text-opacity-60 text-[14px] font-normal leading-[135%] tracking-[-0.28px]">
                      {item?.location}
                    </p>
                    <p className="text-black text-opacity-85 text-[16px] font-semibold leading-[150%] tracking-[-0.32px]">
                      {item?.level}
                    </p>
                    <p className="text-black text-opacity-60 text-[16px] font-normal leading-[135%] tracking-[-0.32px]">
                      {item?.institute}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          <p className="text-[#5C5BDB] text-[18px] font-semibold leading-[150%] tracking-[-0.36px] mb-[37px]">
            Experience
          </p>
          <div className="border-[#5C5BDB] border-l-2 px-2">
            {experiences.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#E3E2FF] rounded-[10px] flex flex-col justify-center ml-5 py-5 px-3 md:pl-5 mb-6 relative"
                >
                  <div className="before:bg-[#5C5BDB] before:w-[14px] before:h-[14px] before:rounded-full before:absolute before:top-0 before:-left-9 "></div>

                  <p className="text-black text-opacity-50 text-[14px] font-normal leading-[150%] tracking-[-0.28px]">
                    {item?.year}
                  </p>
                  <p className="text-black text-opacity-60 text-[14px] font-normal leading-[135%] tracking-[-0.28px]">
                    {item?.place}
                  </p>
                  <p className="text-black text-opacity-85 text-[16px] font-semibold leading-[150%] tracking-[-0.32px]">
                    {item?.degree}
                  </p>
                  <p className="text-black text-opacity-60 text-[16px] font-normal leading-[135%] tracking-[-0.32px]">
                    {item?.institute}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperienceSection;
