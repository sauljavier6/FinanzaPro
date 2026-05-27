import { apiRequest, setAccessToken } from "../api";

export const getClienteCV = async (search: string) => {
    const res = await apiRequest(`/admin/reportes/buscarusuario?search=${search}`, {
        method: "GET",
    });

    setAccessToken(res.accessToken);
    return res;
};

export const getReporteCV = async (params: any) => {
    const query = new URLSearchParams(params).toString();

    const res = await apiRequest(`/admin/reportes/cartera?${query}`, {
        method: "GET",
    });

    return res;
};

export const getReporteEC = async (params: any) => {
    const query = new URLSearchParams(params).toString();

    const res = await apiRequest(`/admin/reportes/estadocuentas?${query}`, {
        method: "GET",
    });

    return res;
};

export const getReporteV = async (params: any) => {
    const query = new URLSearchParams(params).toString();

    const res = await apiRequest(`/admin/reportes/ventas?${query}`, {
        method: "GET",
    });

    return res;
};

export const getReporteG = async () => {

    const res = await apiRequest(`/admin/reportes/graficas`, {
        method: "GET",
    });

    return res;
};
