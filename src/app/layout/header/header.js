"use client";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const Header = () => {
  const [sideBar, setSideBar] = useState(false);

  const NavigationLink = [
    {
      Title: "Incedo Advantage",
      Path: "/upgrade-card",
    },
    {
      Title: "Incedo Cards",
      Path: "/upgrade-card",
    },
    {
      Title: "iPayLatr",
      Path: "/iPayLatr",
    },
    {
      Title: "Rewards Wallet",
      Path: "/premier-savings",
    },
    {
      Title: "Help",
      Path: "/premier-savings",
    },
  ];

  return (
    <>
      <aside
        id="logo-sidebar"
        class={
          sideBar
            ? "fixed top-0 left-[100%] right-0 z-40 w-64 h-screen pt-10 transition-transform -translate-x-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
            : "hidden"
        }
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul class="space-y-2">
            <li>
              <div
                class="flex  py-2 pl-5 pr-4 text-base  md:border-0 md:p-0"
                onClick={() => setSideBar(false)}
              >
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="block text-base md:border-0 md:p-0 pl-2">
                  close
                </span>
              </div>
            </li>
            {NavigationLink.map((item, index) => {
              return (
                <li key="index">
                  <a
                    href={item.Path}
                    class="block  py-2 pl-5 pr-4 text-base  md:border-0 md:p-0"
                  >
                    {item.Title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container mx-auto md:px-2  xl:px-[120px] lg:px-[20px] px-[20px] flex flex-wrap items-center justify-between">
          <a class="flex items-center " href="/">
            <img
              src="./assetes/logo.png"
              class="md:w-[200px] mr-3 w-[150px]"
              alt="Flowbite Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setSideBar(true)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex items-center flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/upgrade-card"
                  class="block  py-2 pl-5 pr-4 text-base  md:border-0 md:p-0"
                >
                  Incedo Advantage
                </a>
              </li>
              <li>
                <a
                  href="/onecard"
                  class="block py-2 pl-5 pr-4 text-base  md:border-0 md:p-0 "
                >
                  Credit Cards
                </a>
                
              </li>
              <li>
                <a
                  href="/premier-savings"
                  class="block py-2 pl-5 pr-4 text-base md:border-0 md:p-0 "
                >
                  iPayLatr
                </a>
              </li>
              <li>
                <a
                  href="/rewards-checking"
                  class="block py-2 pl-5 pr-4 text-base md:border-0 md:p-0 "
                >
                  Rewards Wallet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-5 pr-4 text-base md:border-0 md:p-0 "
                >
                  Help
                </a>
              </li>
              <li>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                   <a
                  href="/apply-now"
                  class="block py-2 pl-5 pr-4 text-base md:border-0 md:p-0 "
                >
                  Apply Now
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
