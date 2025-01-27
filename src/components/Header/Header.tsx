"use client";

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState } from 'react';
import SideBar from './Sidebar';

import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import LocalSwitcher from './local-switcher';

const Header = () => {
  const t = useTranslations('Nav');
  const rawNavigations = t.raw('navigation'); // Fetch the raw object
  const navigations = Object.keys(rawNavigations).map((key) => ({
    ...rawNavigations[key],
  }));

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
          {navigations.map((item, index) => {
            const isActive = item.url && pathname === item.url;
            return (
              <Link
                key={index}
                href={item.url}
                className={`relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-white before:invisible before:transition-all before:ease-in-out before:duration-300 
                ${isActive ? 'text-hover-900' : 'text-white'} 
                hover:before:w-full hover:before:visible`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-2 text-white">
          <ModeNightOutlinedIcon className="cursor-pointer" />
          <div className="flex gap-2">
            <LanguageOutlinedIcon />
            <LocalSwitcher />
          </div>
          <MenuIcon
            className="ml-3 cursor-pointer hover:text-main-100 hover:transition-all hover:duration-150 block md:hidden"
            onClick={toggleSidebar}
          />
        </div>
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
};

export default Header;
