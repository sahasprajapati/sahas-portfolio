import { FC } from "react";
import styles from "./scroll.module.css";

const InfiniteScrollMarquee: FC<{
  names: string[];
  speed: boolean;
  className?: string;
}> = ({ names, speed, className }) => {
  return (
    // <div className={`h-10 ${className}  overflow-hidden relative`}>
    //   <div className="align-middle mx-auto">
    //     <div className={`${styles.marqueeContainer}`}>
    //       <div
    //         className={` flex  ${
    //           speed ? styles.marqueeInitialSpeed : styles.marqueeInitialSlow
    //         }`}
    //       >
    //         {names.map((name, key) => (
    //           <span key={key} className={styles.textDecor}>
    //             {name}
    //           </span>
    //         ))}
    //       </div>
    //     </div>
    //     <div className={styles.marqueeContainer}>
    //       <div
    //         className={` flex  ${
    //           speed ? styles.marqueeLastSpeed : styles.marqueeLastSlow
    //         }`}
    //       >
    //         {names.map((name, key) => (
    //           <span key={key} className={styles.textDecor}>
    //             {name}
    //           </span>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className={`whitespace-nowrap overflow-hidden ${className}`}>
      <div
        className={`flex flex-row w-full whitespace-nowrap overflow-hidden  `}
      >
        <div
          className={`   ${speed ? styles.marqueeFast : styles.marqueeSlow}`}
        >
          {names.map((name, key) => (
            <span
              key={key}
              className=" font-bold  text-gray-600 hover:text-indigo-700 dark:text-gray-400 dark:hover:text-white"
            >
              {name}
            </span>
          ))}
        </div>

        <div className={`  ${speed ? styles.marqueeFast : styles.marqueeSlow}`}>
          {names.map((name, key) => (
            <span
              key={key}
              className=" font-bold  text-gray-600 hover:text-indigo-700 dark:text-gray-400 dark:hover:text-white"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollMarquee;
