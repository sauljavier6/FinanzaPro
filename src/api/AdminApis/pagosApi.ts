import { apiRequest, setAccessToken } from "../api";

export const getPayments = async (page: number, pageSize: number, search: string) => {
  const res = await apiRequest(`/admin/pagos?page=${page}&pageSize=${pageSize}&search=${search}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const getPaymentsInfo = async () => {
  const res = await apiRequest(`/admin/pagos/info`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const getPaymentById = async (paymentId: any) => {
  const res = await apiRequest(`/admin/pagos/by/${paymentId}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};