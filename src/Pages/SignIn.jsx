import React, { useRef, useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { IoReloadCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Planet1 from "../Assets/planet1.svg";
import Planet2 from "../Assets/planet2.svg";
import Planet3 from "../Assets/planet3.svg";
import { AlertBar } from "../Components/AlertBar";
import { signIn } from "../Utils/auth";
function SignInPage() {
  const navigate = useNavigate();
  const [emailRef, passwordRef] = [useRef(), useRef()];
  const [isLoading, setIsLoading] = useState(false);
  const [alertData, setAlertData] = useState({
    isVisible: false,
    isDanger: true,
    massage: "",
  });

  //handling signin logic
  async function handleSignin() {
    setIsLoading(true);
    if (!emailRef.current.value || !passwordRef.current.value) {
      setAlertData({
        isVisible: true,
        isDanger: true,
        massage: "Please fill all fields",
      });
      setIsLoading(false);
      return;
    }
    signIn(emailRef.current.value, passwordRef.current.value)
      .then((resp) => {
        localStorage.setItem("auth", JSON.stringify(resp.data));

        setAlertData({
          isVisible: true,
          isDanger: false,
          massage: "SignIn successfull!",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setAlertData({
          isVisible: true,
          isDanger: true,
          massage: err.response?.data?.message || "Something went wrong.",
        });
        setIsLoading(false);
      });
  }
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center p-4 
     md:p-16 xl:px-72 "
    >
      <AlertBar data={alertData} setData={setAlertData} />
      <div className=" z-10 grid h-fit w-full grid-cols-12 rounded-4xl bg-accent shadow-xl lg:h-full">
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
        <div className="col-span-12 flex w-full flex-col items-center justify-center p-3 md:p-8 lg:col-span-5  ">
          <FaUserShield className="text-8xl" />
          <h1 className="text-4xl font-bold">SignIn</h1>
          <div className="flex w-full flex-col items-center space-y-6  py-6">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="form-input max-w-full rounded-xl border-2 border-white  bg-transparent text-2xl placeholder-white focus:border-cta"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="form-input max-w-full rounded-xl border-2 border-white  bg-transparent text-2xl placeholder-white focus:border-cta"
            />
            <p className="font-light">All fields are mandatory*</p>
            <button
              onClick={handleSignin}
              className="rounded-2xl bg-cta px-8 py-2 text-2xl font-semibold shadow-sm shadow-cta duration-150 hover:shadow-lg hover:shadow-cta focus:shadow-lg focus:shadow-cta"
            >
              {isLoading ? (
                <IoReloadCircle className="animate-spin text-3xl" />
              ) : (
                "SignIn"
              )}
            </button>
            <p
              onClick={() => navigate("/signup")}
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

export default SignInPage;
