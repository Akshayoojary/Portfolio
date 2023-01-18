import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <h1 className="text-xl mt-20 font-bold text-5xl">
        Hi, I'am Akshay, nice to meet you.Please Take A Look Around.
        </h1>
        <br/>
        <p className="text-xl">
        I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
        </p>
      </div>
    </div>
  );
};

export default About;
