import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomeAbout/Home";
import SellCar from "./components/CarStore/SellCar/SellCar";
import UsedCar from "./components/CarStore/BuyCar/UsedCar/UsedCar";
import NewCar from "./components/CarStore/BuyCar/NewCar/NewCar";
import BuyCar from "./components/CarStore/BuyCar/BuyCar";
import PostAddForm from "./components/CarStore/SellCar/PostAddForm";
import UsedCarDetails from "./components/CarStore/BuyCar/UsedCar/UsedCarDetails";
import NavBar2 from "./components/UserHeaderFooter/UserHeaderFooter/NavBar2/NavBar2";
import About from "./components/HomeAbout/About";
import UserProfile from "./components/UserHeaderFooter/UserHeaderFooter/UserProfile/UserProfile";
import Settings from "./components/UserHeaderFooter/UserHeaderFooter/Settings/Settings";
import Layout from "./components/Dashboard/DashComponents/Layout";
import Auth from "./components/Auth/Auth";
import Signup from "./components/Auth/Signup";
import RentOutCar from "./components/CarStore/RentCar/RentOutCar";
import RentYourCar from "./components/CarStore/RentCar/RentYourCar";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Layout />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<NavBar2 />}>
          <Route path="/" element={<Home />} />
          <Route path="/buyCar" element={<BuyCar />} />
          <Route path="/sellCar" element={<SellCar />} />
          <Route path="/about" element={<About />} />
          <Route path="/buyCar/newCar" element={<NewCar />} />
          <Route path="/buyCar/usedCar" element={<UsedCar />} />
          <Route path="/buyCar/usedCar/car/:id" element={<UsedCarDetails />} />
          <Route path="/buyCar/sellCar" element={<SellCar />} />
          <Route path="/sellCar/postAdd" element={<PostAddForm />} />
          <Route path="/rentCar/rentACar" element={<RentYourCar />} />
          <Route path="/rentCar/rentOut" element={<RentOutCar />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        {/* <Route path="/" element={<Test />}>
          <Route path="/rentCar" element={<RentCar />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
