import { apiRequest, setAccessToken } from "../api";


export const getFacturas = async (page: number, pageSize: number, search: string) => {
  const res = await apiRequest(`/customer/cuentas/facturas?page=${page}&pageSize=${pageSize}&search=${search}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const getCuentas = async (page: number, pageSize: number, fechaInicio: string, fechaFin: string, search: string) => {
  const res = await apiRequest(`/customer/cuentas?page=${page}&pageSize=${pageSize}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&search=${search}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};
