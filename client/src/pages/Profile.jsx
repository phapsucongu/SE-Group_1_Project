import React, { useState } from "react";
const Profile = () => {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        gender: "",
        phone: "",
        bithday: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }
    return (
        <div className="m-auto">
            <h1 className ="text-headingColor font-bold mb-10">
                Profile Information
            </h1>

            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="full-name">
                        Full-name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fullname"
                        type="text"
                        placeholder="Fullname"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange} 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <p>Gender</p>
                    <select className="py-1.5 px-3 bg-white border rounded text-gray-700 focus:outline-none shadow">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    );
}
export default Profile;