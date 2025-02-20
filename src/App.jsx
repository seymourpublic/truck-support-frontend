/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SubmitTicket } from "./SubmitTicket";
import { ViewTickets } from "./ViewTickets";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="container">
        <nav className="nav-links">
          <Link to="/">Submit Ticket</Link>
          <Link to="/tickets">View Tickets</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SubmitTicket />} />
          <Route path="/tickets" element={<ViewTickets />} />
        </Routes>
      </div>
    </Router>
  );
}
