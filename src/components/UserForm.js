import React, { useState } from "react";
import axios from "axios";

function UserForm({ user = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    address: user.address?.street || "",
    city: user.address?.city || ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, formData)
        .then(response => onSubmit(response.data))
        .catch(error => console.error("Error updating user:", error));
    } else {
      axios.post("https://jsonplaceholder.typicode.com/users", formData)
        .then(response => onSubmit(response.data))
        .catch(error => console.error("Error creating user:", error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      <input name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
      <button type="submit">{user.id ? "Update" : "Create"} User</button>
    </form>
  );
}

export default UserForm;