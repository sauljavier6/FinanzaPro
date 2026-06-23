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

export const sendNotificacion = async (id: number) => {
  const res = await apiRequest(`/admin/notifications?id=${id}`, {
    method: "POST",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const sendNotificaciones = async (ids: number[]) => {
  const res = await apiRequest(`/admin/notifications/masivo`, {
    method: "POST",
    body: JSON.stringify({ ids }),
  });

  setAccessToken(res.accessToken);
  return res;
};

export const sendFactura = async (id: number) => {
  console.log('id',id)
  const res = await apiRequest(`/admin/notifications/factura?id=${id}`, {
    method: "POST",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const sendEstadocuentas= async (id: number) => {
  console.log('id',id)
  const res = await apiRequest(`/admin/notifications/estadocuentas?id=${id}`, {
    method: "POST",
  });

  setAccessToken(res.accessToken);
  return res;
};