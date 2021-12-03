import userData from "@constants/data";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import InfiniteScrollMarquee from "./InfiniteScrollMarquee";

export default function AboutMe() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 p-8">
      <div className="  max-w-6xl  space-y-6 mx-auto ">
        {/* <div>
        <h1 className=" text-5xl md:text-9xl font-bold pt-20 pb-10 text-center md:text-left">
          About Me
        </h1>
        <h3 className="text-2xl">
          {
            "I'm a software developer. Currently working on a Video Conferencing App."
          }
        </h3>
      </div> */}
        <div className="  grid grid-cols-12 items-center gap-4 pt-20">
          <div className="col-span-12 md:col-span-5 p-8  ">
            <Image
              src="/avatar.jpg"
              alt="Sahas Prajapati"
              className="filter rounded-2xl brightness-65 "
              height={100}
              width={100}
              layout="responsive"
            />
          </div>

          <div className=" text-gray-600 dark:text-gray-200 space-y-8 col-span-12 md:col-span-7 p-8">
            <h2 className="text-4xl font-bold text-indigo-700 dark:text-white mb-10">
              {" I'm a developer. Currently working on a   "}
              <a
                href={userData.projects[userData.projects.length - 1].githubUrl}
                className="font-mono"
              >
                {userData.projects[userData.projects.length - 1].title}
              </a>
            </h2>
            <span className="text-indigo-700 dark:text-indigo-300">
              <RoughNotationGroup show={true}>
                <RoughNotation type="box" iterations={4}>
                  <div className="text-lg text-gray-600 dark:text-gray-200 space-y-8 m-8 ">
                    <p className="text-justify">
                      I am currently studying my last semester of Computer
                      Engineering at{" "}
                      <span className="  text-indigo-200 dark:text-indigo-700">
                        <RoughNotation type="highlight" iterations={4}>
                          <span className="text-indigo-700 dark:text-gray-200 ">
                            Khwopa College of Engineering,
                          </span>
                        </RoughNotation>{" "}
                      </span>
                      Bhaktapur. I have built and deployed various web app
                      projects. As a computer engineering student, I have
                      completed various projects in a timely manner.
                    </p>
                    <p className="text-justify">
                      I have knowledge about various languages such as C,C++,
                      Javascript, Python, Php. I am versatile and a quick
                      learner. I am particularly fluent using Javascript
                      frameworks such as
                      <span className="  text-indigo-200 dark:text-indigo-700">
                        <RoughNotation type="highlight" iterations={4}>
                          <span className="text-indigo-700 dark:text-gray-200 ">
                            Reactjs
                          </span>
                        </RoughNotation>{" "}
                      </span>{" "}
                      and{" "}
                      <span className="  text-indigo-200 dark:text-indigo-700">
                        <RoughNotation type="highlight" iterations={4}>
                          <span className="text-indigo-700 dark:text-gray-200 ">
                            Nextjs
                          </span>
                        </RoughNotation>{" "}
                      </span>
                      . I have some basic knowledge regarding machine learning
                      tools such as tensorflow, scikit-learn.
                    </p>
                  </div>
                </RoughNotation>
              </RoughNotationGroup>
            </span>
          </div>

          {/* <div className="space-y-5  col-span-3 md:col-span-1">
          <h5 className="text-4xl">Contact</h5>
          <p>
            For any sort of help/enquiry shoot a mail and I will get back to
            you.
          </p>
          <h5 className="text-4xl">Job Opportunities</h5>
          <p>
            If see me as a good fit, check my{" "}
            <a
              className="text-indigo-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-indigo-800 dark:hover:text-indigo-200  underline"
              href="https://drive.google.com/file/d/1xTY83upB0AeXWUFm4YXjmMa56_zgVEtt/view?usp=sharing"
            >
              CV
            </a>{" "}
            and I would love to work for you.
          </p>
          <h5 className="text-3xl">Social Link</h5>
          <ul>
            <li>
              <a
                className="text-indigo-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-indigo-800 dark:hover:text-indigo-200"
                href={userData.socialLinks.facebook}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="text-indigo-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-indigo-800 dark:hover:text-indigo-200"
                href={userData.socialLinks.instagram}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="text-indigo-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-indigo-800 dark:hover:text-indigo-200"
                href={userData.socialLinks.linkedin}
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                className="text-indigo-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-indigo-800 dark:hover:text-indigo-200"
                href={userData.socialLinks.github}
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className=" space-y-5   col-span-3 md:col-span-2 ">
          <p>
            I am currently studying my last semester of Computer Engineering at
            Khwopa College of Engineering, Bhaktapur. I have built and deployed
            various web app projects. As a computer engineering student, I have
            completed various projects assigned in a timely manner.
          </p>
          <p>
            I have knowledge about various languages such as C,C++, Javascript,
            Python, Php. I am versatile and a quick learner. I am particularly
            fluent using Javascript frameworks such as React and Nextjs. I have
            some basic knowledge regarding machine learning tools such as
            tensorflow, scikit-learn.
          </p>
          <h2 className="text-4xl">Tech Stack</h2>
          <div className="w-full m-auto  bg-indigo-100 dark:bg-gray-700 py-8">
            <InfiniteScrollMarquee
              speed={true}
              names={userData.skills.framework}
              className="text-4xl"
            />
            <InfiniteScrollMarquee
              speed={false}
              names={userData.skills.language}
              className="text-5xl"
            />
          </div>
        </div> */}
        </div>
        <div className=" py-8  rounded-3xl     my-10">
          <InfiniteScrollMarquee
            speed={true}
            names={userData.skills.framework}
            className="text-4xl"
          />
          <InfiniteScrollMarquee
            speed={false}
            names={userData.skills.language}
            className="text-5xl"
          />
        </div>
      </div>
    </section>
  );
}
