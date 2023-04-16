import { useEffect } from "react";
import { useQuery } from "react-query";

import BurgerAPI from "../api/burger/BurgerAPI";

import Layout from "../components/layout/Layout";
import { CircularProgress, Container } from "@mui/material";
import BurgerItem from "../components/burger-item/BurgerItem";

const MainPage = () => {
  const { data, isLoading, error } = useQuery("allBurger", () =>
    BurgerAPI.getAllBurger()
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Layout>
      <Container>
        {isLoading && <CircularProgress />}
        {data &&
          !isLoading &&
          !error &&
          data.map((burger, index) => (
            <BurgerItem
              key={index}
              userId={burger.userId}
              name={burger.name}
              brand={burger.brand}
              description={burger.description}
            />
          ))}
      </Container>
    </Layout>
  );
};

export default MainPage;
