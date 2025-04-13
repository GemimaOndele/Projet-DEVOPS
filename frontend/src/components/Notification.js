import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const Notification = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("ticketUpdate", (data) => {
      setMessage(`Mise à jour du ticket ${data.id}: ${data.status}`);
    });
  }, []);

  return <div>{message && <p>{message}</p>}</div>;
};

export default Notification;
