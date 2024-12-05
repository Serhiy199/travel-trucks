import './App.css';

import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CampersPage/CatalogPage';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/campers/:id" element={<div>Trucks page</div>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
