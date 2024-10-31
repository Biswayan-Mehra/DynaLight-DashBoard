import React from "react";
import useSWR from "swr";

// Constants
const DATA_URL =
  "https://raw.githubusercontent.com/Biswayan-Mehra/SIH-2023-DynaLight/d223da05eeb8f4f1fbbaab89121037cfeca43d0c/DataSets/Karunya_Lights.json";

// Fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  const { data, error } = useSWR(DATA_URL, fetcher);

  if (error) {
    return <div>Failed to load data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // Once data is loaded, you can work with it here
  // For example, you can map through the data and display it
  return <div></div>;
}

export default App;
