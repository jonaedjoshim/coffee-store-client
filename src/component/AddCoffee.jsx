import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    // we can use these system to get automatically form data

    // const formData = new FormData(form) 
    // const coffeeData = Object.fromEntries(formData.entries())

    const coffeeData = {
      name: form.name.value,
      quantity: form.quantity.value,
      supplier: form.supplier.value,
      taste: form.taste.value,
      price: form.price.value,
      details: form.details.value,
      photo: form.photo.value,
    };

    console.log(coffeeData);

    // send data to the backend

    fetch('http://localhost:5000/coffees', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(coffeeData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Coffee Added Successfully!',
            icon: 'success',
            draggable: true
          })
          form.reset()
        }
      })

  };

  return (
    <div className="flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-base-100 shadow-xl rounded-2xl p-10">

        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Add New Coffee</h2>
          <p className="text-sm text-gray-500 mt-3 max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleAddCoffee} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </div>

            {/* quantity */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Enter coffee quantity"
                className="input input-bordered w-full"
              />
            </div>

            {/* Supplier */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </div>

            {/* Taste */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </div>

            {/* price */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter coffee price"
                className="input input-bordered w-full"
              />
            </div>

            {/* Details */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="btn w-full bg-amber-500 hover:bg-amber-600 text-white border-none"
            >
              Add Coffee
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
