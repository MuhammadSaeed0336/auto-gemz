


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/testHeader/Home';
// import Test from './components/testHeader/Test';
import SellCar from './components/CarStore/SellCar/SellCar';
import UsedCar from './components/CarStore/BuyCar/UsedCar/UsedCar';
import NewCar from './components/CarStore/BuyCar/NewCar/NewCar';
import BuyCar from './components/CarStore/BuyCar/BuyCar';
// import RentCar from './components/CarStore/RentCar/RentCar';
import PostAddForm from './components/CarStore/SellCar/PostAddForm';
import UsedCarDetails from './components/CarStore/BuyCar/UsedCar/UsedCarDetails';
import NavBar2 from './components/UserHeaderFooter/UserHeaderFooter/NavBar2/NavBar2';
import About from './components/testHeader/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar2 />}>
          <Route path="/home" element={<Home />} />
          <Route path="/buyCar" element={<BuyCar />} />
          <Route path="/sellCar" element={<SellCar />} />
          <Route path="/about" element={<About />} />
        <Route path="/buyCar/newCar" element={<NewCar />} />
        <Route path="/buyCar/usedCar" element={<UsedCar />} />
        <Route path="/buyCar/usedCar/car/:id" element={<UsedCarDetails/>} />
        <Route path="/buyCar/sellCar" element={<SellCar />} />
        <Route path="/sellCar/postAdd" element={<PostAddForm />} />
        </Route>
        {/* <Route path="/" element={<Test />}>
          <Route path="/rentCar" element={<RentCar />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
