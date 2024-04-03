import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10
       w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2
          className="font-palanquin text-4xl capitalize lg:max-w-lg
        fond-bold"
        >
          We Provide You
          <span className="text-coral-red "> Super</span>
          <span className="text-coral-red "> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          ea earum a nulla cupiditate accusamus labore facere commodi similique
          eaque sequi corrupti deleniti beatae? Ad culpa dicta corporis saepe?
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, rem
          aut! Odit.
        </p>
        <div className="mt-11">
          <Button label={"View Details"} />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
