import "./Header.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { AuthContext } from '../context/AuthContext.jsx';

function Header(props){
    const { cartItems, getTotalItems } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate("/");
        alert("Logged out successfully");
    };

    const handleNavigation = (sectionId) => {
        // If not on home page, navigate to home first
        if (location.pathname !== '/') {
            navigate(`/#${sectionId}`);
        } else {
            // If already on home page, just scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    
    return(
        <header id="header">
            <h1>🎨 {props.name}</h1> 
            <p className="profession-subtitle">{props.job}</p>
            <nav className="nav-links">
                <button 
                    onClick={() => handleNavigation('about')}
                    className="nav-btn"
                >
                    About
                </button>
                <button 
                    onClick={() => handleNavigation('projects')}
                    className="nav-btn"
                >
                    Our Collection
                </button>
                
                {user ? (
                    <>
                        <span className="user-info">👤 {user.username}</span>
                        <button onClick={handleLogout} className="logout-btn">Logout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
                
                <button 
                    onClick={() => handleNavigation('contact')}
                    className="nav-btn"
                >
                    Order Now
                </button>
                <Link to="/cart" className="cart-link">
                    🛒 Cart
                    {getTotalItems() > 0 && <span className="cart-badge">{getTotalItems()}</span>}
                </Link>
            </nav>
        </header>
    );
}
export default Header;