import React from "react";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { JackInTheBox } from "react-awesome-reveal";

const Portfolio = () => {
  const portfolio=[
    {
      id:1,
      src:reactSmooth
    },
    {
      id:2,
      src:reactWeather
    },
  ]
  return (
    
    <div name="portfolio" className="bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen">
    <JackInTheBox>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
            <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
            <p className="py-6">Check out some of my work right here</p>
            </div>
          
            
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
                {
                  portfolio.map(({id,src})=>(
                    <div className=" shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="" />
                        <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                        
                        </div>
                    </div>
                        
                  ))
    
                  }
                 
                </div>
        </div>
        </JackInTheBox>
    </div>
    
  );
};

export default Portfolio;