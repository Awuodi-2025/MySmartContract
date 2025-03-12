import { useState } from "react";
import { getContract } from "./contractConfig";
import "./App.css";


function App() {
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    try {
      const contract = await getContract();
      const tx = await contract.setValues(number, text);
      await tx.wait();
      alert("Transaction successful!");
    } catch (error) {
      console.error(error);
      alert("Transaction failed!");
    }
  };

  return (
    <div className="container">
      <h1>Smart Contract Data</h1>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
