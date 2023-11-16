
import React from "react";

export default function About() {
  return(
    <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-`1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-`16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hi!  I'm Walter.
                    <br className="hidden lg:inline-block" />
                </h1>
                <p className="title-font sm:text-2xl text-1xl mb-4 font-medium text-white">
                  Using creative animation to deliver visually appealing sotries and videos
                </p>

                <p className="mb-8 leading-relaxed">
                    I am a 2D animator who is passionate about creating 
                    visually appealing stories that capture my viewers' imagination and inspire them positively. 
                    I always look forward to contribute my rigging and animation skills to various projects.
                    <br/>
                    If you have a project you need to be brought to life, feel free to <a id="contact-me" href="#contact"> contact me.</a>
                </p>
                {/* <div className="flex justify-center"> 
                    <a
                      href="#contact"
                      className=" box inline-flex py-2 px-6 border-0 hover:bg-gray-700 hover:text-white rounded text-lg"
                      Work With Me
                    >
                    </a>
                    <a
                      href="#projects"
                      className="box ml-4 inline-flex border-0 py-2 px-6 hover:bg-gray-700 hover:text-white rounded text-lg"
                      See My Past Work
                    >
                    </a>
                </div> */}
            </div>

            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="first-img object-center rounded-full"
                  alt="Walt"
                  src="./about.gif"
                />
            </div>
        </div>
    </section>
  )
}