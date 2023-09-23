import React from "react";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "./utils/fetchFromAPI";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {});

  return <div>{fetchFromAPI}</div>;
};

export default App;
