import React from 'react'
import Dune from "../assets/images/trending/dune.jpg";
import Morbius from "../assets/images/trending/morbius.jpg";
import Lightyear from "../assets/images/trending/lightyear.jpg";
import Everything from "../assets/images/trending/everything.jpg";
import Infinite from "../assets/images/trending/infinite.jpg";
import Joker from "../assets/images/trending/joker.jpg";

function Trending() {
  return (
    <div className="container-fluid trending" id='trending'>
        <div className="container p-3">
            <h3>TRENDING</h3>
            <div className="row">

                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{ width: "18rem" }}>
            <img src={Dune} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">DUNE</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                 <div className="card" style={{ width: "18rem" }}>
            <img src={Morbius} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title"> MORBIUS</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{ width: "21rem" }}>
            <img src={ Lightyear} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title"> LIGHTYEAR</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{ width: "18rem" }}>
            <img src={ Everything} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title"> EVERYTHING</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            
             <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{ width: "17rem" }}>
            <img src={ Infinite} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title"> INFINITE</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>

             <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{ width: "18rem" }}>
            <img src={ Joker} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title"> JOKER</h5>
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

export default Trending
