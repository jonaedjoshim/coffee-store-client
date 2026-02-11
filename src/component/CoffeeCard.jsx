import React from 'react';
import { GoEye } from 'react-icons/go';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom'; // Ensure this matches your routing library
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, price, quantity, photo } = coffee;

    const handleDelete = (_id) => {
        console.log("Deleting ID:", _id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Fetch call to your server (Port 5000)
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            // Update the UI state
                            const remainingCoffees = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainingCoffees);
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting coffee:", error);
                        Swal.fire("Error", "Could not delete the coffee.", "error");
                    });
            }
        });
    }

    return (
        <div className="card card-side shadow-xl border-2 p-6 flex items-center">
            {/* Image Section with specific size */}
            <figure className="w-1/3 h-48">
                <img
                    className="w-full h-full object-contain rounded-lg"
                    src={photo}
                    alt={name || "Coffee"} 
                />
            </figure>

            {/* Content Section */}
            <div className="flex w-full justify-between items-center ml-6">
                <div className="space-y-2">
                    <h2 className="text-xl font-bold font-rancho">Name: <span className="font-normal text-gray-300">{name}</span></h2>
                    <p className="font-bold font-rancho">Price: <span className="font-normal text-gray-300">{price} TK</span></p>
                    <p className="font-bold font-rancho">Quantity: <span className="font-normal text-gray-300">{quantity}</span></p>
                </div>

                {/* Action Buttons */}
                <div className="card-actions">
                    <div className="join join-vertical space-y-3">
                        <Link to={`/coffee/${_id}`}>
                            <button className="btn join-item bg-[#D2B48C] hover:bg-[#b89a74] border-none text-white">
                                <GoEye size={20} />
                            </button>
                        </Link>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn join-item bg-[#3C393B] hover:bg-[#2a2829] border-none text-white">
                                <MdEdit size={20} />
                            </button>
                        </Link>
                        <button 
                            onClick={() => handleDelete(_id)} 
                            className="btn join-item bg-[#EA4744] hover:bg-[#c93a38] border-none text-white">
                            <MdDelete size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;