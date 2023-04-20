import { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import styled from "styled-components";
import { instance } from "../api/axiosInstance";

import { Burger } from "../types/Burger";

import { Button, CircularProgress, Typography } from "@mui/material";

import Layout from "../components/layout/Layout";
import BurgerList from "../components/burger-list/BurgerList";

import { StyledGrid } from "../styles/StyledGrid";

const MainPage = () => {
  const [noMoreBurgerPage, setNoMoreBurgerPage] = useState(false);

  const {
    data: burgerData,
    isLoading: burgerDataIsLoading,
    error: burgerDataError,
    fetchNextPage: fetchNextPageBurgerData,
  } = useInfiniteQuery<{ burgers: Burger[]; page: number }>(
    ["burgers"],
    async ({ pageParam = 1 }) => {
      const res = await instance.get(`/burger?page=${pageParam}`);

      return { burgers: res.data.data, page: pageParam };
    },
    {
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );

  useEffect(() => {
    if (
      burgerData &&
      burgerData.pages[burgerData.pages.length - 1].burgers.length < 8
    ) {
      setNoMoreBurgerPage(true);
    } else {
      setNoMoreBurgerPage(false);
    }
  }, [burgerData]);

  return (
    <Layout>
      <StyledGrid>
        {burgerDataIsLoading && <CircularProgress />}
        {burgerData &&
          !burgerDataIsLoading &&
          !burgerDataError &&
          burgerData.pages.map((burgers, index) => (
            <BurgerList key={index} burgers={burgers!.burgers} />
          ))}
      </StyledGrid>
      <MoreButton>
        {noMoreBurgerPage ? (
          <Typography>모든 버거를 다 보고 있어요!</Typography>
        ) : (
          <Button onClick={() => fetchNextPageBurgerData()}>next</Button>
        )}
      </MoreButton>
    </Layout>
  );
};

const MoreButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;

export default MainPage;
