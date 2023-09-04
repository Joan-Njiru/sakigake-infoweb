
import React from "react";
import './style.css'

const Home = () =>{
    return(
        <div className="Home">
       <div className="home">
        <div className="home-div">
            <div className="h-div-1">
                <h1 className="welcome">welcome to mzaziConnect</h1>
                <h1 className="journey">
                    A new way to stay engaged in your
                    <br/> 
                    child's education journey.
                </h1>
                <p>
                Our app simplifies assignment tracking and provides
                <br/>
                information on nearby shops where you can find the necessary 
                <br/>
                materials for your child's studies.
                </p>
                <div className="img-div-1">
                   <img src="./images/playstore.png" alt=""/> 
                </div>
                

            </div>
            <div className="h-div-2">
                <div className="h-div-child">
                    <div className="child-bg">
                    {/* <img src="./images/child.png" alt="" /> */}
                    </div>
                </div>
                
            </div>
        </div>
       </div>
        </div>
    )
}

export default Home