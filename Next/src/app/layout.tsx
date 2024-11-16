"use client";
import "./globals.css";
import { MouseEventHandler, ReactNode, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarProps = [
    {
      label: "アイテム1",
      event: () => {
        console.log("ほげ");
      },
    },
    { label: "アイテム2", event: () => {} },
    { label: "アイテム3", event: () => {} },
    { label: "アイテム4", event: () => {} },
  ];

  return (
    <html lang="ja">
      <body>
        <Navbar />
        <Sidebar object={sidebarProps} />
        {children}
      </body>
    </html>
  );
}

function Navbar(): ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Navbar */}
      <nav className="bg-black p-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">
            Todoアプリ
          </div>

          {/* Hamburger menu for small screens */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

interface SidebarProps {
  object: ObjectItems[];
  className?: string;
}

interface ObjectItems {
  label: string;
  event: MouseEventHandler<HTMLDivElement>;
  className?: string;
}
function Sidebar(props: SidebarProps): ReactNode {
  return (
    <>
      <div
        className={`${props.className} relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5`}
      >
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          {props.object.map((v: ObjectItems, i: number) => (
            <div
              key={i}
              onClick={v.event}
              className={`${v.className} flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none`}
            >
              <div className="grid place-items-center mr-4"></div>
              {v.label}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
