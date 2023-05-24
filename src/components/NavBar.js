import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav> 
      <a id={1} href='#home'>home</a> 
      <a id={2} href='#about'>about</a>    
      <a id={3} href='#projects'>projects</a>
    </nav>
  )
}

export default NavBar;
