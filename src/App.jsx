import './App.css';

import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CampersPage/CatalogPage';
import CamperDetailsPage from './pages/CamperDetailsPage/CamperDetailsPage';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/campers" element={<CatalogPage />} />
                <Route path="/campers/:camperId" element={<CamperDetailsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
