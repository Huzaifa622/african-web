"use client";
import { api } from "./axiosInstance";

export default async function getUser() {
  const res = await api.get("/me");

  window.localStorage.setItem("user", JSON.stringify(res.data.user));
  window.localStorage.setItem(
    "subscription",
    JSON.stringify(res.data.subscription)
  );
  return res;
}
