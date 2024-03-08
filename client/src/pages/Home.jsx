import React from "react";
import home from "../assets/driving-school/home.png";

export default function Home() {
  return (
    <div>
      <div
        className={`cover h-[calc(100vh-52px)]`}
        style={{
          backgroundImage: `url(${home})`,
          objectFit: "cover",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="py-8 px-12 backdrop-blur-sm h-[calc(100vh-52px)] w-fit">
          <h1 className="text-5xl font-bold text-center">
            Drive Like an expert
            <br />
            with
            <br />
            <span className="text-red-500">Ahen </span>
            <span className="text-blue-700">Driving </span>
            <span className="text-teal-500">School </span>
          </h1>
          <p>This is a driving school website</p>
        </div>
      </div>
    </div>
  );
}
