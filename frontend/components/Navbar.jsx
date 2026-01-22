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
    })
}