import { apiRequest, setAccessToken } from "../api";

export const getdataSearch = async (search: string) => {
  const res = await apiRequest(`/admin/search?search=${search}`, {
    method: "GET",
  });
  
  setAccessToken(res.accessToken);
  return res;
};