"use client";
import Image from 'next/image';
import { GrSearch } from "react-icons/gr";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 md:flex-nowrap">

        {/* Logo */}
        <div className="flex-shrink-0 md:-ml-14">
          <Image 
            src="/logo-bg-removed2.png" 
            alt="Logo" 
            width={180} height={80} 
            className="w-32 md:w-[230px]" // Adjust size for smaller screens
            unoptimized 
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-sm border rounded-full focus-within:shadow-md mt-3 md:mt-0">
          <input 
            type="text" 
            placeholder="Search product here..." 
            className="w-full h-8 outline-none rounded-l-full pl-3 text-black"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        {/* Shopping Cart */}
        <div className="mt-3 md:mt-0">
          Shopping Cart
        </div>

      </div>
    </header>
  );
};

export default Header;
