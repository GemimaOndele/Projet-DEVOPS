import React from "react";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import Notification from "./components/Notification";

function App() {
  return (
    <div>
      <h1>Gestion des Tickets IT</h1>
      <Notification />
      <TicketForm />
      <TicketList />
    </div>
  );
}

export default App;