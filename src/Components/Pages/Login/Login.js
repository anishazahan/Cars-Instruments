import React, { useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, googleuser, googleloading, googleError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate= useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if(error ||  googleError ){
    signInError = <p className="text-error font-medium mb-3">{error?.message || googleError?.message}</p>
  }

  if(loading || googleloading){
    return <button className="loading mt-16 font-medium">Loading</button>
  }

  if ( user || googleuser) {
    navigate(from , { replace: true });
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email,data.password);
  };




  return (
    <div className="background mx-auto text-zinc-300 px-16 py-10 my-16">
      <h3 className="mb-4 text-info font-bold text-2xl my-8">
        Please Login Here
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
       
          <input
            type="email"
            className="px-8 pl-3 py-2 rounded-md mb-4 text-gray-900 outline-0 font-medium w-full"
            placeholder="Your Email"
            {...register("email", {
              required: {
                value: true,
                message: "Email must be Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Enter Valid Email",
              },
            })}
          />
          <div className="mb-2">
            {errors.email?.type === "required" && (
              <p className="font-medium text-error mb-3 ">
                {errors.email.message}
              </p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="font-medium text-error mb-3 ">
                {errors.email.message}
              </p>
            )}
          </div>
        

       
          <input
            type="password"
            className="px-8 py-2 pl-3 rounded-md mb-4 text-gray-900 outline-0 font-medium w-full"
            placeholder="Your Password"
            {...register("password", {
              required: {
                value: true,
                message: "Password must be Required",
              },
              minLength: {
                value: 6,
                message: "Password must be min six character",
              },
            })}
          />

          <div className=" mb-2 ">
            {errors.password?.type === "required" && (
              <p className="font-medium text-error mb-3 ">
                {errors.password.message}
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="font-medium text-error">
                {errors.password.message}
              </p>
            )}
          </div>
       
              {signInError}
       <input type="submit" value="Login" className="btn btn-info font-bold px-4 py-2 mb-5" />
      </form>
              <small>New to Car Manufacturer. <Link className="text-info" to="/register">Register Now</Link> </small>


      <div className="divider">OR</div>
      <button
        className="btn btn-outline pl-16 bg-white text-black font-semi-bold "
        onClick={() => signInWithGoogle()}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
