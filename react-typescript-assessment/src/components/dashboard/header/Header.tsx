import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../../context/MyContext";

const navigationItems = {
  dashboard: { name: 'Dashboard', link: '/dashboard' },
  'create-profile': { name: 'Create Profile', link: '/dashboard/create-profile' },
  'user-list': { name: 'User List', link: '/dashboard/user-list' },
  'my-profile': { name: 'My Profile', link: '/dashboard/my-profile' },
}


const roleAuth = {
  admin: ['dashboard', 'create-profile', 'user-list'],
  supervisor: ['dashboard', 'user-list', 'my-profile'],
  associate: ['dashboard', 'my-profile'],
}


const Header = () => {

  const { state, dispatch } = useMyContext();

  const roleNav = roleAuth[state?.login?.role] || [];
  const navItemsList = roleNav.map(itemKey => navigationItems[itemKey]);

  const navigate = useNavigate();
  
  return (
    <header className="dashboard-header">
      <nav className="navigation">
        {navItemsList.map((item) => {
          const { name, link } = item;

          return (
            <button
              key={link}
              className={`nav-item`}
              onClick={() => navigate(link)}
            >
              {name}
            </button>
          )
        })}
        <button
          className={`nav-item`}
          onClick={() => dispatch({ type: 'logout' })}
        >
          Logout
        </button>
      </nav>
    </header>
  )
}

export default Header