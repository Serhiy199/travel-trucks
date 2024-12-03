import { useEffect, useState } from 'react';

import './App.css';
import { fetchArticles } from './article-api';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

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
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<div>Catalog page</div>} />
                {/* <Route path="/catalog/:id" element={<div>Home page</div>}/> */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
