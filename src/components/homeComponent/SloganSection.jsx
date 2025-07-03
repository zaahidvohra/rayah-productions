import React from "react";

export default function SloganSection({ data }) {
  const displayData = data || {
    title: "Elevate Your Digital Presence",
    subtitle:
      "We create powerful digital strategies that connect your brand with the right audience, driving growth and meaningful engagement in today's competitive landscape.",
  };

  return (
    <section className="bg-background font-body">
      <div className="grid max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12 items-center">
        {/* Left Side Content */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-tight md:text-5xl xl:text-6xl text-text-primary font-heading">
            {displayData.title}
          </h1>
          <p className="max-w-2xl mb-8 text-lg font-light text-text-body">
            {displayData.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-opacity-90 focus:ring-4 focus:ring-accent.dark"
            >
              Get Started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-text-primary bg-accent-light border border-primary rounded-lg hover:bg-accent-dark focus:ring-4 focus:ring-accent.light"
            >
              Speak to Sales
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
            className="rounded-xl shadow-xl dark:shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
