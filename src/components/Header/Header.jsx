import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://reportz.io/wp-content/uploads/2019/09/ahrefs.png" />
            <div className={s.login}>{props.isAuth ? props.login : <NavLink to="/login">login</NavLink>}
                
            </div>
        </header>
    );
};

export default Header;
