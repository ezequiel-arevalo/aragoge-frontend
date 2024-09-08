import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
        <nav>
            <ul className="h-full items-center flex flex-row justify-center flex-wrap gap-4 align-middle">
                <li>
                    <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/404" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Error Page
                    </NavLink>
                </li>
            </ul>
        </nav>
    </>
  );
};
