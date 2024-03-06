import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-neutral-800 shadow-sm shadow-zinc-700">
      <div className="flex items-center p-3 max-w-6xl justify-between mx-auto">
        <Link to={"/"}>
          <h1 className="text-sm font-bold sm:text-xl">
            <span className="text-slate-300">Ahen</span>
          </h1>
        </Link>

        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="text-zinc-300 hidden sm:inline hover:text-orange-500">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="text-zinc-300 hidden sm:inline hover:text-orange-500">
              About
            </li>
          </Link>
          <Link to={"/drivingSchools"}>
            <li className="text-zinc-300 hidden sm:inline hover:text-orange-500">
              Driving Schools
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className="text-zinc-300 hidden sm:inline hover:text-orange-500">
              Contact Us
            </li>
          </Link>
          <Link to={"/sign-up"}>
            <li className="text-zinc-300 hidden sm:inline hover:text-orange-500">
              Sign Up
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
