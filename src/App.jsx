import { Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import RegistrationModal from './components/ui/input/registrationModal/RegistrationModal';
import LoginModal from './components/ui/input/loginModal/LoginModal';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="login" element={<LoginModal />} />
                <Route path="registration" element={<RegistrationModal />} />
            </Routes>
        </div>
    );
}

export default App;
