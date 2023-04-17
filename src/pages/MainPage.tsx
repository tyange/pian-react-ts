import { useState } from "react";
import { useQueries } from "react-query";

import BurgerAPI from "../api/burger/BurgerAPI";

import { CircularProgress } from "@mui/material";

import Layout from "../components/layout/Layout";
import BurgerItem from "../components/burger-item/BurgerItem";
import Paginator from "../components/paginator/Paginator";

import { StyledGrid } from "../styles/StyledGrid";

const MainPage = () => {
  const [pageNum, setPageNum] = useState(1);

  const queries = useQueries([
    {
      queryKey: ["allBurger", pageNum],
      queryFn: () => BurgerAPI.getAllBurger(pageNum),
    },
    { queryKey: "allBurgerCounts", queryFn: () => BurgerAPI.getBurgerCounts() },
  ]);

  const {
    data: burgerData,
    isLoading: burgerDataIsLoading,
    error: burgerDataError,
  } = queries[0];

  const {
    data: burgerCountsData,
    isLoading: burgerCountsDataIsLoading,
    error: burgerCountsDataError,
  } = queries[1];

  const pageNumHandler = (index: number) => {
    setPageNum(index);
  };

  return (
    <Layout>
      <StyledGrid>
        {burgerDataIsLoading && <CircularProgress />}
        {burgerData &&
          !burgerDataIsLoading &&
          !burgerDataError &&
          burgerData.map((burger, index) => (
            <BurgerItem
              key={index}
              userId={burger.userId}
              name={burger.name}
              brand={burger.brand}
              description={burger.description}
            />
          ))}
      </StyledGrid>
      {burgerCountsData &&
        !burgerCountsDataIsLoading &&
        !burgerCountsDataError && (
          <Paginator
            counts={parseInt(burgerCountsData)}
            pageNumHandler={pageNumHandler}
          />
        )}
    </Layout>
  );
};

export default MainPage;
