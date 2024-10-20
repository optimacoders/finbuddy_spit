"use client"
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-left p-[3%]">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          <Typewriter
            words={['Empowering Your Financial Journey']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-lg text-gray-700 opacity-0 delay-reveal w-[40%]">
          At Finbuddy, we are committed to providing personalized financial solutions that help individuals and families achieve their financial goals. From smart investments to effective budget planning, our expert advisors are here to guide you every step of the way. Take control of your future with trusted advice tailored to your needs.
        </p>
      </div>
    </div>
  );
};

export default Home;
