import React from "react"; /*imports the react library*/

/*Defines the funcional component*/
const About = () => {
  /*Tells react what to render on the screen*/
  return (
    /*The about section of the webpage*/
    <section id="about" className="about">
      /*Heading for the about section*/
      <h2>About</h2>
      <p>
        Welcome to SolFest Africa, SolFest is East Africa's premier music
        festival, dedicated to celebrating and promoting African musical talent
        on a global stage. Founded on the principles of discipline, order,
        passion, and excellence, SolFest has become a significant cultural event
        in East Africa, attracting thousands of attendees each year.
      </p>
      <p>
        This years Solfest will feature a diverse line up of artist {"
        <span className="artists">Sauti sol,Nyashiski,Toxic Lyrikali,Nikita Keiring,Lil'Maina and many more"</span>}
        Come and experience an unforgettable celebration of music,
        culture,and community at SolFest Africa!
        
      </p>
    </section>
  );
};
export default About; /*Exports the about so that other files can import it*/
