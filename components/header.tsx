import React from "react";
import { siteMetadata } from "../config/siteMetadata";

function Header() {
  return (
    <header className="flex flex-wrap items-center p-4 md:py-8">
      <div className="md:w-3/12 md:ml-16">
        <img
          className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border-2 border-pink-600 p-1"
          src={siteMetadata.about_me_picture}
          alt="cover image"
        />
      </div>

      <div className="w-8/12 md:w-7/12 ml-4">
        <div className="md:flex md:flex-wrap md:items-center mb-4">
          <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
            {siteMetadata.display_name}
          </h2>
          <span className="inline-block fas fa-certificate fa-lg text-blue-500 relative mr-6  text-xl transform -translate-y-2">
            <i className="fas fa-check text-white text-xs absolute inset-x-0 ml-1 mt-px"></i>
          </span>
          <a
            href={siteMetadata.social_twitter}
            className="bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded block text-center sm:inline-block"
            target="_blank"
            rel="noreferrer"
          >
            Follow
          </a>
        </div>

        {/* <ul className="hidden md:flex space-x-8 mb-4">
          <li>
            <span className="font-semibold">6</span>
            posts
          </li>

          <li>
            <span className="font-semibold">50.5k</span>
            followers
          </li>
          <li>
            <span className="font-semibold">10</span>
            following
          </li>
        </ul> */}

        <div className="hidden md:block">
          {/* <h1 className="font-semibold">{siteMetadata.about_me_name}</h1> */}
          <p>{siteMetadata.about_me_bio}</p>
          <span>
            <strong>
              <a
                href={siteMetadata.about_me_link}
                target="_blank"
                rel="noreferrer"
              >
                {siteMetadata.about_me_link}
              </a>
            </strong>
          </span>
        </div>
      </div>

      <div className="md:hidden text-sm my-2">
        <h1 className="font-semibold">{siteMetadata.about_me_name}</h1>
        <p>{siteMetadata.about_me_bio}</p>
        <span>
          <strong>
            <a
              href={siteMetadata.about_me_link}
              target="_blank"
              rel="noreferrer"
            >
              {siteMetadata.about_me_link}
            </a>
          </strong>
        </span>
      </div>
    </header>
  );
}

export default Header;
