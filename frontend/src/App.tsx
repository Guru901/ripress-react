import { useEffect, useState } from "react";

function App() {
  const [hello, setHello] = useState<string>("");

  useEffect(() => {
    (async () => {
      const response = await fetch("/hello");

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.text();

      setHello(data);
    })();
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>Ripress + React minimal demo</h1>
      <div>
        <h2>/hello</h2>
        <pre>{hello ?? "Loading..."}</pre>
      </div>
    </div>
  );
}

export default App;
