import { useEffect } from 'react';
import About from '../components/About.jsx'
import ItemList from '../components/ItemList.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

function HomePage() {
  useEffect(() => {
    // Handle hash navigation
    const hash = window.location.hash.slice(1); // Remove the '#' character
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <About/>
      <ItemList/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default HomePage;
