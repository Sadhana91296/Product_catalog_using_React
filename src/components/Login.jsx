import "./Login.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            setTimeout(() => {
                if (response.ok) {
                    alert("Login Successful");
                    login(username);
                    setUsername("");
                    setPassword("");
                    navigate("/");
                } else {
                    alert("Invalid credentials");
                }
                setIsLoading(false);
            }, 1500);
        } catch (error) {
            console.error("Error:", error);
            alert("Login error. Please try again.");
            setIsLoading(false);
        }
    };

    return (
        <section id="login" className="login-section">
            <div className="login-container">
                <div className="login-box">
                    <h2>Welcome Back</h2>
                    <p className="login-subtitle">Sign in to your account</p>
                    
                    <form onSubmit={handleSubmit} className="login-form">
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

                        <div className="form-remember">
                            <label>
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <a href="#forgot">Forgot password?</a>
                        </div>

                        <button 
                            type="submit" 
                            className="login-button"
                            disabled={isLoading}
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>Don't have an account? <button onClick={() => navigate("/signup")} className="signup-link">Sign up here</button></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
