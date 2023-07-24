import React from 'react'
import HoriLine from '../../ReusableComponents/HoriLine';
import Subabout1 from './Subabout1';
import Subabout2 from './Subabout2';

const About = () => {
  return (
    <div className="bg-[#090b2b]">
      <div className="flex flex-col flex-wrap justify-center items-center p-4">
        <p className="font-roboto font-bold text-[#fff] text-4xl p-4 my-2">
          About Us
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="flex flex-col flex-wrap justify-center items-center">
            <div
              style={{
                background: "linear-gradient(180deg, #FFE77A 0%, #FC9866 100%)",
              }}
              className="flex flex-col flex-wrap justify-center items-center min-[320px]:w-[280px] sm:w-[500px] md:w-[700px] h-auto rounded-[30px] p-8"
            >
              <p className="font-roboto font-bold text-[#090b2b] text-justify text-lg sm:text-xl">
                Welcome to Samarth Ikkalaki's Bake-n-Joy (Online Cake Shop),
                your ultimate destination for all things sweet and delicious! We
                are a passionate team of skilled bakers and confectionery
                artists dedicated to creating mouthwatering cakes that make your
                special moments truly memorable.
              </p>
            </div>
            <p className="font-roboto font-bold text-[#FEE77A] text-4xl p-6 sm:p-8">
              Our Story
            </p>
            <div
              style={{
                background: "linear-gradient(90deg, #53FFB8 0%, #ACE7FF 100%)",
              }}
              className="flex flex-col flex-wrap justify-center items-center min-[320px]:w-[280px] sm:w-[500px] md:w-[700px] h-auto rounded-[30px] p-8"
            >
              <p className="font-roboto font-bold text-[#090b2b] text-justify text-lg sm:text-xl ">
                With a heart full of dreams and a determination to turn our
                passion into a business, we started a small cake venture from
                our home kitchen. As our delectable creations began to captivate
                taste buds and spread joy, our business grew, and we opened a
                charming bakery. With each cake we baked, our love and talent
                continued to flourish, making our business a beloved destination
                for sweet indulgence and celebrations.
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col flex-wrap justify-center items-center w-[360px] h-auto rounded-[30px] ml-2 mt-2">
            <img
              src={Birthday}
              alt="Birthday Cake"
              className="w-[240px] h-[240px] rounded-[30px] mt-2 mb-4"
            />
            <img
              src={Cake}
              alt="Cake"
              className="w-[240px] h-[240px] rounded-[30px] mt-2 mb-4"
            />
            <img
              src={Anniversary}
              alt="Anniversary Cake"
              className="w-[240px] h-[240px] rounded-[30px] mt-2 mb-4"
            />
          </div> */}
        </div>
        <HoriLine />
        {/* <Subabout1 /> */}
        <Subabout2 />
      </div>
    </div>
  );
}

export default About
