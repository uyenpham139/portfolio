"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HeaderData, LanguageData } from './Links';
import { useState, FC } from 'react';
import SideBar from './Sidebar';

import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  language: 'en' | 'vie'; // Accept language as prop
  onLanguageChange: (language: 'en' | 'vie') => void; // Accept language change handler as prop
}

const Header: FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="bg-main-500 w-full h-16 fixed flex items-center px-10 md:px-20 lg:px-28 xl:px-36 2xl:px-40 justify-between">
        <div>
          <p className="font-logo text-xl text-white">Portfolio</p>
        </div>
        <div className="w-full flex justify-center items-center gap-4 md:inline-flex hidden">
          {HeaderData.map((item, index) => {
            const isActive = Array.isArray(item.url)
              ? item.url.includes(pathname)
              : pathname === item.url;
            return (
              <Link
                key={index}
                href={Array.isArray(item.url) ? item.url[0] : item.url}
                className={`relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-white before:invisible before:transition-all before:ease-in-out before:duration-300 
                ${isActive ? "text-hover-900" : "text-white"} 
                hover:before:w-full hover:before:visible`}
              >
                {item.title[language]}
              </Link>
            );
          })}
        </div>
        <div className='flex gap-2 text-white'>
          <ModeNightOutlinedIcon className='cursor-pointer' />
          <div className='flex gap-2'>
            <LanguageOutlinedIcon />
            <select
              name="language"
              id="language"
              className='text-base bg-transparent border-2 border-opacity-50 rounded-sm text-white cursor-pointer w-[100px]'
              value={language} // Control the value of the select element based on the language state
              onChange={(e) => onLanguageChange(e.target.value as 'en' | 'vie')}
            >
              {LanguageData.map((item, index) => (
                <option value={item.code} key={index} className='text-main-900 cursor-pointer hover:bg-main-500'>
                  {item.title[language]}
                </option>
              ))}
            </select>
          </div>
          <MenuIcon 
            className='ml-3 cursor-pointer hover:text-main-100 hover:transition-all hover:duration-150 block md:hidden'
            onClick={toggleSidebar}
          />
        </div>
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} language={language} />
      </div>
    </>
  );
};

export default Header;
