import { useState, useEffect } from "react";
import { urlAddresses } from "./assets/urlAddresses";
import "./App.css";

function App() {
 
  const [data, setData] = useState(null);
  const [user,setUser] = useState(null);
  const [token,setToken] = useState(null);
  

  return (
    <>
     
        <div>
          <p>testing initial page</p>
        </div>
     
    </>
  );
}

export default App;
