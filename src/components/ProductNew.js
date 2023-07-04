import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

const ProductNew = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    style: "",
    size: "",
    description: "",
    image: "",
    color: "",
    price: "",
    stock: "",
  });

  const keys = Object.keys(data);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://ecommerce-back-3kra.onrender.com/api/admin/`, [
        { ...data },
      ])
      .then((res) => res.data)
      .then((product) => {
        alert(`Created new  ${product[0].style} shirt`);
      })
      .then(() => navigate("/products"))
      .catch(() =>
        alert("Se ha producido un error al actualizar el producto.")
      );
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="px-40 mt-8">
        {keys.map((key) => (
          <div className="mb-6" key={key}>
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 px-4"
            >
              {key}
            </label>
            <input
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name={key}
              value={data[key]}
              onChange={handleChange}
            />
          </div>
        ))}
      </form>
      <div className="flex justify-end mr-20">
        <button
          className="rounded-md bg-slate-500 px-3.5 py-2.5 mb-5 text-sm font-semibold text-white  shadow-sm hover:bg-slate-700 "
          onClick={handleSubmit}
        >
          Create Product
        </button>
      </div>
    </>
  );
};

export default ProductNew;
