import '../App.css';
import { useState, useEffect } from 'react';
import {v4} from 'uuid'
import NavBar from "../navigation/NavBar";


/*
 * Note for all team members: I have added comments to my changes below. I have hooked up a google firestore database
already. There are going to be a lot of changes. This is just a test to see if it was all connected properly. A lot of the 
functions and React Hooks in this file can be used again for actual functionality. 
 */

function Home() {
 
  //React hook to update changes as soon as someone clicks the refresh or when the page loads
  //don't ever make this a const function. instead any other function created inside should be declared a const.
  //then outside that const function, call it.
 
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      
     
    </div>
  );
}

export default Home;
