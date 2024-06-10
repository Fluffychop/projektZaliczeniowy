import React from "react";
import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");

  return (
    <div className="content">
      <form>
        <label>Imię i Nazwisko</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Create;
