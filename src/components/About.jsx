import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

const About = () => {
  function calculate_age(dob){
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  return (
    <div className="container max-w-2xl my-10 mx-auto">
      <div className="font-extrabold text-2xl underline md:text-4xl text-blue-600 mb-4">
        Something about the developer <span className="inline-block"> <ArrowRightIcon className="h-6 w-6" /> </span>
      </div>
      <div className="font-light text-sm md:text-lg leading-relaxed text-blue-800">
        Hi there! My name is <span className="underline underline-offset-2"> Bhupinder Bhattarai</span>. I am currently {calculate_age(new Date(1999, 10, 17))} years old and started my coding journey <span className="underline underline-offset-2">{calculate_age(new Date(2017, 10, 1))} years ago</span>. I made this react application just for fun and learning purposes. You can check my <a className="kbd kbd-sm" href="https://github.com/Tech1799" target="_blank">GitHub</a> profile for more fun projects like this.
      </div>
    </div>
  );
};

export { About };
