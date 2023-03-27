import React from "react";
import { FaUserShield } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Planet1 from "../Assets/planet1.svg";
import Planet2 from "../Assets/planet2.svg";
import Planet3 from "../Assets/planet3.svg";
function SignUpPage() {
  const navigate = useNavigate();
  return (
    <div
      className="z-10 flex h-full w-full flex-col items-center justify-center 
     p-4 md:p-16 xl:px-72"
    >
      <div className=" grid h-fit w-full grid-cols-12 rounded-4xl bg-accent shadow-xl lg:h-full">
        <div className="relative col-span-12 hidden h-fit flex-col justify-center  rounded-4xl bg-gradient-to-br from-cta to-[#8C12CC] px-16 py-10 shadow-right md:flex lg:col-span-7 lg:h-full ">
          <h1 className="z-10 text-6xl font-bold lg:text-7xl">
            Explore Your Creativity
          </h1>
          <p className="z-10 my-4 w-fit font-bold lg:w-3/5">
            Discover new skillset, meet passionate developers and become part of
            the most helpful community of creatives in the world.
          </p>
          <img
            className="absolute -top-24 -left-12 hidden h-96 animate-wiggle1 brightness-75 drop-shadow-lg lg:block "
            src={Planet1}
            alt=""
          />
          <img
            className="absolute bottom-10 -right-12 h-60 animate-wiggle2 brightness-75  drop-shadow-xl "
            src={Planet2}
            alt=""
          />
          <img
            className="absolute -bottom-10 -left-12 z-[0] h-40 animate-wiggle3 brightness-75 drop-shadow-xl  lg:h-60 "
            src={Planet3}
            alt=""
          />
        </div>
        <div className="col-span-12 flex w-full flex-col items-center p-3 md:p-8  lg:col-span-5  ">
          <FaUserShield className="text-8xl" />
          <h1 className="text-4xl font-bold">SignUp</h1>
          <div className="flex w-full flex-col items-center space-y-6  py-6">
            <input
              type="text"
              placeholder="First Name"
              className="form-input max-w-full rounded-xl border-2 border-white  bg-transparent text-2xl placeholder-white focus:border-cta"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="form-input max-w-full rounded-xl border-2 border-white  bg-transparent text-2xl placeholder-white focus:border-cta"
            />
            <input
              type="email"
              placeholder="Email"
              className="form-input max-w-full rounded-xl border-2 border-white  bg-transparent text-2xl placeholder-white focus:border-cta"
            />
            <input
              type="password"
              placeholder="Create Password"
              className="form-input max-w-full rounded-xl border-2 border-white  bg-transparent text-2xl placeholder-white focus:border-cta"
            />
            <p className="font-light">All fields are mandatory*</p>
            <button className="rounded-2xl bg-cta px-8 py-2 text-2xl font-semibold shadow-sm shadow-cta duration-150 hover:shadow-lg hover:shadow-cta focus:shadow-lg focus:shadow-cta">
              SignUp
            </button>
            <p
              onClick={() => navigate("/signin")}
              className="cursor-pointer hover:underline"
            >
              Don't have an account?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
