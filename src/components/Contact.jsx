import "./Contact.css";

function Contact() {
    const contacts = [
        { type: 'Email', value: 'info@artbybebi.com', icon: '📧' },
        { type: 'Phone', value: '+91 9876543210', icon: '📱' },
        { type: 'Instagram', value: '@bebisingh2', icon: '📸' },
        { type: 'Etsy Shop', value: 'etsy.com/shop/artbybebi', icon: '🛍️' },
        { type: 'Location', value: 'Bangalore, India', icon: '📍' }
    ];

    return(
        <section id="contact" className="contact-section">
            <h2>📬 Order or Get In Touch</h2>
            <p>Interested in our handmade art pieces? Contact us for custom orders, bulk inquiries, or collaboration opportunities. We'd love to hear from you!</p>
            
            <div className="contact-methods">
                {contacts.map((contact, idx) => (
                    <div key={idx} className="contact-item">
                        <span className="contact-icon">{contact.icon}</span>
                        <div className="contact-info">
                            <strong>{contact.type}</strong>
                            <p>{contact.value}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}
export default Contact;