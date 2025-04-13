import React, { useEffect, useState } from "react";
import axios from "../services/api";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await axios.get("/tickets");
      setTickets(response.data);
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h2>Tickets en cours</h2>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <h3>{ticket.titre} ({ticket.priorité})</h3>
          <p>{ticket.description}</p>
          <p>Statut : {ticket.statut}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
