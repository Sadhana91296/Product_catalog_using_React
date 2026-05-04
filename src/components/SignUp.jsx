import "./SignUp.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        setIsLoading(true);
        
        try {
            const response = await fetch("http://localhost:8080/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password
                })
            });

            setTimeout(() => {
                if (response.ok) {
                    alert("Sign Up Successful! Welcome to Art By Bebi");
                    login(username);
                    navigate("/");
                    setEmail("");
                    setUsername("");
                    setPassword("");
                    setConfirmPassword("");
                } else {
                    alert("Sign up failed. Please try again.");
                }
                setIsLoading(false);
            }, 1500);
        } catch (error) {
            console.error("Error:", error);
            alert("Sign up error. Please try again.");
            setIsLoading(false);
        }
    };

    return (
        <section id="signup" className="signup-section">
            <div className="signup-container">
                <div className="signup-box">
                    <h2>Create Account</h2>
                    <p className="signup-subtitle">Sign up to get started</p>
                    
                    <form onSubmit={handleSubmit} className="signup-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="signup-button"
                            disabled={isLoading}
                        >
                            {isLoading ? "Creating account..." : "Sign Up"}
                        </button>
                    </form>

                    <div className="signup-footer">
                        <button 
                            onClick={() => navigate("/login")}
                            className="back-to-login-btn"
                        >
                            Back to Login
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;
