import './css/App.css';
import Header from './component/Header.jsx';
import Reservation from './component/Reservation.jsx';
import Main from './component/Main.jsx';
import About from './component/About.jsx';
import Menu from './component/Menu.jsx';
import Reviews from './component/Review.jsx';
import FoodMarquee from './component/FoodMarquee.jsx';
import ReservationHeader from './component/ReserveHeader.jsx';
import Footer from './component/Footer.jsx';
import { useState } from 'react';



function App() {
  const [searchTerm, setSearchTerm] = useState("");
const [category, setCategory] = useState("ALL");


  return (
    <div className="App">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}/>
      <Main/>
      <FoodMarquee/>
      <About/>
      <Menu
        searchTerm={searchTerm}
        category={category}
        setCategory={setCategory}/>
      <ReservationHeader/>
      <Reservation/>
      <Reviews/>
      <Footer setCategory={setCategory}/>
    </div>
  );
}

export default App;
