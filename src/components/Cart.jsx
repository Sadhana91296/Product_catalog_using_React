import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!user) {
        return (
            <section id="cart" className="cart-section">
                <div className="cart-container">
                    <h2>Your Cart</h2>
                    <div className="empty-cart">
                        <p>Please login to view your cart</p>
                        <button 
                            onClick={() => navigate("/login")}
                            className="continue-shopping-btn"
                        >
                            Go to Login
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    if (cartItems.length === 0) {
        return (
            <section id="cart" className="cart-section">
                <div className="cart-container">
                    <h2>Your Cart</h2>
                    <div className="user-cart-header">
                        <p>User: <strong>{user.username}</strong></p>
                    </div>
                    <div className="empty-cart">
                        <p>Your cart is empty</p>
                        <button 
                            onClick={() => navigate("/")}
                            className="continue-shopping-btn"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </section>
        );
    }







    return (
        <section id="cart" className="cart-section">
            <div className="cart-container">
                <h2>Your Cart</h2>
                <div className="user-cart-header">
                    <p>User: <strong>{user.username}</strong></p>
                    <p className="cart-items-count">Total Items: <strong>{cartItems.length}</strong></p>
                </div>
                <div className="cart-content">
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="item-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.title}</h3>
                                    <p className="item-price">{item.price}</p>
                                    <p className="item-desc">{item.desc}</p>
                                </div>
                                <div className="item-quantity">
                                    <button 
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="qty-btn"
                                    >
                                        −
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button 
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="qty-btn"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="item-total">
                                    <p className="total-price">
                                        Rs. {(parseFloat(item.price.replace('Rs. ', '')) * item.quantity).toFixed(0)}
                                    </p>
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="remove-btn"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-details">
                            <div className="summary-row">
                                <span>Subtotal:</span>
                                <span>Rs. {getTotalPrice().toFixed(0)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping:</span>
                                <span>Rs. 50</span>
                            </div>
                            <div className="summary-row">
                                <span>Tax:</span>
                                <span>Rs. {(getTotalPrice() * 0.1).toFixed(0)}</span>
                            </div>
                            <div className="summary-row total">
                                <span>Total:</span>
                                <span>Rs. {(getTotalPrice() + 50 + (getTotalPrice() * 0.1)).toFixed(0)}</span>
                            </div>
                        </div>
                        <button className="checkout-btn">Proceed to Checkout</button>
                        <button 
                            onClick={() => navigate("/")}
                            className="continue-shopping"
                        >
                            Continue Shopping
                        </button>
                        <button 
                            onClick={clearCart}
                            className="clear-cart-btn"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
