
import { Container } from "./styles";
// import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ConfirmedBooking from "../../components/ConfirmedBooking";

const ConfirmationPage = () => {
  return (
    <Container>
      <Header />
      <ConfirmedBooking />
      {/* <Footer /> */}
    </Container>
  );
};

export default ConfirmationPage;