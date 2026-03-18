import { apiRequest, setAccessToken } from "../api";

export const getFacturaById = async (id: number) => {
  const res = await apiRequest(`/customer/facturas/${id}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};
