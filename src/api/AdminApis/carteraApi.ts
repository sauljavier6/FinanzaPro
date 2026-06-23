import { apiRequest, setAccessToken } from "../api";


export const getdatacartera = async () => {
  const res = await apiRequest("/admin/cartera", {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const getdatacarteraTable = async (page: number, pageSize: number, estado: string, search: string) => {
  const res = await apiRequest(`/admin/cartera/tabla?page=${page}&pageSize=${pageSize}&estado=${estado}&search=${search}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};
