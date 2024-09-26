import React, { useState, useEffect } from "react";
import ShimmerCardList from "../components/shimar/ShimmerCardList";
const Homepage: React.FC = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ShimmerCardList />;
  }

  return (
    <div className="p-4 container">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {/* Render your data here */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Homepage;
