import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

export default function Navigation() {
    return (
        <nav className={css.nav}>
            <NavLink
                to="/"
                className={({ isActive }) => {
                    return clsx(css.link, isActive && css.isActive);
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/catalog"
                className={({ isActive }) => {
                    return clsx(css.link, isActive && css.isActive);
                }}
            >
                Catalog
            </NavLink>
        </nav>
    );
}
