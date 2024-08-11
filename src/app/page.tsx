'use client';
import Homepage from '@/components/component/homepage.component'; // Import the 'Homepage' component correctly
import { ThemeProvider, useTheme } from 'next-themes';

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div>
          <Homepage />
        </div>
      </main>
    </ThemeProvider>
  );
}
