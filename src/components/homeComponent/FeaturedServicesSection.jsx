import React from "react";

export default function FeaturedServicesSection({ data, filters, activeFilter, setActiveFilter }) {
  if (!data) return null;

  const filteredServices = data.services?.filter(
    (service) => activeFilter === "All" || service.category === activeFilter
  ) || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-text-primary">
            {data.title.split(" ").map((word, i) =>
              i === data.title.split(" ").length - 1 ? (
                <span key={i} className="text-primary">{` ${word}`}</span>
              ) : (
                ` ${word}`
              )
            )}
          </h2>
          <p className="text-xl text-text-body max-w-2xl mx-auto">{data.subtitle}</p>
        </div>

        {/* Filters */}
        {filters?.length > 0 && (
          <div className="flex justify-center mb-12">
            <div className="flex bg-secondary rounded-lg p-1 shadow-inner">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-primary text-white"
                      : "text-text-body hover:bg-accent-light"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Services List */}
        <div className="space-y-12">
          {filteredServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  isEven ? "md:flex-row-reverse" : ""
                } items-center gap-6 md:gap-10 p-4 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-primary/10 bg-white`}
              >
                {/* Icon/Image */}
                <div className="text-5xl text-primary md:w-1/3 flex justify-center">
                  {service.icon}
                </div>

                {/* Details */}
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-heading font-bold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  {service.tagline && (
                    <p className="text-accent-dark font-semibold mb-2 text-sm md:text-base">
                      {service.tagline}
                    </p>
                  )}
                  <p className="text-text-body text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {service.features?.length > 0 && (
                    <ul className="mt-2 space-y-1 text-sm text-text-body">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent-dark rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
