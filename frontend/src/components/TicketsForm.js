import React, { useState } from "react";
import axios from "../services/api";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    priorité: "Faible",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/tickets", formData);
    alert("Ticket soumis avec succès !");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="titre" placeholder="Titre" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <select name="priorité" onChange={handleChange}>
        <option>Faible</option>
        <option>Moyenne</option>
        <option>Élevée</option>
        <option>Critique</option>
      </select>
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default TicketForm;
