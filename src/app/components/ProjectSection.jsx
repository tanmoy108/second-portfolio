import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/lib/constant";
import { Button } from "@/components/ui/button";

const GetEducations = async () => {
  const fetchData = await fetch(`${BASE_URL}/api/projects`, {
    next: { revalidate: 10 },
  });
  const data = await fetchData.json();
  return data.result;
};

const ProjectSection = async () => {
  if (!BASE_URL) {
    return null;
  }
  const projects = await GetEducations();
  const reverseProject = projects.reverse();
  return (
    <div className="w-[90%] 2xl:w-[60%] mx-auto mt-[77px]" id="projects">
      <p className="text-[#FF8911] text-center text-[18px] font-semibold leading-[150%] tracking-[-0.36px]">
        PROJECTS
      </p>
      <p className="text-black text-opacity-85 mb-[20px]  text-center text-[25px] sm:text-[38px] font-bold leading-[150%] tracking-[-0.76px]">
        Digital Portfolio Showcase
      </p>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3">
        {reverseProject &&
          Array.isArray(reverseProject) &&
          reverseProject.map((item, index) => {
            return (
              <div
                key={index}
                className={`px-4 py-7 rounded-[20px] 
             flex flex-col justify-self-center`}
              >
                <Image
                  src={item?.image}
                  alt={`project-${index}`}
                  width={367}
                  height={242}
                  className={"rounded-[27px]"}
                />
                <p
                  className={`mt-2 text-black text-opacity-85 text-left text-[16px] font-semibold leading-normal`}
                >
                  {item?.title}
                </p>
                {/* <p
                  className={`text-black text-opacity-60 text-left text-[14px] font-normal leading-[normal]`}
                >
                  {item?.description}
                </p> */}
                <div className="flex justify-end gap-x-3 mt-4">
                  <Link  href={`/projectdetails/${item?.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:opacity-80">
                  <Button variant="default" size="sm" className="rounded-full">
                    Case Study
                  </Button>
                  </Link>
                  <Link
                    href={item?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:opacity-80"
                  >
                    <Button variant="own" size="sm" className="rounded-full">
                      Live Site
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectSection;
