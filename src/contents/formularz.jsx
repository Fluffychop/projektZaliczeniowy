import React from "react";
import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [rabbitName, setRabbit] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formularz = { name, rabbitName };

    fetch("http://localhost:8000/formularze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formularz),
    }).then(() => {
      console.log("zadzialalo");
    });
  };
  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
        <label>Imię i Nazwisko</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Imię Królika</label>
        <input
          type="text"
          required
          value={rabbitName}
          onChange={(e) => setRabbit(e.target.value)}
        />
        <button>Wyślij Formularz</button>
      </form>
    </div>
  );
};

export default Create;
