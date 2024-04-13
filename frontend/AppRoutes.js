import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Pomona from './pages/Pomona';
import Gibson from './pages/Gibson';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/pomona" element={<Pomona />} />
            <Route path="/gibson" element={<Gibson />} />
        </Routes>
    )
}

export default AppRoutes;