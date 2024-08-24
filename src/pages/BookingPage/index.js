import { useReducer } from "react";
import { Container } from "./styles";
import Header from "../../components/Header/index";
// import Footer from "../../components/Footer";
import { initializeTimes, updateTimes } from "../../utils/temp";
import BookingForm from "../../components/BookingForm";

const Bookingpage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Container>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      {/* <Footer /> */}
    </Container>
  );
};

export default Bookingpage;