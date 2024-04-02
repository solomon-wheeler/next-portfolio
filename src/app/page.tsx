"use client";
import Homepage from "@/components/component/homepage"; // Import the 'Homepage' component correctly
import { ThemeProvider, useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider attribute="class">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer flex items-center justify-between p-1"
          >
            <SunIcon className="w-4 h-4 text-yellow-500" />
            <MoonIcon className="w-4 h-4 text-gray-500" />
          </label>
        </div> */}
        <div>
          <Homepage />
        </div>
      </main>
    </ThemeProvider>
  );
}
