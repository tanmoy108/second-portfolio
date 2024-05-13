"use client";
import RichPreview from "@/components/privew";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Details = ({ params }) => {
  
  const [state, setState] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const GetEducations = async () => {
      const fetchData = await fetch(`/api/projects/${params.id}`, {
        next: { revalidate: 10 },
      });
      const data = await fetchData.json();
      setData(data.result);
      setState(true);
    };
    GetEducations();
  }, [params.id]);

  return (
    <div className="w-[90%]  2xl:w-[60%] mx-auto pt-16 md:pt-40">
      <p className="text-[#FF8911] text-center text-[18px] font-semibold leading-[150%] tracking-[-0.36px]">
        CASE STUDY
      </p>
      <p className="text-black text-opacity-85 mb-[20px]  text-center text-[25px] sm:text-[38px] font-bold leading-[150%] tracking-[-0.76px]">
        Details of Project
      </p>
      {state ? (
        <div>
          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-6">
         <div className="md:w-1/2 flex items-center justify-center">
         <Image
              src={data.image}
              alt={`project-${data.title}`}
              width={500}
              height={300}
              className="md:order-last"
            />
         </div>
            <div className="md:w-1/2 md:order-first gap-3 flex flex-col">
              <p className="text-xl font-bold text-[#3b3b91] text-opacity-85">
                Project Name: <span className="text-[#24243d] "> {data.title} </span>
              </p>
              <p className="text-md font-semibold text-[#3b3b91] text-opacity-85">
                Description:
              </p>
              <RichPreview value={data.description} />
              <p className="text-md font-semibold text-[#3b3b91] text-opacity-85">
                Tool Used:
              </p>
             {data?.tools.map((item,index)=>{
              return (
                <div key={index} className="flex items-center gap-x-2"> <div className="w-3 h-4"> <img src="/images/tick-mark-icon.svg" /> </div> {item}</div>
              )
             })}
             <Link
                    href={data?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:opacity-80"
                  >
                    <Button variant="own" size="lg" className="rounded-full">
                      Live Site
                    </Button>
                  </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-xl text-center">Just a sec, gathering the info...</div>
      )}
    </div>
  );
};

export default Details;
