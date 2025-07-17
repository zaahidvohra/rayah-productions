import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurClientsSection({ clientsData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-text-primary">{clientsData.title}</h2>
          <p className="text-lg text-text-body mt-2">{clientsData.subtitle}</p>
        </div>

        <Slider {...settings}>
          {clientsData.clients.map((client, index) => (
            <div key={index} className="px-4">
              <div className="h-40 flex items-center justify-center bg-white rounded-xl shadow-md border border-primary/10 hover:shadow-xl transition-all duration-300">
                {/* Replace with <img src={client.logo} /> if logos are image URLs */}
                <div className="text-5xl">{client.logo}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
