'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useTransition } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function LocalSwitcher() {

    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        })
    }

    const t = useTranslations('Nav');
    const rawLanguages = t.raw('language');
    const languages = Object.keys(rawLanguages).map((key) => ({
        ...rawLanguages[key],
      }));


    return (
        <>
            <select
            defaultValue={localActive}
              name="lang"
              id="lang"
              className='text-base bg-transparent border-2 border-opacity-50 rounded-sm text-white cursor-pointer w-[100px]'
              onChange={onSelectChange}
              disabled={isPending}
            >
                {languages.map((item, index) => (
                    <option value={item.code} key={index} className='text-main-900'>{item.title}</option>
                ))}
            </select>
        </>
    );
}