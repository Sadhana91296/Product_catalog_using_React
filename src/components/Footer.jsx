import "./Footer.css";

function Footer(){
    const currentYear = new Date().getFullYear();
    const footerLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Shop', href: '#projects' },
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Shipping & Returns', href: '#shipping' }
    ];
    const socials = [
        { name: 'Instagram', url: 'https://instagram.com' },
        { name: 'Facebook', url: 'https://facebook.com' },
        { name: 'Pinterest', url: 'https://pinterest.com' }
    ];

    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    {footerLinks.map((link, idx) => (
                        <a key={idx} href={link.href}>{link.label}</a>
                    ))}
                </div>
                
                <div className="footer-section">
                    <h4>Follow Me</h4>
                    {socials.map((social, idx) => (
                        <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
                    ))}
                </div>
                
                <div className="footer-section">
                    <h4>About ArtByBebi Craft Shop</h4>
                    <p>Creating beautiful handmade art and crafts with passion and sustainability in mind. Shop our unique collection today!</p>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {currentYear} ArtByBebi Craft Shop. All rights reserved. 🎨</p>
            </div>
        </footer>
    );
}
export default Footer;