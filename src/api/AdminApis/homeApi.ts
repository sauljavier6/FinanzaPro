import { apiRequest, setAccessToken } from "../api";


export const getdata = async () => {
  const res = await apiRequest("/admin/home", {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};