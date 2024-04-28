import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import BottomNavbar from "./BottomNavbar";
import logo from "../../../public/images/logo.png"

const Navbar = () => {
  return (
    <>
      <div
        className="w-full hidden md:block"
        style={{ position: "fixed", zIndex: 100 }}
      >
        <nav
          className="bg-white p-4 flex justify-center items-center"
          style={{ boxShadow: "0px 10px 65.2px -26px rgba(0, 0, 0, 0.44)" }}
        >
          <div className="w-[90%] flex justify-between items-center">
            {/* Left side logo */}
            <Link href="/#home">
              <div className="flex items-center">
                <Image src={logo} alt="logo" width={94} height={55} />
              </div>
            </Link>

            {/* Right side navigation links */}
            <div className="flex items-center text-black text-opacity-85 text-base font-medium">
              <Link href="/#about" style={{ marginRight: "34px" }}>
                About
              </Link>
              <Link href="/#projects" style={{ marginRight: "34px" }}>
                Projects
              </Link>
              <Link href="/#skills" style={{ marginRight: "34px" }}>
                Skills
              </Link>
              <Link href="/#services" style={{ marginRight: "34px" }}>
                Services
              </Link>
              <Link
                href="https://drive.google.com/file/d/1cmH0IpLDQdcAGZm8dlzMKSkh4Uwx72fT/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="own" size="own" className="rounded-full">
                  Download CV
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="block md:hidden">
        <BottomNavbar />
      </div>
    </>
  );
};

export default Navbar;
