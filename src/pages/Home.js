import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Home({ user, setUser }) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const history = useHistory();

  const clickBtn = () => {
    if (!Number(number)) return alert("type only numbers");
    if (number.length !== 9) return alert("id must be equal to 9 numbers");
    if (name.length <= 4)
      return alert("name length must be more than 4 characters");
    if (name !== name.toLowerCase())
      return alert("full name should be only in lower case");


    if (!name.trim().includes(" "))
      return alert("must have space in full name");


    setUser({ number: number, name: name, gender: gender });
    history.push("/enterdata");
  };

  return (
    <div>
      <h1>Enter your details </h1>
      <input
        type="text"
        onChange={(event) => setNumber(event.target.value)}
        placeholder="Enter your id"
      />
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter FullName"
      />
      <select
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      >
        <option value="male">male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={() => clickBtn()}>Next</button>
    </div>
  );
}
