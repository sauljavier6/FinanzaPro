import { apiRequest, setAccessToken } from "../api";

interface User {
  email: string;
  password: string;
  rememberMe: boolean
}

export const loginUser = async (data: User) => {
  const res = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

  setAccessToken(res.accessToken);
  return res;
};

export const logoutUser = async () => {
  await apiRequest("/auth/logout", {
    method: "POST",
  });

  setAccessToken(null);
};

export const registerUser = async (dataForm: {
  fullName: string;
  customerNumber: string;
  rfc: string;
  phone: string;
  email: string;
  password: string;
  profileImage: File | null;
}) => {
  const formData = new FormData();

  formData.append("fullName", dataForm.fullName);
  formData.append("customerNumber", dataForm.customerNumber);
  formData.append("rfc", dataForm.rfc);
  formData.append("phone", dataForm.phone);
  formData.append("email", dataForm.email);
  formData.append("password", dataForm.password);

  if (dataForm.profileImage) {
    formData.append("profileImage", dataForm.profileImage);
  }

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/auth/register`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Error al registrar usuario");
  }

  return res.json();
};

export const sendEmailResetPassword = async (data: string) => {
  const res = await apiRequest("/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify({data}),
  });

  setAccessToken(res.accessToken);
  return res;
};

export const resetPassword = async (token: string, newPassword: string) => {
  const res = await apiRequest("/auth/reset-password", {
    method: "POST",
    body: JSON.stringify({
      token,
      newPassword,
    }),
  });

  return res;
};

