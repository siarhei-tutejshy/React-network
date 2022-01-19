import { Route, BrowserRouter, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';

import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
    
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/:userId" element={<ProfileContainer />} />
                        <Route path="/dialogs" element={<DialogsContainer />} />

                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/users" element={<UsersContainer />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
