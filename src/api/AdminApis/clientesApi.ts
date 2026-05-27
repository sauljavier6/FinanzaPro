import { apiRequest, setAccessToken } from "../api";

export const getdataCustomers = async (page: number, pageSize: number, estado: string, search: string) => {
  const res = await apiRequest(`/admin/customer?page=${page}&pageSize=${pageSize}&estado=${estado}&search=${search}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};


export const getdataCustomersInfo = async () => {
  const res = await apiRequest(`/admin/customer/info`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};


export const getdataCustomersInfoById = async (id:number) => {
  const res = await apiRequest(`/admin/customer/info/byId/${id}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const getinvoicesInfoById = async (id:number, page: number, pageSize: number) => {
  const res = await apiRequest(`/admin/customer/invoices/byId/${id}?page=${page}&pageSize=${pageSize}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};