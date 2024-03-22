"use client";

import { useState } from "react";
import Link from "next/link";

const SpecialMenuBlock = ({ pages = [] }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className={`relative px-2 sm:px-5 md:px-10 py-32 overflow-hidden`}>
      {pages.map((page, index) => (
        <article key={index}>
          <div
            className={`absolute right-0 top-0 ${
              isHovering
                ? "translate-x-[15%] opacity-80"
                : "translate-x-0 opacity-0"
            } min-h-full transition-all duration-700 ease-in-out pointer-events-none`}
          >
            <img src={page.image} className={`h-full object-cover`} />
          </div>
          <Link
            href={page.link}
            className={`group cursor-pointer inline-flex items-center z-10`}
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <section
              className={`pr-1 md:pr-5 group-hover:pr-2 flex justify-end items-center gap-1 sm:gap-5 group-hover:gap-0 w-8 sm:w-24 h-full transition-all duration-700 ease-in-out`}
            >
              <h4
                className={`font-sans text-sm sm:text-lg text-neutral-400/65 group-hover:text-primary font-light transition-all duration-700 ease-in-out`}
              >
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </h4>
              <div
                className={`w-3 md:w-8 group-hover:w-0 h-[0.5px] origin-center bg-neutral-400/65 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out`}
              ></div>
            </section>
            <section className={`relative ml-1`}>
              <h3
                className={`font-heading text-xl sm:text-3xl md:text-5xl text-neutral-800 uppercase tracking-wide whitespace-nowrap`}
                style={{
                  WebkitTextStroke: "0.75px #a3a3a3",
                  opacity: 0.65,
                }}
              >
                {page.title}
              </h3>
              <div
                className={`absolute left-0 top-0 w-full sm:w-0 group-hover:w-full overflow-hidden transition-all duration-700 ease-in-out`}
              >
                <h3
                  className={`font-heading text-xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wide whitespace-nowrap`}
                >
                  {page.title}
                </h3>
              </div>
            </section>
          </Link>
        </article>
      ))}
    </section>
  );
};

export default SpecialMenuBlock;
