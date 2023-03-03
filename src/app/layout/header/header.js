/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container mx-auto md:px-2  xl:px-[120px] lg:px-[20px] px-[20px] flex flex-wrap items-center justify-between">
          <a class="flex items-center ">
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
                  href="#"
                  class="block  py-2 pl-5 pr-4 text-base  md:border-0 md:p-0"
                >
                  Incedo Advantage
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="block py-2 pl-5 pr-4 text-base  md:border-0 md:p-0 "
                >
                  Credit Cards
                </a>
                
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-5 pr-4 text-base md:border-0 md:p-0 "
                >
                  iPayLatr
                </a>
              </li>
              <li>
                <a
                  href="#"
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
                  Apply Now
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
