import { useEffect, useState } from "react";

import "./App.css";
import { fetchArticles } from "./article-api";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getArticles() {
      const data = await fetchArticles();
      setArticles(data);
    }

    getArticles();
  }, []);

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/catalog" element={<div>Catalog page</div>} />
        {/* <Route path="/catalog/:id" element={<div>Home page</div>}/> */}
      </Routes>
    </>
  );
}

export default App;
