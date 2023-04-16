import { instance } from "../axiosInstance";
import { Burger } from "../../types/Burger";

const BurgerAPI = {
  getAllBurger: async (pageParam?: string) => {
    try {
      const res = await instance.get<{ data: Burger[] }>(
        `/burger?page=${pageParam ? pageParam : "1"}`
      );

      const data = res.data.data;

      return data;
    } catch (err) {
      console.log(err);
    }
  },
  getMyBurgers: async (userId: string, pageParams: string, token: string) =>
    await instance.get<{ data: Burger[] }>(
      `/burger/${userId}?page=${pageParams ? pageParams : "1"}`,
      {
        headers: {
          Authorization: token,
        },
        withCredentials: true,
      }
    ),
  getBurgerCounts: async () =>
    await instance.get<{ data: { counts: number } }>(`/burger/counts`),
  addBurger: async (newBurger: Burger, token: string) => {
    await instance.post("/burger", newBurger, {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    });
  },
};

export default BurgerAPI;
