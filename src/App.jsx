import './App.css';

import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CampersPage/CatalogPage';
import CamperDetailsPage from './pages/CamperDetailsPage/CamperDetailsPage';
import CamperFeatures from './components/CamperFeatures/CamperFeatures';
import CamperReviews from './components/CamperReviews/CamperReviews';

function App() {
    return (
        <main>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/campers" element={<CatalogPage />} />
                <Route path="/campers/:camperId" element={<CamperDetailsPage />}>
                    <Route path="features" element={<CamperFeatures />} />
                    <Route path="reviews" element={<CamperReviews />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
    );
}

export default App;
