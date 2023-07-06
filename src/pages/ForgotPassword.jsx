import React, { useState } from "react";
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
  // const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');

  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section className="bg-[#CFB9FF]">
      <h1 className="text-3xl text-center pt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center max-w-6xl m-auto px-6 py-12">
        <div className="md:w-[67%] md:mb-6 lg:w-[50%] mb-12">
          <img
            src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4727.jpg?w=1480&t=st=1687980300~exp=1687980900~hmac=dcd24ddb4eaf10232e667fe6edb08345f2fa5f0f2b05dbb77071a1e6efa9deaa"
            alt="sign-in"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 lg:-mt-6">
          <form>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Email"
                className="w-full px-4 py-2 text-xl text-gray-600 bg-white rounded-xl border-none transition ease-in-out"
              />
            </div>

            <div className="flex justify-between font-medium whitespace-nowrap text-sm sm:text-base mb-4">
              <p>
                Don't have an Account?
                <Link
                  to="/Sign-Up"
                  className=" text-white ml-1 hover:text-black transition duration-200 ease-in-out"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/Sign-In"
                  className=" text-white hover:text-black transition duration-200 ease-in-out"
                >
                  Sign In instead
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-xl text-white bg-black rounded-xl border-none shadow-lg hover:text-black hover:bg-white transition duration-200 ease-in-out"
            >
              RESET PASSWORD
            </button>
            <div className=" flex items-center my-4 before:border-t before:flex-1 before:border-white after:border-t after:flex-1 after:border-white">
              <p className=" text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
