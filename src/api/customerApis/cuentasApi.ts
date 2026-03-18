import { apiRequest, setAccessToken } from "../api";


export const getFacturas = async (page: number, pageSize: number) => {
  const res = await apiRequest(`/customer/cuentas?page=${page}&pageSize=${pageSize}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};