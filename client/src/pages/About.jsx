import React from "react";
import d1 from "../assets/driving-school/d-1.png";
import d7 from "../assets/driving-school/d-7.png";

export default function About() {
  return (
    <div className="text-white md:max-w-6xl mx-auto px-8">
      <div className="">
        <h1 className="text-4xl p-3 my-9 text-center font-bold text-sky-500 max-w-6xl mx-auto">
          <span className="font-display">About Us</span>
        </h1>
        <div>
          <main className="md:grid md:grid-cols-2 flex flex-col-reverse my-8 items-center gap-6">
            <section className="p-8 rounded-lg bg-yellow-400">
              <h2 className="text-2xl text-rose-600 font-semibold mb-3 md:text-start text-center">
                Who we are?
              </h2>
              <p className="text-slate-800">
                We are a driving school that has been providing quality driving
                education since 2020. We have a team of experienced and
                certified instructors who are passionate about teaching you how
                to drive safely and confidently. We offer a variety of courses
                for different levels and needs, from beginners to advanced, from
                manual to automatic, from theory to practice. We also have
                modern and well-maintained vehicles, equipped with dual controls
                and GPS, to ensure your comfort and safety.
              </p>
            </section>
            <img
              src={d1}
              alt="driving image"
              className="w-[300px] h-[300px] flex place-self-center rounded-3xl"
            />
          </main>
          <main className="md:grid md:grid-cols-2 items-center mt-8 mb-12 flex flex-col gap-6">
            <img
              src={d7}
              alt=""
              className="w-[300px] h-[300px] flex place-self-center rounded-3xl"
            />
            <section className="py-4 ps-9 pe-7 rounded-lg bg-green-400">
              <h2 className="text-2xl text-rose-600 font-semibold mb-3 md:text-start text-center">
                Why choose us?
              </h2>
              <ul className="text-slate-800 list-disc">
                <li>
                  We have a high success rate of students passing their driving
                  tests on the first attempt.
                </li>
                <li>
                  We have a friendly and supportive learning environment, where
                  you can feel comfortable and confident.
                </li>
                <li>
                  We have competitive and affordable prices, with no hidden fees
                  or extra charges.
                </li>
                <li>
                  We have a customer satisfaction guarantee, where you can get a
                  full refund if you are not happy with our service.
                </li>
                <li>
                  We have a lot of positive reviews and testimonials from our
                  previous and current students, who recommend us to their
                  friends and family.
                </li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
