'use client';

import React from 'react';
import Homepage from '@/components/component/Homepage/homepage.component';
import { ThemeProvider } from 'next-themes';
import Header from '../components/component/Header/header.component';

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between">
        <div>
          <Homepage />
        </div>
      </main>
    </ThemeProvider>
  );
}
