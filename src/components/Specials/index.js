import { Container, Top, Cards } from "./styles";
import Button from "../Button";
import SpecialFoodCard from "../SpecialFoodCard";
import greekSalad from "../../images/icons_assets/greek salad.jpg";
import bruchetta from "../../images/icons_assets/bruchetta.svg";
import lemonDessert from "../../images/icons_assets/lemon dessert.jpg";

const Specials = (props) => {
  return (
    <Container {...props} id="menu">
      <Top>
        <h1>This weeks specials!</h1>
        <Button>Online Menu</Button>
      </Top>
      <Cards>
        <SpecialFoodCard
          imageUrl={greekSalad}
          title="Greek Salad"
          price={12.99}
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <SpecialFoodCard
          imageUrl={bruchetta}
          title="Bruchetta"
          price={7.99}
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <SpecialFoodCard
          imageUrl={lemonDessert}
          title="Lemon Dessert"
          price={6.99}
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </Cards>
    </Container>
  );
};

export default Specials;