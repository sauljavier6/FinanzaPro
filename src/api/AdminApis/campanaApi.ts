import { apiRequest, setAccessToken } from "../api";

export interface CampaignData {
  nombre: string;
  canal: number;
  asunto: string;
  estado: number;
  diasatraso: number;
  repetirpor: number;
  repetircada: number;
  mensaje: string;
}

export const createCampana = async (data: CampaignData) => {
  const res = await apiRequest(`/admin/campanas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res?.accessToken) {
    setAccessToken(res.accessToken);
  }

  return res;
};

export const getCampanas = async (page: number, pageSize: number) => {
  const res = await apiRequest(`/admin/campanas?page=${page}&pageSize=${pageSize}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};


export const updateEstado = async (id: number, isinactive: "T" | "F") => {
  const res = await apiRequest(`/admin/campanas?id=${id}`, {
    method: "PATCH",
    body: JSON.stringify({ isinactive }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  setAccessToken(res.accessToken);
  return res;
};

export const getCampanaById = async (id: number) => {
  const res = await apiRequest(`/admin/campanas/${id}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const updateCampana = async (id: number, data: CampaignData) => {
  const res = await apiRequest(`/admin/campanas/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res?.accessToken) {
    setAccessToken(res.accessToken);
  }

  return res;
};

export interface sendNotificacionTestData {
  nombre: string;
  canal: number;
  asunto: string;
  estado: number;
  diasatraso: number;
  repetirpor: number;
  repetircada: number;
  mensaje: string;
}

export const sendNotificacionTest = async (data: sendNotificacionTestData) => {
  const res = await apiRequest(`/admin/campanas/notifications/sendtest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res?.accessToken) {
    setAccessToken(res.accessToken);
  }

  return res;
};