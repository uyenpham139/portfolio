"use client";

import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

import CloseIcon from '@mui/icons-material/Close';

interface SideBarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const SideBar: FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {

    const pathname = usePathname(); 

    const t = useTranslations('Nav');
    const rawNavigations = t.raw('navigation'); // Fetch the raw object
    const navigations = Object.keys(rawNavigations).map((key) => ({
        ...rawNavigations[key],
    }));

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
                {navigations.map((item, index) => {
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
                            {item.title}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default SideBar;

