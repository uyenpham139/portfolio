import Image from "next/image";
import Link from "next/link";
import { ProfessionsData } from "./Data";

interface HomeProps {
  language: 'en' | 'vie';
}

export default function Home({ language }: HomeProps) {
  console.log("Language:",language);
  return (
    <div className="items-center min-h-screen p-8 pt-16 pb-20 gap-16 sm:p-20">
      <div className="items-center">
        <h1 className="text-7xl">Hi! I'm <span className="text-hover-900">Irene</span></h1>
        <div className="flex gap-1">
          <p>I'm a </p>
          <ul>
            {ProfessionsData.map((item, index) => {
              return (
                <li key={index}>
                  <span 
                    className="relative text-hover-900 border-r-2 border-hover-900 w-full whitespace-nowrap overflow-hidden animate-[typing_2s_steps(17), cursor_0.4s_step-end_infinite_alternate]"
                  >
                    {item[language]} {/* Access profession based on selected language */}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-10">
          <Link 
            className="px-4 py-2 bg-main-100 text-3xl text-main-900 font-semibold rounded-lg hover:bg-hover-500 hover:transition-all hover:duration-150"
            href={"/viewCV"}
          >
            {language === 'en' ? 'View CV' : 'Tải CV'}
          </Link>
          <Link
            className="px-4 py-2 bg-main-500 text-3xl text-white font-semibold rounded-lg hover:bg-hover-900 hover:transition-all hover:duration-150"
            href={"/project"}
          >
            {language === 'en' ? 'View projects' : 'Xem dự án'}
          </Link>
        </div>
      </div>
    </div>
  );
}
