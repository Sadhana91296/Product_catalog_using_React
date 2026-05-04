import { createContext, useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext.jsx';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const { user } = useContext(AuthContext);

    // Load cart from localStorage when user changes
    useEffect(() => {
        if (user) {
            const savedCart = localStorage.getItem(`cart_${user.username}`);
            if (savedCart) {
                setCartItems(JSON.parse(savedCart));
            } else {
                setCartItems([]);
            }
        } else {
            setCartItems([]);
        }
    }, [user]);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (user && cartItems.length > 0) {
            localStorage.setItem(`cart_${user.username}`, JSON.stringify(cartItems));
        }
    }, [cartItems, user]);

    const addToCart = (product) => {
        if (!user) {
            return false; // Return false if not logged in
        }

        const existingItem = cartItems.find(item => item.id === product.id);
        
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
        return true;
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCartItems(cartItems.map(item =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            ));
        }
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('Rs. ', ''));
            return total + (price * item.quantity);
        }, 0);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const clearCart = () => {
        setCartItems([]);
        if (user) {
            localStorage.removeItem(`cart_${user.username}`);
        }
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            getTotalPrice,
            getTotalItems,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}
