
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dishes from './components/Dishes';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Review from './components/Review';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
