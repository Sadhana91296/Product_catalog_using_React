import "./About.css";

function About(){
    const skills = ['Hand Painting', 'Mandala Art','Lippen Art','MiniSculpts','TeaLightcandle Holders','Custom Orders'];
    const experience = [
        { year: '2023-Present', role: 'Master Artisan', company: 'ArtByBeby Crafts Studio' },
      ];
    
    return (
       <section id="about" className="about-section">
            <h2>About Our Studio</h2>
            <div className="about-content">
                <p>Welcome to ArtByBebi Craft! We're a passionate team of handmade artists dedicated to creating unique, sustainable, and beautiful pieces. With over 8 years of combined experience, we blend traditional techniques with contemporary design to bring you exceptional handcrafted items. Every piece is made with love and attention to detail.</p>
                
                <div className="skills-container">
                    <h3>We take orders for</h3>
                    <div className="skills-list">
                        {skills.map((skill, idx) => (
                            <span key={idx} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>
                
                <div className="experience-container">
                    <h3>Experience</h3>
                    {experience.map((exp, idx) => (
                        <div key={idx} className="experience-item">
                            <strong>{exp.role}</strong> @{exp.company}
                            <p style={{margin: '0.25rem 0'}}>{exp.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default About;