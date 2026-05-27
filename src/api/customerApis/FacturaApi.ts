import { apiRequest, setAccessToken } from "../api";

export const getFacturaById = async (id: number) => {
  const res = await apiRequest(`/customer/facturas/${id}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const getFacturas = async (ids: number[]) => {
  const res = await apiRequest(`/customer/facturas?ids=${ids.join(",")}`);

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