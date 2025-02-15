import Intro from "./components/Intro"; 
import Navbar from "./components/Navbar";
import Superhero from "./components/Superhero";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

function App() {
  return (
    <>
          <div class="intro">
            <Navbar/>
            <Intro/>
          </div>
          <Trending/>
          <Superhero/>
          <a href="#top" className="btn btn-warning p-2 tombol">Go to Top</a>
          <Footer/>
    </>
  )
}

export default App;

