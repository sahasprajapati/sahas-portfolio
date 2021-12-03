import { FC } from "react";
import Image from "next/image";
import styles from "./scroll.module.css";



export default function FavoriteProjects() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 lg:mt-8 pb-40">
      <a href="" className="w-full block col-span-3 shadow-2xl">
        <div className="relative overflow-hidden">
          <Image src="/avatar.jpg" width="100" height="100" />
          <h2 className="absolute top-10 left-10 text-white">sds</h2>
        </div>
      </a>

      <a href="" className="w-full block col-span-3 md:col-span-2 shadow-2xl">
        <div className="relative overflow-hidden">
          <Image src="/avatar.jpg" width="100" height="100" />
          <h2></h2>
        </div>
      </a>
      <a href="" className="w-full block col-span-3 md:col-span-1 shadow-2xl">
        <div className="relative overflow-hidden">
          <Image src="/avatar.jpg" width="100" height="100" />
          <h2></h2>
        </div>
      </a>
    </div>
  );
}
