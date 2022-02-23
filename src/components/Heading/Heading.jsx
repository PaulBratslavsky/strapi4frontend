import React from "react";

export default function Heading({ heading, subheading }) {
  
  if (!heading) return null;
  const headingParts = heading.split("/");

  return (
    <div className="p-6 md:text-center lg:text-left">
      <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
        <span className="md:block">{headingParts[0]}</span>{" "}
        <span className="text-indigo-400 md:block">{headingParts[1]}</span>
      </h1>
      {subheading && (
        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          {subheading}
        </p>
      )}
    </div>
  );
}
