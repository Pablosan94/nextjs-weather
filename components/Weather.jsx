import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt=""
            height="100"
            width="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>

      <div className="bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)} KM/H
            </p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
