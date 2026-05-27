// src/api/api.ts
export const setAccessToken = (token: string | null) => {
  if (token) {
    localStorage.setItem("accessToken", token);
  }
};

const refreshAccessToken = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/refresh`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    setAccessToken(null);
    throw new Error("Sesión expirada");
  }

  const data = await res.json();
  setAccessToken(data.accessToken);
  return data.accessToken;
};

export const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  // ✅ Tomamos el token siempre desde localStorage
  let token = localStorage.getItem("accessToken");

  let res = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    credentials: "include", // para cookies
  });

  // Si expiró el token, intentamos refresh
  if (res.status === 401 || res.status === 403){
    try {
      const newToken = await refreshAccessToken();

      // Reintento con el nuevo token
      res = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken}`,
          ...options.headers,
        },
        credentials: "include",
      });
    } catch {
      throw new Error("Sesión expirada");
    }
  }

  if (!res.ok) {
    throw new Error("Error en la petición");
  }

  return res.json();
};