import Image from "next/image";

import { useTranslations } from 'next-intl';
import {Link} from '@/i18n/routing';


export default function Home() {
  const t = useTranslations('HomePage');
  const rawProfessions = t.raw('professions') as { [key: string]: string };
  const professions = Object.values(rawProfessions);


  return (
    <div className="flex items-center min-h-screen p-8 pt-16 pb-20 gap-16 sm:p-20">
      {/* Information */}
      <div className="">
        <h1 className="text-7xl mb-6">Hi! I'm <span className="text-hover-900">Irene</span></h1>
        <div className="flex gap-2 mb-6 text-3xl">
          <p>I'm a </p>
          <ul>
            {professions.map((item, index) => {
              return (
                <li key={index}>
                  <span 
                    className="relative text-hover-900 border-r-2 border-hover-900 w-full whitespace-nowrap overflow-hidden animate-[typing_2s_steps(17), cursor_0.4s_step-end_infinite_alternate]"
                  >
                    {item} {/* Access profession based on selected language */}
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
            {t('view-cv-button')}
          </Link>
          <Link
            className="px-4 py-2 bg-main-500 text-3xl text-white font-semibold rounded-lg hover:bg-hover-900 hover:transition-all hover:duration-150"
            href={"/project"}
          >
            {t('view-project-button')}
          </Link>
        </div>
      </div>
      {/* Image */}
      <div>

      </div>
    </div>
  );
}
