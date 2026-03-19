function Header(props){
        // const name = "John Doe";
        // const profession = "Software Developer";
    return(
        <header>
            <h1>{props.name}</h1> 
            <p>{props.profession}</p>
            <nav>
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}
export default Header;