"use client";

import { useState, useRef, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  async function handleLogout() {
    await signOut({ redirect: false });
    router.push("/"); // redirect to login page or root
  }

  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <span className="font-bold text-xl text-black">Ticktock</span>
        <span className="text-gray-600 font-medium">Timesheets</span>
      </div>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-2 font-medium text-gray-700 focus:outline-none"
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
          <span>{session?.user?.name || "User"}</span>
          <svg
            className={`w-4 h-4 text-gray-600 transition-transform ${
              dropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md z-10">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
