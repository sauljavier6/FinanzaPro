import { apiRequest, setAccessToken } from "../api";

export const getdataSearch = async (search: string) => {
  const res = await apiRequest(`/customer/search?search=${search}`, {
    method: "GET",
  });
  
  setAccessToken(res.accessToken);
  return res;
};