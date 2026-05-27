import { apiRequest, setAccessToken } from "../api";

export const getPaymentById = async (paymentId: any) => {
  const res = await apiRequest(`/customer/pagos/by/${paymentId}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const getPayments = async (page: number, pageSize: number, search: string) => {
  const res = await apiRequest(`/customer/pagos?page=${page}&pageSize=${pageSize}&search=${search}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};