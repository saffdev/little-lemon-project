import CallToAction from "../../components/CallToAction";
import Chicago from "../../components/Chicago";
import CustomersSay from "../../components/CustomersSay";
import Footer from "../../components/Footer";
import Header from "../../components/Header/index";
import Specials from "../../components/Specials";
import { Container } from "./styles";



const Home = () => {
    return (
        <Container>
            <Header />
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
            <Footer />
        </Container>
    );
};

export default Home;