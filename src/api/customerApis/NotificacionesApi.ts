import { apiRequest, setAccessToken } from "../api";

export const getNotificaciones = async (page: number, pageSize: number) => {
  const res = await apiRequest(`/customer/notifications?page=${page}&pageSize=${pageSize}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};


export const getNotificacionesCount = async () => {
  const res = await apiRequest(`/customer/notifications/count`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};


export const ReadAllNotificaciones = async () => {
  const res = await apiRequest(`/customer/notifications/`, {
    method: "PUT",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const ReadNotificacionById = async (id: number) => {
  const res = await apiRequest(`/customer/notifications/${id}`, {
    method: "PUT",
  });

  setAccessToken(res.accessToken);
  return res;
};