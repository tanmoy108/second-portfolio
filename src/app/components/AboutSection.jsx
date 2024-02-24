import Image from "next/image";
import React from "react";
import myImage from "../../../public/images/tanmoy-image.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="mt-[77px] max-h-max py-8 bg-[#f4f4f4] relative" id="about">
      <svg
        className="w-full  h-[800px] md:h-[486px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_32_412"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          className="h-[600px] md:h-[486px]"
        >
          <rect className="w-screen h-[600px] md:h-[486px]" fill="#F4F4F4" />
        </mask>
        <g mask="url(#mask0_32_412)">
          <path
            d="M-878.849 263.323C-955.849 137.5 -944.182 137.5 -843.849 263.323C-658.397 602.632 -646.73 602.632 -808.849 263.323C-885.849 -75.9857 -874.182 -75.9857 -773.849 263.323C-669.703 628.415 -658.037 628.415 -738.849 263.323C-815.849 -101.769 -804.182 -101.769 -703.849 263.323C-627.465 454.12 -615.798 454.12 -668.849 263.323C-745.849 72.5263 -734.182 72.5263 -633.849 263.323C-528.363 473.715 -516.696 473.715 -598.849 263.323C-675.849 52.931 -664.182 52.931 -563.849 263.323C-456.138 504.655 -444.471 504.655 -528.849 263.323C-605.849 21.991 -594.182 21.991 -493.849 263.323C-369.504 620.164 -357.837 620.164 -458.849 263.323C-535.849 -93.5183 -524.182 -93.5183 -423.849 263.323C-323.805 618.102 -312.139 618.102 -388.849 263.323C-465.849 -91.4557 -454.182 -91.4557 -353.849 263.323C-276.703 454.12 -265.036 454.12 -318.849 263.323C-395.849 72.5263 -384.182 72.5263 -283.849 263.323C-182.16 459.276 -170.493 459.276 -248.849 263.323C-325.849 67.3697 -314.182 67.3697 -213.849 263.323C-76.0224 605.726 -64.3557 605.726 -178.849 263.323C-255.849 -79.0797 -244.182 -79.0797 -143.849 263.323C-55.3015 525.282 -43.6348 525.282 -108.849 263.323C-185.849 1.36432 -174.182 1.36432 -73.8487 263.323C10.8816 443.806 22.5483 443.806 -38.8487 263.323C-115.849 82.8397 -104.182 82.8397 -3.84869 263.323C132.605 573.754 144.271 573.754 31.1513 263.323C-45.8487 -47.1083 -34.182 -47.1083 66.1513 263.323C175.651 630.478 187.318 630.478 101.151 263.323C24.1514 -103.832 35.818 -103.832 136.151 263.323C214.22 467.527 225.886 467.527 171.151 263.323C94.1514 59.119 105.818 59.119 206.151 263.323C350.317 645.948 361.984 645.948 241.151 263.323C164.151 -119.302 175.818 -119.302 276.151 263.323C362.692 540.752 374.359 540.752 311.151 263.323C234.151 -14.1057 245.818 -14.1057 346.151 263.323C428.022 438.65 439.689 438.65 381.151 263.323C304.151 87.9963 315.818 87.9963 416.151 263.323C570.488 627.384 582.154 627.384 451.151 263.323C374.151 -100.738 385.818 -100.738 486.151 263.323C575.115 544.877 586.782 544.877 521.151 263.323C444.151 -18.231 455.818 -18.231 556.151 263.323C634.066 419.054 645.733 419.054 591.151 263.323C514.151 107.592 525.818 107.592 626.151 263.323C746.418 480.934 758.085 480.934 661.151 263.323C584.151 45.7117 595.818 45.7117 696.151 263.323C791.016 457.214 802.683 457.214 731.151 263.323C654.151 69.4323 665.818 69.4323 766.151 263.323C891.835 555.19 903.502 555.19 801.151 263.323C724.151 -28.5443 735.818 -28.5443 836.151 263.323C924.962 488.154 936.629 488.154 871.151 263.323C794.151 38.4923 805.818 38.4923 906.151 263.323C1036.17 621.196 1047.84 621.196 941.151 263.323C864.151 -94.5497 875.818 -94.5497 976.151 263.323C1055.81 473.715 1067.48 473.715 1011.15 263.323C934.151 52.931 945.818 52.931 1046.15 263.323C1186.81 642.854 1198.48 642.854 1081.15 263.323C1004.15 -116.208 1015.82 -116.208 1116.15 263.323C1198.49 506.718 1210.16 506.718 1151.15 263.323C1074.15 19.9283 1085.82 19.9283 1186.15 263.323C1258.64 371.613 1270.3 371.613 1221.15 263.323C1144.15 155.033 1155.82 155.033 1256.15 263.323C1399.96 465.464 1411.63 465.464 1291.15 263.323C1214.15 61.1817 1225.82 61.1817 1326.15 263.323C1439.28 517.031 1450.95 517.031 1361.15 263.323C1284.15 9.61501 1295.82 9.61501 1396.15 263.323C1482.82 447.932 1494.49 447.932 1431.15 263.323C1354.15 78.7143 1365.82 78.7143 1466.15 263.323C1633.47 694.42 1645.13 694.42 1501.15 263.323C1424.15 -167.774 1435.82 -167.774 1536.15 263.323C1630.6 643.885 1642.27 643.885 1571.15 263.323C1494.15 -117.239 1505.82 -117.239 1606.15 263.323C1683.37 468.558 1695.04 468.558 1641.15 263.323C1564.15 58.0877 1575.82 58.0877 1676.15 263.323C1822.87 658.324 1834.54 658.324 1711.15 263.323C1634.15 -131.678 1645.82 -131.678 1746.15 263.323C1818.19 435.556 1829.86 435.556 1781.15 263.323C1704.15 91.0903 1715.82 91.0903 1816.15 263.323C1935.11 499.498 1946.78 499.498 1851.15 263.323C1774.15 27.1477 1785.82 27.1477 1886.15 263.323C1971.81 430.399 1983.47 430.399 1921.15 263.323C1844.15 96.247 1855.82 96.247 1956.15 263.323C2120.59 643.885 2132.25 643.885 1991.15 263.323C1914.15 -117.239 1925.82 -117.239 2026.15 263.323C2128.52 659.355 2140.19 659.355 2061.15 263.323C1984.15 -132.709 1995.82 -132.709 2096.15 263.323C2168 434.524 2179.67 434.524 2131.15 263.323C2054.15 92.1217 2065.82 92.1217 2166.15 263.323C2296.71 537.658 2308.37 537.658 2201.15 263.323C2124.15 -11.0117 2135.82 -11.0117 2236.15 263.323C2329.13 497.436 2340.8 497.436 2271.15 263.323"
            stroke="#5C5BDB"
            strokeOpacity="0.2"
            strokeWidth="2"
          />
        </g>
      </svg>

      <div className="w-[90%]  2xl:w-[60%] mx-auto absolute inset-0  grid grid-cols-1 md:grid-cols-2 gap-9">
        <div className="flex justify-center items-center">
          <Image width={350} height={437} src={myImage} alt="tanmoy image" />
        </div>
        <div className="flex justify-center flex-col">
          <p className="text-[#FF8911] text-center md:text-left  text-[18px] font-semibold leading-[150%] tracking-[-0.36px]">
            ABOUT ME
          </p>
          <p className="text-black text-center md:text-left  text-opacity-85 text-[25px] sm:text-[38px] font-bold leading-[150%] tracking-[-0.76px]">
            Code Architect, Problem Solver
          </p>
          <p className=" text-justify mb-[19px] text-black text-opacity-60 text-[16px] leading-[150%] tracking-[-0.32px]">
            A MERN stack and Next.js developer with a passion for creating
            attractive landing pages, UI design, and full-stack development. I'm
            also skilled in graphic design and committed to continuous learning
            in the ever-evolving world of web development.
          </p>
          <div className="grid grid-cols-2 gap-7 self-center md:self-start">
            <Link
              href="https://github.com/tanmoy108"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="34"
                height="32"
                viewBox="0 0 34 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 0C26.3925 0 34 7.3411 34 16.4047C34 23.6638 29.1338 29.795 22.3763 31.9687C21.5263 32.1122 21.2075 31.6201 21.2075 31.1894C21.2075 30.7998 21.2287 29.508 21.2287 28.1341C25.5 28.8928 26.605 27.1293 26.945 26.2065C27.1363 25.7349 27.965 24.279 28.6875 23.8893C29.2825 23.5818 30.1325 22.823 28.7087 22.8025C27.37 22.782 26.4138 23.9919 26.095 24.484C24.565 26.9652 22.1212 26.268 21.1437 25.8374C20.995 24.7711 20.5487 24.0534 20.06 23.6433C23.8425 23.2332 27.795 21.8183 27.795 15.5435C27.795 13.7594 27.1363 12.283 26.0525 11.1347C26.2225 10.7246 26.8175 9.04309 25.8825 6.78745C25.8825 6.78745 24.4587 6.35682 21.2075 8.46893C19.8475 8.09982 18.4025 7.91527 16.9575 7.91527C15.5125 7.91527 14.0675 8.09982 12.7075 8.46893C9.45625 6.33632 8.0325 6.78745 8.0325 6.78745C7.0975 9.04309 7.6925 10.7246 7.8625 11.1347C6.77875 12.283 6.12 13.7389 6.12 15.5435C6.12 21.8388 10.0938 23.2332 13.8762 23.6433C13.26 24.1559 12.7288 25.1402 12.7288 26.6781C12.7288 28.8723 12.75 30.6358 12.75 31.1894C12.75 31.6201 12.4312 32.1327 11.5812 31.9687C8.20592 30.8701 5.27282 28.7773 3.19515 25.9851C1.11748 23.1929 -4.57764e-05 19.8421 0 16.4047C0 7.3411 7.6075 0 17 0Z"
                  fill="#5C5BDB"
                />
              </svg>
            </Link>

            <Link
              href="https://www.behance.net/tanmoy46"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.2666 0C29.6131 0 32.3281 2.71506 32.3281 6.06152V26.2666C32.3281 29.6131 29.6131 32.3281 26.2666 32.3281H6.06152C2.71506 32.3281 0 29.6131 0 26.2666V6.06152C0 2.71506 2.71506 0 6.06152 0H26.2666ZM10.5024 7.72423H2.69401V24.2882H10.7339C13.7437 24.2882 16.5639 22.857 16.5639 19.4895C16.5639 17.4058 15.5747 15.8694 13.5542 15.2801C15.0275 14.5645 15.8063 13.4911 15.8063 11.8284C15.8063 8.52401 13.3438 7.72423 10.5024 7.72423ZM10.0394 14.4172H6.33513V10.5445H9.76578C11.0707 10.5445 12.2704 10.9023 12.2704 12.4387C12.2704 13.8489 11.3443 14.4172 10.0394 14.4172ZM10.2288 21.4679H6.33513V16.9007H10.313C11.9126 16.9007 12.9228 17.5952 12.9228 19.279C12.9228 20.9628 11.7232 21.4679 10.2288 21.4679ZM23.9093 22.1414C21.973 22.1414 20.9628 21.0049 20.9628 19.0896H29.6131C29.6341 18.8791 29.6341 18.6686 29.6341 18.4582C29.6341 14.9223 27.5505 11.9547 23.7831 11.9547C20.1419 11.9547 17.6373 14.7118 17.6373 18.3108C17.6373 22.0572 19.9946 24.6039 23.7831 24.6039C26.6665 24.6039 28.5186 23.32 29.4026 20.5839H26.4981C26.1824 21.5942 24.8985 22.1414 23.9093 22.1414ZM23.6989 14.4382C25.3405 14.4382 26.1614 15.4274 26.3087 17.0059H20.9628C21.068 15.4274 22.1203 14.4382 23.6989 14.4382ZM20.2893 8.83972H27.0032V10.4603H20.2893V8.83972Z"
                  fill="#5C5BDB"
                />
              </svg>
            </Link>
          </div>
          <div className="mt-[19px] self-center md:self-start">
            <Link
              href="https://drive.google.com/file/d/1cmH0IpLDQdcAGZm8dlzMKSkh4Uwx72fT/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="own" size="own" className=" rounded-full">
                Download CV
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
