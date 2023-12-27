
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Products from './Components/Products';
import Review from './Components/Review';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Footer from './Components/Footer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
        <About />
        <Menu />
        <Products />
        <Review />
        <Contact />
        <Blog />
        <Footer />
      </header>
    </div>
  );
}

export default App;
