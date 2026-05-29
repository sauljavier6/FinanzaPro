import { apiRequest, setAccessToken } from "../api";

export const getDataProfile = async () => {
  const res = await apiRequest(`/customer/profile`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

export const getContactById = async (id: number) => {
  const res = await apiRequest(`/customer/profile/contact/${id}`, {
    method: "GET",
  });

  setAccessToken(res.accessToken);
  return res;
};

type Contact = {
  fullnombre: string;
  nombre: string;
  correo: string;
  telefono: string;
};

export const saveContact = async (data: Contact) => {
  const res = await apiRequest(`/customer/profile/contact`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  setAccessToken(res.accessToken);
  return res;
};

export const updateContact = async (id: number, data: Contact) => {
  const res = await apiRequest(`/customer/profile/contact/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  setAccessToken(res.accessToken);
  return res;
};

export const deleteContact = async (id: number) => {
  const res = await apiRequest(`/customer/profile/contact/${id}`, {
    method: "DELETE",
  });

  setAccessToken(res.accessToken);
  return res;
};

type Profile = {
  rfc: string;
  nombre: string;
  correo: string;
  telefono: string;
};

export const updateProfile = async (data: Profile) => {
  const res = await apiRequest(`/customer/profile`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  setAccessToken(res.accessToken);
  return res;
};

export const updateImageProfile = async (
  profileImage: File | null
) => {

  const formData = new FormData();

  if (profileImage) {
    formData.append(
      "profileImage",
      profileImage
    );
  }

  let token = localStorage.getItem(
    "accessToken"
  );

  let res = await fetch(
    `${import.meta.env.VITE_API_URL}/customer/profile`,
    {
      method: "POST",
      body: formData,
      credentials: "include",

      headers: {
        ...(token && {
          Authorization: `Bearer ${token}`,
        }),
      },
    }
  );

  if (
    res.status === 401 ||
    res.status === 403
  ) {

    const refresh = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/refresh`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!refresh.ok) {
      throw new Error(
        "Sesión expirada"
      );
    }

    const data = await refresh.json();

    setAccessToken(
      data.accessToken
    );

    res = await fetch(
      `${import.meta.env.VITE_API_URL}/customer/profile`,
      {
        method: "POST",
        body: formData,
        credentials: "include",

        headers: {
          Authorization:
            `Bearer ${data.accessToken}`,
        },
      }
    );
  }

  if (!res.ok) {

    const error =
      await res.json();

    throw new Error(
      error.message ||
      "Error al actualizar foto"
    );
  }

  return await res.json();
};