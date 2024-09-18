'use client';

import { useEffect, useState } from 'react';
import DarkModeButton from './DarkModeButton';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from 'next-themes';
import { LogIn, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  const { data: session } = useSession<any | null>();
  const [providers, setProviders] = useState<any | null>(null);
  const { setTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState(theme === 'dark');

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    setTheme(isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  useEffect(() => {}, [session]);

  return (
    <>
      {/* {console.log(session?.token)} */}
      <nav className="fixed w-full z-50 top-0 start-0 bg-clip-padding backdrop-blur-lg bg-opacity-80">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <Image src="https://flowbite.com/docs/images/logo.svg" width={30} height={30} alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              DevSteps
            </span>
          </Link>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <Link href="/" className="navbar-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="navbar-link">
                  Project
                </Link>
              </li>
              <li>
                <Link href="#" className="navbar-link">
                  Quiz
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse hidden gap-4">
            {session?.user ? (
              <>
                <button
                  className="p-[2px] relative"
                  onClick={() => {
                    signOut();
                  }}
                >
                  <div className="sign-button-outerdiv" />
                  <div className="sign-button-innerdiv">Log Out</div>
                </button>
                <Avatar>
                  <AvatarImage src={`${session.user.image}`} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </>
            ) : (
              providers &&
              Object.values(providers).map((provider: any) => (
                <button
                  className="p-[2px] relative"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                >
                  <div className="sign-button-outerdiv" />
                  <div className="sign-button-innerdiv">Sign-In</div>
                </button>
              ))
            )}

            <DarkModeButton />
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:hidden gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {session?.user ? (
                  <Avatar>
                    <AvatarImage src={`${session.user.image}`} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                ) : (
                  <div className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <Image src="/assets/menu.png" width={30} height={30} alt="menu" />
                  </div>
                )}
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>Home</DropdownMenuItem>
                <DropdownMenuItem>Projects</DropdownMenuItem>
                <DropdownMenuItem>Quizzes</DropdownMenuItem>

                <DropdownMenuItem onClick={() => toggleTheme()}>
                  <DarkModeButton />
                </DropdownMenuItem>

                {session?.user ? (
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem>
                    {providers &&
                      Object.values(providers).map((provider: any) => (
                        <div
                          className="flex"
                          key={provider.name}
                          onClick={() => {
                            signIn(provider.id);
                          }}
                        >
                          <LogIn className="mr-2 pt-1 h-5 w-4" />
                          <span>Sign In</span>
                        </div>
                      ))}
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
