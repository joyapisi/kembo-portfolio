import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { Projects } from "../Projects.js";
import Thumbnail from './Thumbnail'; 

export default function ProjectList() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            My Work
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below is a video Reel that showcases all of my previous works. Enjoy!
          </p>
          <br className="hidden lg:inline-block" />
        </div>
                    
        <div className="flex flex-wrap -m-4">
          {Projects.map((video, index) => (
            <div key={index} className="w-full sm:w-1/2 p-4 relative">
              <Thumbnail video={video} />
              {/* Add additional content related to each video if needed */}
              <a href={video.url} className="absolute inset-0 flex items-center justify-center text-white">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
