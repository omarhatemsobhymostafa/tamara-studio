import React from 'react';
import Logo from './Images/logo.png';

export default function Header({ dark, setDark, menuOpen, setMenuOpen }) {
  const links = [
    { label: 'الرئيسية', id: 'bannar' },
    { label: ' احنا مين', id: 'about' },
    { label: 'فيديوهتنا', id: 'videos' },
    { label: 'المشاريع البرمجية', id: 'projects' },
    { label: 'أعضاء تمرة', id: 'members' },
  ];

  return (
    <>
      <nav
        className={`
          ${dark ? 'bg-red-800' : 'bg-red-600'} 
          fixed top-5 left-1/2 -translate-x-1/2 
          w-[90%] px-6 py-3 flex justify-between items-center 
          rounded-full shadow-lg 
          transition-all duration-500 z-50 
          hover:shadow-xl hover:scale-[1.01]
        `}
      >
        <img src={Logo} alt="Logo" className="w-24 sm:w-32" />

        <div
          className={`hidden md:flex gap-6 font-semibold text-sm sm:text-base ${
            dark ? 'text-black' : 'text-white'
          }`}
        >
          {links.map(({ label, id }, index) => (
            <a
              href={`#${id}`}
              key={index}
              className="hover:underline hover:underline-offset-4 hover:text-yellow-300 transition duration-300"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => setDark(!dark)}
            className="border-2 border-black border-dashed rounded-md px-3 py-1 text-xs sm:text-sm text-black transition hover:scale-105 "
          >
            {dark ? 'الوضع الفاتح' : 'الوضع الداكن'}
          </button>

          <button
            className="md:hidden text-white relative w-8 h-8 focus:outline-none group"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block absolute h-[2px] w-8 bg-current transform transition duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 top-3.5' : 'top-2'
              }`}
            />
            <span
              className={`block absolute h-[2px] w-8 bg-current transition-all duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : 'top-4'
              }`}
            />
            <span
              className={`block absolute h-[2px] w-8 bg-current transform transition duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 top-3.5' : 'top-6'
              }`}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className={`fixed top-20 left-1/2 -translate-x-1/2 w-[80%] bg-white rounded-lg shadow-lg py-5 flex flex-col items-center gap-4 text-black text-base font-semibold transition-all duration-500 animate-fade-in-down z-40`}
        >
          {links.map(({ label, id }, index) => (
            <a
              href={`#${id}`}
              key={index}
              className="hover:text-red-700 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
