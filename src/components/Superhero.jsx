import React from 'react'
import Antman from "../assets/images/superhero/antman.jpg";
import Avenger from "../assets/images/superhero/avenger.jpg";
import Batman from "../assets/images/superhero/batman.jpg";
import Spiderman from "../assets/images/superhero/spiderman-cover.jpg";
import Superman from "../assets/images/superhero/superman.jpg";
import Robinhood from "../assets/images/superhero/robinhood.jpg";

function Superhero() {
  return (
    <div className="container-fluid superhero" id='superhero'>
        <div className='container p-3'>
            <h3>SUPERHERO</h3>
            <div className="row">

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{ width: "18rem" }}>
            <img src={Antman} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">ANTMAN</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{ width: "18rem" }}>
            <img src={Avenger} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">AVENGER</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{ width: "18rem" }}>
            <img src={Batman} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">BATMAN</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div className="card" style={{ width: "18rem" }}>
            <img src={Spiderman} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">SPIDERMAN</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{ width: "18rem" }}>
            <img src={Superman} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">SUPERMAN</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{ width: "17rem" }}>
            <img src={Robinhood} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">ROBINHOOD</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Superhero
