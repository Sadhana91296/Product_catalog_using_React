function Header(){
        const name = "John Doe";
        const profession = "Software Developer";
    return(
        <header>
            <h1>{name}</h1> 
            <p>{profession}</p>
            <nav>
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}
export default Header;