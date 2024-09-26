"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const page = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((response) => response.json())

      .then((data) => setData(data));
  }, [id]);
  console.log(data);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("failed update operation");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!data) {
    return "loading.......";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Page</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name Field
            </label>
            <input
              {...register("name", { required: true })}
              className={`border w-full p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              defaultValue={data.products.name}
              placeholder="Enter Name..."
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">
                Name field is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image Field
            </label>
            <input
              {...register("image", { required: true })}
              className={`border w-full p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.image ? "border-red-500" : "border-gray-300"
              }`}
              defaultValue={data.products.image}
              placeholder="Enter image url..."
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-2">
                Image field is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Field
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              className={`border w-full p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.price ? "border-red-500" : "border-gray-300"
              }`}
              defaultValue={data.products.price}
              placeholder="Enter Price..."
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-2">
                Price field is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              category Field
            </label>
            <input
              {...register("category", { required: true })}
              type="text"
              className={`border w-full p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.category ? "border-red-500" : "border-gray-300"
              }`}
              defaultValue={data.products.category}
              placeholder="Enter Price..."
            />
            {errors.category && (
              <p className="text-red-500 text-sm mt-2">
                category field is required
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
