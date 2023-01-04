import React from "react";


const Contact = () => {
  return (
    
    <div name="contact"className="w-full bg-gradient-to-b from to-black to bg-gray-800 p-4">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Contact
          </p>
          <p className="py-6 text-white">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/c9575022-1d98-43a5-ab49-eb39ef20c3df"
            method="post"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="Name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="Email"
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="Message"
              placeholder="Enter your Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <button className="text-white bg-gradient-to-b from bg-cyan-600 to to-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let s Talk
            </button>
          </form>
        </div>
      </div>
      </div>
  );
};

export default Contact;
