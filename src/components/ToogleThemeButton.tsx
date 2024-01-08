'use client';
import React from 'react'
import { cn } from '@/utils/cn'
import { useTheme } from 'next-themes'

type Props = {}

export default function ToogleThemeButton({}: Props) {
    const {resolvedTheme, setTheme} = useTheme()
    const theme = resolvedTheme

    function toogleTheme(){
        if(theme == 'dark'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }

    return (
        <button onClick={toogleTheme} className={cn('flex h-5 w-10 cursor-pointer items-center rounded-full p-1',
            {'bg-light-theme-toggle': theme == "light"},
            {'bg-dark-theme-toggle': theme == "dark"},
        )}>
            <div className={cn('h-4 w-4 rounded-full bg-white transition-all dark:bg-very-dark-blue-bg',
                {'translate-x-full': theme == "light"},
                {'translate-x-0': theme == "dark"},
            )}></div>
        </button>
    )
}