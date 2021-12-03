/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment, ReactNode } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-cols-2 justify-center  items-center overflow-hidden bg-gray-50 dark:bg-gray-800 py-8">
      <div className="m-16 col-span-2 md:col-span-1 space-y-8 gap-4 text-center md:text-left lg:p-20">
        <span className="">
          <h1 className="text-indigo-700 dark:text-gray-200 text-7xl font-bold">
            {"Hi. I'm Sahas."}
          </h1>
          <h2 className="text-indigo-500 dark:text-gray-200 text-4xl font-extralight font-mono">
            A software engineer.
          </h2>
        </span>
        <p className="text-xl">
          I am also a {}
          <span className="  text-indigo-200 dark:text-indigo-700">
            <RoughNotation type="highlight" iterations={4} show={true}>
              <span className="text-indigo-700 dark:text-gray-200 ">
                full-stack developer.
              </span>
            </RoughNotation>{" "}
          </span>
        </p>
        {/* <RoughNotationGroup show={true}>
          <div className="flex  flex-col  space-y-4 lg:space-y-8 ">
            <RainbowHighlight className=" w-auto text-green-200 dark:text-green-700">
              <span className="text-indigo-700 dark:text-gray-200  p-8">
                engineer. {}
              </span>
            </RainbowHighlight>
            <RainbowHighlight className="w-auto text-blue-200 dark:text-blue-700 ">
              <span className="text-indigo-700 dark:text-gray-200  p-8 ">
                Learner. {}
              </span>
            </RainbowHighlight>
            <RainbowHighlight className="w-auto text-yellow-200 dark:text-yellow-700 ">
              <span className="text-indigo-700 dark:text-gray-200 p-8">
                Student. {}
              </span>
            </RainbowHighlight>
          </div>
        </RoughNotationGroup> */}
      </div>
      {/* Image Container */}

      <div className="  col-span-2 md:col-span-1 text-center  ">
        <div className="w-1/2 h-1/2 relative m-auto my-auto shadow-2xl">
          <Image
            className=" "
            src="/hero_image.gif"
            height={300}
            width={300}
            layout="responsive"
            objectFit="contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
