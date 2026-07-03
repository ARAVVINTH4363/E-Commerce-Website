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

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <FoodMarquee/>
      <About/>
      <Menu/>
      <Reviews/>
      <ReservationHeader/>
      <Reservation/>
      <Footer/>
    </div>
  );
}

export default App;
