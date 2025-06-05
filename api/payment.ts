import axios from "axios";

export const MakePaymentRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json", // opcional pero recomendado
  },
});
