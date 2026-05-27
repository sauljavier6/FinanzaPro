import { apiRequest, setAccessToken } from "../api";

export const getNotificaciones = async (page: number, pageSize: number, estado: string) => {
  const res = await apiRequest(`/admin/notifications?page=${page}&pageSize=${pageSize}&estado=${estado}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};


export const getNotificacionesCount = async () => {
  const res = await apiRequest(`/admin/notifications/count`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};


export const ReadAllNotificaciones = async () => {
  const res = await apiRequest(`/admin/notifications/`, {
    method: "PUT",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const ReadNotificacionById = async (id: number) => {
  const res = await apiRequest(`/admin/notifications/${id}`, {
    method: "PUT",
  });

  setAccessToken(res.accessToken);
  return res;
};