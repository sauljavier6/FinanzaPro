import { apiRequest, setAccessToken } from "../api";


export const getFacturas = async () => {
  const res = await apiRequest("/customer/home", {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};