import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  // Mock function for getting contract (Replace with actual function)
  const getContract = async () => {
    return "Mock Smart Contract";
  };

  useEffect(() => {
    const loadContract = async () => {
      try {
        const contract = await getContract();
        console.log("Contract loaded:", contract);
      } catch (error) {
        console.error("Error loading contract:", error);
      }
    };

    loadContract();
  }, []); // Runs only once when the component mounts

  return (
    <div className="container">
      <h1>Smart Contract Data</h1>
      
      <label>Number:</label>
      <input 
        type="number" 
        placeholder="Enter number" 
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <label>Text:</label>
      <input 
        type="text" 
        placeholder="Enter text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => console.log("Submitted:", number, text)}>
        Submit
      </button>
    </div>
  );
}

export default App;
