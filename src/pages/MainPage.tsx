import { useEffect } from "react";
import { useQuery } from "react-query";

import BurgerAPI from "../api/burger/BurgerAPI";

import { CircularProgress } from "@mui/material";

import Layout from "../components/layout/Layout";
import BurgerItem from "../components/burger-item/BurgerItem";

import { StyledGrid } from "../styles/StyledGrid";

const MainPage = () => {
  const { data, isLoading, error } = useQuery("allBurger", () =>
    BurgerAPI.getAllBurger()
  );

  return (
    <Layout>
      <StyledGrid>
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
      </StyledGrid>
    </Layout>
  );
};

export default MainPage;
