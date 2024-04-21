import React from "react";
import { footerLogo } from "../../assets/images";
import { footerLinks, socialMedia } from "../../constants";
import { copyrightSign } from "../../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a className="" href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get your shoes ready for the new term at your nearest Nike stores.
            Find your perfect Size In Store. Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="bg-white flex justify-center items-center w-12 h-12 rounded-full transition-all duration-300 ease-in-out hover:bg-coral-red hover:text-white hover:scale-105"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 flex-wrap gap-20 ">
          {footerLinks.map((section) => (
            <div key={section} className="">
              <h4 className="text-white font-montsearrat text-2xl leading-normal font-medium ">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 text-base leading-normal transition-all duration-300 ease-in-out hover:font-medium hover:text-coral-red  hover:scale-105 cursor-pointer "
                  >
                    <a href={link.link} className="">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between  text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-center font-montserrat items-center cursor-pointer ">
          <img
            src={copyrightSign}
            alt="copyright logo"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
