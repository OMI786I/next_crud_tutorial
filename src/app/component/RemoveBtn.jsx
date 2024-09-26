"use client";
import { useRouter } from "next/navigation";
import React from "react";

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeButton = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <div>
      <button onClick={removeButton} className="btn btn-xs btn-error">
        Remove
      </button>
    </div>
  );
};

export default RemoveBtn;
