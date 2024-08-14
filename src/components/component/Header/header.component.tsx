import React from 'react';
import Link from 'next/link';
import { Toggle } from '@/components/ui/toggle';

import {
  HomeIcon,
  MoonIcon,
  LinkedinIcon,
  GitIcon,
  SunIcon,
} from '@/components/Icons/nav.icon';
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme, setTheme } = useTheme();

  const darkModeActive = theme === 'dark';

  const toggleTheme = () => {
    if (darkModeActive) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-gray-50 dark:bg-gray-900 shadow-sm bg-opacity-100">
      <div className="w-full max-w-screen-xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <HomeIcon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="flex items-center gap-4">
          <Toggle size="lg" aria-label="Toggle theme" onClick={toggleTheme}>
            {darkModeActive ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </Toggle>
          <Link
            href="https://www.linkedin.com/in/solomon-wheeler/"
            target="_blank"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <LinkedinIcon className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/solomon-wheeler"
            target="_blank"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <GitIcon className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
