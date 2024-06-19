import { useState, useEffect } from "react";
import List from "./list";
const Create = () => {
  const [name, setName] = useState("");
  const [rabbitName, setRabbit] = useState("");

  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = { name, rabbitName };

    fetch("http://localhost:8000/formularze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(list),
    });
  };
  useEffect(() => {
    console.log("use effect ran");
    fetch("http://localhost:8000/formularze")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

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
      {data && <List list={data} />}
    </div>
  );
};

export default Create;
