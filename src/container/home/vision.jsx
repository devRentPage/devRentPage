import { Link } from "gatsby";
import * as React from "react";
import useVisionDetail from "../../hooks/container/home/vision/hook.js";

const Vision = () => {
  const { data } = useVisionDetail();
  return (
    <>
    <section className="w-auto h-auto flex flex-col justify-start items-center mt-[100px]">
      {data.map((data, index) => {
        return (
          <div
            className=" md:w-[720px] sm:w-[349px] w-[1000px] h-auto mb-[50px] sm:mb-[100px] flex flex-row md:flex-col sm:flex-col justify-between md:items-center sm:items-center"
            key={index}
          >
            <span className=" text-center w-auto text-[40px] sm:text-[30px] font-semibold mr-[20px] sm:mr-0 md:mr-0">
              {data.visionTitle}
            </span>
            <hr className=" w-[1px] h-auto bg-black" />
            <ul className=" w-[600px] sm:w-[349px] h-[500px] flex flex-col justify-around">
              {data.visionAnswer.map((data, index2) => {
                return (
                  <div className=" relative md:mt-[40px] sm:mt-[50px]">
                    <span className=" text-[60px] sm:text-[50px] font-extrabold absolute opacity-10 -top-[53px] -left-[50px] sm:-top-[45px] sm:-left-[5px]">
                      0{index2 + 1}
                    </span>
                    <li
                      className="text-[25px] sm:text-[20px] font-medium"
                      key={index2}
                    >
                      {data}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
    <div className="mb-20 flex flex-col justify-cente items-center">
      <button className=" bg-black sm:w-32 sm:h-12 md:w-40 md:h-16 lg:w-48 lg:h-16 xl:w-52 xl:h-20 font-bold px-8 rounded-full" style={{color: "white"}}>
        <Link
          className=" xs:text-[10px] sm:text-base md:text-xl lg:text-3xl xl:text-3xl "
          to="/QnA"
        >
          FAQ
        </Link>
      </button>
    </div>
  </>
  );
};

export default Vision;
