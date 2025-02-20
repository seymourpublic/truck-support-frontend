/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export function ViewTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const API_URL = "https://truck-support-api-production.up.railway.app/tickets";

    axios.get(API_URL, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log("✅ Tickets Retrieved:", response.data);
      setTickets(response.data);
    })
    .catch(error => {
      console.error("❌ Error fetching tickets:", error);
      alert("Failed to fetch tickets. Check API status.");
    });
  }, []);

  return (
    <div className="container">
      <h2>View Breakdown Tickets</h2>
      <ul className="ticket-list">
        {tickets.length > 0 ? tickets.map(ticket => (
          <li key={ticket._id}>
            <p><strong>Driver:</strong> {ticket.driverName}</p>
            <p><strong>Truck:</strong> {ticket.truckRegistration}</p>
            <p><strong>Location:</strong> {ticket.location}</p>
            <p><strong>Breakdown:</strong> {ticket.breakdownType}</p>
            <p><strong>Description:</strong> {ticket.description}</p>
          </li>
        )) : <p>No tickets available.</p>}
      </ul>
    </div>
  );
}
