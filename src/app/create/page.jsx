"use client";
import React from "react";
import { useForm } from "react-hook-form";
const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Page</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Field
            </label>
            <input
              {...register("exampleRequired", { required: true })}
              className={`border w-full p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.exampleRequired ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter something..."
            />
            {errors.exampleRequired && (
              <p className="text-red-500 text-sm mt-2">
                This field is required
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
