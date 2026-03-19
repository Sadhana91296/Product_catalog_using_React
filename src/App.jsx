import './App.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProjectList from './components/ProjectList.jsx'

function App(){
  return (
    <div className="App">
      <Header/>
      <About/>
      <ProjectList/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App
