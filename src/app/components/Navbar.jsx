import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
  return (
    <>
    <div className="hidden md:block">
    <nav
        className="bg-white p-4 flex justify-center items-center"
        style={{ boxShadow: "0px 10px 65.2px -26px rgba(0, 0, 0, 0.44)" }}
      >
        <div className="w-[90%] flex justify-between items-center">
          {/* Left side logo */}
          <div className="flex items-center">
            <span className="text-black text-2xl font-black leading-normal">
              Logo
            </span>
          </div>

          {/* Right side navigation links */}
          <div className="flex items-center text-black text-opacity-85 text-base font-medium">
            <Link href="#" style={{ marginRight: "34px" }}>
              About
            </Link>
            <Link href="#" style={{ marginRight: "34px" }}>
              Projects
            </Link>
            <Link href="#" style={{ marginRight: "34px" }}>
              Skills
            </Link>
            <Link href="#" style={{ marginRight: "34px" }}>
              Services
            </Link>
            <Button variant="own" size="own" className="rounded-full">
              Download CV
            </Button>
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
