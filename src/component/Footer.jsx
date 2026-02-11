import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                {/* LEFT SIDE */}
                <div className="space-y-6">

                    {/* Logo + Title */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">☕</span>
                            <h2 className="text-2xl font-bold">Espresso Emporium</h2>
                        </div>
                        <p className="text-sm text-gray-600 mt-3 max-w-md">
                            Always ready to be your friend. Come & Contact with us to share your
                            memorable moments, to share with your best companion.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-lg">
                        <a className=" p-2 rounded-full shadow cursor-pointer">
                            <FaFacebookF />
                        </a>
                        <a className="p-2 rounded-full shadow cursor-pointer">
                            <FaTwitter />
                        </a>
                        <a className=" p-2 rounded-full shadow cursor-pointer">
                            <FaLinkedinIn />
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold">Get in Touch</h3>

                        <div className="flex items-center gap-3 text-sm">
                            <FaPhoneAlt className="text-amber-600" />
                            <span>+88 01533 333 333</span>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <FaEnvelope className="text-amber-600" />
                            <span>info@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <FaMapMarkerAlt className="text-amber-600" />
                            <span>72, Wall street, King Road, Dhaka</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-base-100 p-8 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-6">Connect with Us</h3>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                        />

                        <textarea
                            placeholder="Message"
                            className="textarea textarea-bordered w-full h-28"
                        ></textarea>

                        <button
                            type="submit"
                            className="btn bg-amber-500 hover:bg-amber-600 text-white border-none px-8"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactSection;
