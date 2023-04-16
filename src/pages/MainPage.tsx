import { useEffect } from "react";
import { useQuery } from "react-query";

import BurgerAPI from "../api/burger/BurgerAPI";

import Layout from "../components/layout/Layout";
import { CircularProgress, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
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
      <Grid container rowSpacing={3}>
        {isLoading && <CircularProgress />}
        {data &&
          !isLoading &&
          !error &&
          data.map((burger, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <BurgerItem
                userId={burger.userId}
                name={burger.name}
                brand={burger.brand}
                description={burger.description}
              />
            </Grid>
          ))}
      </Grid>
    </Layout>
  );
};

export default MainPage;
