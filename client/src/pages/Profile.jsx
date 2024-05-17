import React, { useState } from "react";
import Account from "../components/Dashboard/client-account/MyAccount";
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
        <>
            <Account />
       </>
    )
         
}
export default Profile;