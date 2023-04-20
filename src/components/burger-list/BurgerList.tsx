import { Burger } from "../../types/Burger";
import BurgerItem from "../burger-item/BurgerItem";

type BurgerListProps = {
  burgers: Burger[];
};

const BurgerList = ({ burgers }: BurgerListProps) => {
  return (
    <>
      {burgers.map((burgerItem, index) => (
        <BurgerItem
          key={index}
          userId={burgerItem.userId}
          name={burgerItem.name}
          brand={burgerItem.brand}
          description={burgerItem.description}
        />
      ))}
    </>
  );
};

export default BurgerList;
