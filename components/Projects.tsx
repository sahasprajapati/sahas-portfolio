import userData from "@constants/data";
import { FC } from "react";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 p-8">
      {/* Grid starts here */}
      <div className="">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard: FC<{
  title: string;
  link: string;
  imgUrl: string;
  number: string;
}> = ({ title, link, imgUrl, number }) => {
  return (
    <a
      href={link}
      className="w-full block bg-transparent shadow-xl hover:shadow-2xl   "
    >
      <div className="relative overflow-hidden">
        <div className=" object-cover">
          <Image
            src={imgUrl}
            height={250}
            width={400}
            objectFit="cover"
            layout="responsive"
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full  "
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-200 dark:text-white font-bold text-xl bg-indigo-500  rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-900   p-2 bg-opacity-50 bg-gray-100 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
