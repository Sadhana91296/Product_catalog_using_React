import "./ItemList.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function ItemList() {
    const { addToCart } = useContext(CartContext);
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const products = [
        { id: 1, title: 'Hand-Painted', desc: 'Beautiful hand-painted Ram-Sita with vibrant designs and intricate details. Perfect for wall displays in Pooja room', price: 'Rs. 200', image: '/art-images/HandPainting.jpeg', tags: ['Hand Painting', 'Custom Orders', 'Home Decor'] },
        { id: 2, title: 'Mandala Art Canvas', desc: 'Stunning handcrafted mandala art on canvas featuring geometric patterns and spiritual designs. A mesmerizing centerpiece.', price: 'Rs. 500', image: '/art-images/MandalaArt.jpeg', tags: ['Mandala Art', 'Hand Painting', 'Custom Orders'] },
        { id: 3, title: 'Lippen Art Design', desc: 'Artistic lip-inspired designs and decorative pieces. Unique and playful art for modern spaces.', price: 'Rs. 600', image: '/art-images/LippenArt.jpeg', tags: ['Lippen Art', 'Hand Painting', 'Creative'] },
        { id: 4, title: 'Mini Sculptures Collection', desc: 'Set of hand-crafted mini sculptures in various artistic styles. Perfect for desk decoration or gift sets.', price: 'Rs. 200', image: '/art-images/MiniSculpture.jpeg', tags: ['MiniSculpts', 'Custom Orders', 'Home Decor'] },
        { id: 5, title: 'Tea Light Candle Holders', desc: 'Artisan-crafted tea light candle holders with beautiful hand-painted designs. Creates a warm, ambient atmosphere.', price: 'Rs. 100', image: '/art-images/TeaLightCandle.jpeg', tags: ['TeaLightcandle Holders', 'Hand Painting', 'Home Decor'] },
   ];

    return (
        <section id="projects" className="projects-section">
            <h2>Our Collection ✨</h2>
            <div className="projects-grid">
                {products.map((product) => (
                    <div className="project-card" key={product.id} style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', padding: '12px', backgroundColor: 'rgba(10, 22, 40, 0.98)' }}>
                        <div style={{ position: 'relative', width: '280px', height: '280px', borderRadius: '8px', overflow: 'hidden', marginBottom: '15px', margin: '0 auto 15px auto' }}>
                            <img src={product.image} alt={product.title} className="product-image" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                            <div style={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', color: '#333', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                                #{product.id}
                            </div>
                        </div>
                        <h3 className="project-name">{product.title}</h3>
                        <p style={{fontWeight: 'bold', color: '#2ecc71', marginBottom: '8px'}}>{product.price}</p>
                        <p className="project-desc">{product.desc}</p>
                        <div className="project-tags">
                            {product.tags.map((tag, idx) => (
                                <span key={idx} className="tag">{tag}</span>
                            ))}
                        </div>
                        <button 
                            onClick={() => {
                                if (!isLoggedIn()) {
                                    alert("Please login to add items to cart");
                                    navigate("/login");
                                } else {
                                    const added = addToCart(product);
                                    if (added) {
                                        alert(`${product.title} added to cart!`);
                                    }
                                }
                            }}
                            style={{marginTop: '10px', padding: '8px 16px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '280px'}}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default ItemList;