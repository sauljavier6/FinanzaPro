import { apiRequest, setAccessToken } from "../api";

export const getInvoiceById = async (facturaId: any) => {
  const res = await apiRequest(`/admin/factura/${facturaId}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const getInvoices = async (page: number, pageSize: number, search: string, estado: string) => {
  const res = await apiRequest(`/admin/factura?page=${page}&pageSize=${pageSize}&search=${search}&estado=${estado}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const getInvoicesInfo = async () => {
  const res = await apiRequest(`/admin/factura/info/facturas`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const getPdfById = async (facturaId: any): Promise<Blob> => {
  let token = localStorage.getItem("accessToken");

  let response = await fetch(
    `${import.meta.env.VITE_API_URL}/admin/factura/pdf/${facturaId}`,
    {
      method: "GET",
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      credentials: "include",
    }
  );

  if (response.status === 401 || response.status === 403) {
    const refreshRes = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/refresh`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!refreshRes.ok) {
      localStorage.removeItem("accessToken");
      throw new Error("Sesión expirada");
    }

    const data = await refreshRes.json();
    token = data.accessToken;

    if (token) {
      localStorage.setItem("accessToken", token);
    }

    response = await fetch(
      `${import.meta.env.VITE_API_URL}/admin/factura/pdf/${facturaId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );
  }

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || "Error obteniendo PDF");
  }

  return await response.blob();
};