import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin color="#0077b5" size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/akshay-poojary-633510207/",
      style: "rounded-tr-md ",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub color="black" size={30} />
        </>
      ),
      href: "https://github.com/Akshayoojary",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail color="red" size={30}  />
        </>
      ),
      href: 'mailto:akshaypoojary137@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill color="#145DA0" size={30} />
        </>
      ),
      href: "https://drive.google.com/uc?export=download&id=1zg2KiEvOlIglJVt0Mw5j4uzIUWmBbv6z",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-slate-400" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
