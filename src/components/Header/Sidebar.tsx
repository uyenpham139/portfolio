"use client";

import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { HeaderData } from './Links';
import Link from 'next/link';

import CloseIcon from '@mui/icons-material/Close';

interface SideBarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    language: 'en' | 'vie'; // Accept language as a prop
}

const SideBar: FC<SideBarProps> = ({ isOpen, toggleSidebar, language }) => {

    const pathname = usePathname(); 

    return (
        <div
            className={`min-h-screen fixed top-0 right-0 bg-main-500 z-50 w-60 transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} // Controls the slide-in/out effect
        >
            <div className="flex justify-between p-4">
                <p className='font-logo text-lg text-white'>Portfolio</p>
                <CloseIcon
                    className="cursor-pointer text-white"
                    onClick={toggleSidebar} // Close sidebar when CloseIcon is clicked
                />
            </div>
            <div className='flex flex-col items-center'>
                {HeaderData.map((item, index) => {
                    const isActive = Array.isArray(item.url)
                        ? item.url.includes(pathname)
                        : pathname === item.url;
                    return (
                        <Link
                        className={`
                        w-full text-center py-4
                        ${isActive ? "bg-main-100 text-main-900 hover:text-white" : "text-white"} 
                        hover:bg-hover-900 transition-all duration-150`}
                            key={index}
                            href={Array.isArray(item.url) ? item.url[0] : item.url} // Use href here
                        >
                            {item.title[language]}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default SideBar;

