"use client";
import Homepage from "@/components/component/homepage"; // Import the 'Homepage' component correctly
import { ThemeProvider, useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider attribute="class">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="mb-4"
        >
          Toggle Theme
        </button>
        <div>
          <Homepage />
        </div>
      </main>
    </ThemeProvider>
  );
}
