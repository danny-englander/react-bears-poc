import { useState } from "react";
import BearsData from "./components/BearsData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='bears-app'>
      <BearsData />
    </div>
  );
}

export default App;
