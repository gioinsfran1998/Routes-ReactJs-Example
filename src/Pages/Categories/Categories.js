import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Categories = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const skip = parseInt(query.get("skip")) || 0;
  const limit = parseInt(query.get("limit")) || 12;
  console.log(skip);

  const handleNext = () => {
    query.set("skip", skip + 15);
    query.set("limit", 100);
    history.push({ search: query.toString() });
  };
  // categories?skip=0&limit=10
  return (
    <div>
      <h1>Categories</h1>
      <h3>Skip:{skip}</h3>
      <h3>limit:{limit}</h3>

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Categories;
