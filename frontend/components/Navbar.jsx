import 'react'from React;

const Navbar = () => {
    //Navbar links array: storing them in an array so that we can loop later.
    const navLinks = ["Home", "About", "Services", "Contact"];
    //Creates a state to track if the user has scrolled down the page.
    const [scrolled, setScrolled]= usestate(false);
    //Runs after the component loads(mounts).It  is used to listen for page scroll events.
    useEffect(() => {
        const handleScroll = () => {
            /*gives the scroll distance in pixels.If user has scrolled more than this value
            the scrolled becomes true*/
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            };
            /*Tells the browser "everytime the user scrolls,run handlescroll*/
           window.addEventListener("scroll", handleScroll); 
           /*Removes the Event listener when the component unmounts*/
           return() => window.removeEventListener("scroll", handleScroll); 
        }
    },[]); //Empty dependency array meaning this effect runs only once when the component mounts.
     return(
        /*If scrolled is true the class becomes navbar navbar-scrolled  and if false 
        it becomes navbar*/
       <nav className ={'navbar $ {scrolled ? "navbar-scrolled" : ""}'}>
       /* Logo brand */
       <div className= "logo">SolFest Africa</div>
       /* Navigation links */
       <ul className = "nav-links">
        /* Loops each item in navLinks array and creates a list item for each link*/
        {navLinks.map((link)=> (
            /*Key helps react to update the list effeciently*/
            <li key ={link}>
                <a href = {'# ${link.toLowercase ()}'}>{link}</a>
            </li>
        ))}
       </ul>
       </nav>
    )
    }
    //This makes Navbar available so other files can import it.
    export default Navbar;
