import { apiRequest, setAccessToken } from "../api";


export const getdata = async () => {
  const res = await apiRequest("/customer/home", {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const getReporteG = async () => {

  const res = await apiRequest(`/customer/home/graficas`, {
    method: "GET",
  });

  return res;
};