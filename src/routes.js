import { Route, Routes } from "react-router-dom";


// import Bookingpage from "./pages/Bookingpage";
// import ConfirmationPage from "./pages/ConfirmationPage";
import Home from "./pages/Home";

export default function () {
  return (
    <Routes>
      <Route element={<Home/>} path="/"/>
      {/* <Route element={<Bookingpage/>} path="/bookings"/>
      <Route element={<ConfirmationPage/>} path="/confirmation"/> */}
    </Routes>
  );
};