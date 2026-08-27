import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
    setLoader(true);

    try {
      const { data: response } = await api.post(
        "/api/auth/public/register",
        data
      );

      reset();
      navigate("/login");
      toast.success("Registeration Successful!");

    } catch (error) {
      console.log(error);
      toast.error("Registeration Failed!");

    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-[#D1CFC9]">

      <form
        onSubmit={handleSubmit(registerHandler)}
        className="
          sm:w-[450px]
          w-[360px]
          bg-[#BDC4D4]
          border
          border-[#52677D]
          shadow-lg
          py-8
          sm:px-8
          px-4
          rounded-lg
        "
      >

        <h1 className="text-center font-serif text-[#0F1A2B] font-bold lg:text-3xl text-2xl">
          Register Here
        </h1>

        <hr className="mt-2 mb-5 border-[#52677D]" />

        <div className="flex flex-col gap-3">

          <TextField
            label="UserName"
            required
            id="username"
            type="text"
            message="*Username is required"
            placeholder="Type your username"
            register={register}
            errors={errors}
          />

          <TextField
            label="Email"
            required
            id="email"
            type="email"
            message="*Email is required"
            placeholder="Type your email"
            register={register}
            errors={errors}
          />

          <TextField
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            placeholder="Type your password"
            register={register}
            min={6}
            errors={errors}
          />

        </div>

        <button
          disabled={loader}
          type="submit"
          className="
            bg-[#1C2E4A]
            hover:bg-[#0F1A2B]
            font-semibold
            text-[#D1CFC9]
            w-full
            py-2
            transition-colors
            duration-200
            rounded-md
            my-3
            shadow-md
          "
        >
          {loader ? "Loading..." : "Register"}
        </button>

        <p className="text-center text-sm text-[#52677D] mt-6">
          Already have an account?

          <Link
            className="font-semibold underline hover:text-[#0F1A2B]"
            to="/login"
          >
            <span className="text-[#1C2E4A]">
              {" "}Login
            </span>
          </Link>
        </p>

      </form>
    </div>
  );
};

export default RegisterPage;