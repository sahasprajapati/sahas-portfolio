import userData from "@constants/data";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";

const navigation = [
  { name: "Home", href: "/home" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  // { name: "Experience", href: "/experience" },
  // { name: "Contact", href: "/contact" },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-gray-50 dark:bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <h1 className="text-xl text-indigo-800 font-bold   dark:text-indigo-400">
                    Sahas Prajapati
                  </h1>
                  <h2 className="text-sm text-gray-800 font-mono dark:text-gray-200">
                    Software Engineer
                  </h2>
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-5">
                    {navigation.map((item) => {
                      const current = router.asPath.includes(
                        item.name.toLowerCase()
                      );
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            current
                              ? " text-indigo-800   font-bold dark:text-white"
                              : // ? "bg-indigo-200 text-indigo-800 dark:bg-gray-900 dark:text-white"
                                // : "text-gray-600 hover:bg-indigo-100 hover:text-black  dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                                "text-gray-600 hover:bg-indigo-100 hover:text-black  dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={current ? "page" : undefined}
                        >
                          <RoughNotation type="underline" show={current}>
                            {item.name}
                          </RoughNotation>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className=" hidden md:flex space-x-2 inset-y-0 right-0  items-center space-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
                <a
                  href={userData.socialLinks.github}
                  className="text-base font-normal text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                <a
                  href={userData.socialLinks.facebook}
                  className="text-base font-normal text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </a>

                <a
                  href={userData.socialLinks.instagram}
                  className="text-base font-normal text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={userData.socialLinks.linkedin}
                  className="text-base font-normal text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-linkedin h-5 w-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
              <DarkModeToggle />
            </div>
          </div>

          {/* Disclose Panel for mobile hamburger menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const current = router.asPath.includes(item.name.toLowerCase());
                return (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      current
                        ? " text-indigo-800   font-bold dark:text-white"
                        : // ? "bg-indigo-200 text-indigo-800 dark:bg-gray-900 dark:text-white"
                          // : "text-gray-600 hover:bg-indigo-100 hover:text-black  dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                          "text-gray-600 hover:bg-indigo-100 hover:text-black  dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={current ? "page" : undefined}
                  >
                    <RoughNotation type="underline" show={current}>
                      {item.name}
                    </RoughNotation>
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="px-3 py-2 w-10 h-10 p-3 rounded focus:outline-none"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {
        mounted &&
        // <span className="sr-only">View notifications</span>
        //       <BellIcon className="h-6 w-6" aria-hidden="true" />
        theme === "dark" ? (
          <>
            <span className="sr-only">Light Mode</span>
            <MoonIcon
              className="h-6 w-6 fill-current text-gray-300 hover:text-white"
              aria-hidden="true"
            />
          </>
        ) : (
          <>
            <span className="sr-only">Light Mode</span>
            <SunIcon
              className="h-6 w-6 fill-current text-indigo-500 hover:text-indigo-800"
              aria-hidden="true"
            />
          </>
        )

        //   <svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     viewBox="0 0 24 24"
        //     fill="currentColor"
        //     stroke="currentColor"
        //     className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
        //   >
        //     {theme === "dark" ? (
        //       <path
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //         strokeWidth={2}
        //         d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        //       />
        //     ) : (
        //       <path
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //         strokeWidth={2}
        //         d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        //       />
        //     )}
        //   </svg>
        // )}
      }
    </button>
  );
};
