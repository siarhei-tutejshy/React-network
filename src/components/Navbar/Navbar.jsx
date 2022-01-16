import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <div className={cl.item}>
                <NavLink to="/profile">profile</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/dialogs">messages</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/news">news</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/music">music</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/settings">settings</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/users">users</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
