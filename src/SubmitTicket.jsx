/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export function SubmitTicket() {
  const [formData, setFormData] = useState({
    driverName: "",
    truckRegistration: "",
    location: "",
    breakdownType: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = "https://truck-support-api-production.up.railway.app/tickets";

    try {
      const response = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log("📢 Request Data:", JSON.stringify(formData, null, 2));
      console.log("✅ Response:", response.data);

      alert("Ticket submitted successfully");

      setFormData({
        driverName: "",
        truckRegistration: "",
        location: "",
        breakdownType: "",
        description: ""
      });
    } catch (error) {
      console.error("❌ Error submitting ticket", error);
      alert("Failed to submit ticket");
    }
  };

  return (
    <div className="container">
      <h2>Submit a Breakdown Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input name="driverName" placeholder="Driver Name" value={formData.driverName} onChange={handleChange} required />
        <input name="truckRegistration" placeholder="Truck Registration" value={formData.truckRegistration} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input name="breakdownType" placeholder="Type of Breakdown" value={formData.breakdownType} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
}
