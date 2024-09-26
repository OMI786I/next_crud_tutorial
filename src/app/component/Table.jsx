import Link from "next/link";
import React from "react";
const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return res.json();
  } catch (error) {
    console.log("error loading products", error);
  }
};
const Table = async () => {
  const { products } = await getProducts();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>category</th>
              <th>image</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {products.map((res, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={res.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{res.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {res.category}
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <Link href={`/edit/${res._id}`}>
                    {" "}
                    <button className="btn btn-primary btn-xs">Edit</button>
                  </Link>

                  <button className="btn btn-error btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
