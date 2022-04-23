import React from "react";
import pasta from "../../assets/pasta.png";

const Main = () => {
  return (
    <div className="pt-12 md:pt-40 pb-8 md:flex md:flex-row-reverse md:justify-around lg:px-12">
      {/* img */}
      <div className="flex justify-center md:flex-1 ">
        <img src={pasta} alt="pasta" className="select-none" />
      </div>
      {/* text */}
      <div className="px-2 text-center md:text-left md:px-6 md:flex-1">
        <h6 className="text-red-800 font-bold">NOW TAKING ONLINE ORDERS</h6>
        <h1 className="text-8xl font-bold font-permanent-marker text-red-600 pt-2 pb-5">
          Pasta
        </h1>
        <p className="font-semibold text-slate-700 md:w-full lg:w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse fuga
          suscipit, harum autem pariatur expedita architecto iusto libero vel
          recusandae cum tempore minima, unde aut ratione. Pariatur,
          necessitatibus sunt!
        </p>
        {/* buttons */}
        <div className="flex justify-center md:justify-start py-10 ">
          <div className="bg-red-600 text-white font-bold text-xl pl-4 pr-8 py-2 rounded-md clipped-r ">
            Add To Cart
          </div>
          <div className=" bg-gray-600 text-white font-bold text-xl pl-8 pr-4 py-2 rounded-md clipped-l">
            Book a Table
          </div>
        </div>
      </div>
      {/* dots */}
      <div>
          {/* abcd */}
        {/* <IconContext.Provider > */}
        {/* <BsDot className="text-red-200"  /> */}
        {/* <BsDot  className="text-red-200" />
          <BsDot  className="text-red-200" />
          <BsDot  className="text-red-800" />
          <BsDot  className="text-red-200" />
          <BsDot  className="text-red-200" /> */}
        {/* </IconContext.Provider> */}
      </div>
    </div>
  );
};

export default Main;
